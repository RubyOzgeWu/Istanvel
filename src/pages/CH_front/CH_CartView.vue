<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="My Cart"
        icon="settings"
        :done="step > 1"
      >
         <q-table
        :grid="$q.screen.xs"
        title="我的購物車"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        >
        <template v-slot:item="card">
            <div
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
              :style="card.selected ? 'transform: scale(0.95);' : ''"
            >
              <q-card :class="card.selected ? 'bg-grey-2' : ''">
                <!-- <q-card-section> -->
                  <!-- <q-checkbox dense v-model="card.selected" :label="card.row.name" /> -->
                <!-- </q-card-section> -->
                <!-- <q-separator /> -->
                <q-list v-for="col in card.cols" :key="col.name">
                  <q-item >
                    <q-item-section>
                      <q-item>
                        <!-- <q-item-label>{{ col.label }}</q-item-label> -->
                        <!-- card.col => 指 整個data col // col.name => card.cols.name col的name 要相同於 row value 的 name -->
                        <q-item-label caption v-if="col.name !== 'image' && col.name !== 'edit' && col.name !== 'deleteIt'">
                          <!-- {{ card.row[col.name] }} -->
                          {{ col.value}}
                        </q-item-label>
                        <q-item-label caption v-if="col.name === 'edit'">
                          <!-- {{ card.row[col.name] }} -->
                            <q-card-action>
                              <q-btn @click='updateCart(card.row._id, card.row.quantity - 1)' variant="text">-</q-btn>
                              {{ col.value}}
                              <q-btn @click='updateCart(card.row._id, card.row.quantity + 1)' variant="text">+</q-btn>
                            </q-card-action>
                        </q-item-label>
                        <q-item-label caption v-if="col.name === 'deleteIt'">
                          <q-card-action>
                              <q-btn @click='updateCart(card.row._id, 0)'>delete</q-btn>
                          </q-card-action>
                        </q-item-label>
                        <q-avatar square v-else-if="col.name == 'image'">
                            <!-- <img :src="card.row[col.name]" alt=""> -->
                            <img :src="card.row.tour?.image ||card.row.activity?.image" alt="">
                            <!-- <h3>{{ card.row.image }}</h3> -->
                            <!-- <q-btn>1234</q-btn> -->
                            <!-- <h1>{{ row.name }}</h1> -->
                        </q-avatar>
                      </q-item>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label caption></q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
                <!-- <q-card-action>
                  <q-btn @click='updateCart(card.row._id, card.row.quantity - 1)' variant="text">-</q-btn>
                  <q-btn @click='updateCart(card.row._id, card.row.quantity + 1)' variant="text">+</q-btn>
                </q-card-action> -->
              </q-card>
            </div>
        </template>
        <template #body-cell-edit="edit">
            <q-td :edit="edit">
                <q-btn @click='updateCart(edit.row._id, edit.row.quantity - 1)' variant="text">-</q-btn>
                {{ edit.row.quantity}}
                <q-btn @click='updateCart(edit.row._id, edit.row.quantity + 1)' variant="text">+</q-btn>
            </q-td>
        </template>
        <template #body-cell-deleteIt="deleteIt">
            <q-td >
                <q-btn @click="updateCart(deleteIt.row._id, 0)">刪除</q-btn>
            </q-td>
        </template>
        <template #body-cell-image="image">
            <q-td>
            <q-avatar
                square
                size="100px"
            >
                <img :src="image.row.tour?.image || image.row.activity?.image" alt="">
            </q-avatar>
            </q-td>
        </template>
        </q-table>
      </q-step>

      <q-step
        :name="2"
        title="Enter Info"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-btn color="secondary"  @click="openDialog('')" :disabled="hasInfo()">新增訂購資料</q-btn>
        <q-dialog v-model="form.dialog" persistent>
          <q-card style="min-width: 700px">
            <q-card-section>
              <div class="text-h6">新增訂購資料</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-form @submit.prevent='submit'>
                <q-input filled v-model="form.name" label="訂購人姓名" :rules="[ val => val && val.length > 0 || '請輸入訂購人姓名']" />
                <q-input filled v-model="form.email" label="訂購人信箱" :rules="emailRule" />
                <q-input filled v-model="form.phone" label="聯絡電話" :rules="[ val => val && val.length > 0 || '請輸入訂購人電話']"/>
                <q-btn flat label="取消" v-close-popup />
                <q-btn flat label="儲存" type="submit" v-close-popup />
              </q-form>
            </q-card-section>
          </q-card>
        </q-dialog>
        <q-card class="my-card">
          <q-card-section>
            <div v-for="i in info" :key="i._id">
              <p>訂購人姓名: {{i.name}}</p>
              <p>訂購人信箱: {{i.email}}</p>
              <p>聯絡電話: {{i.phone}}</p>
              <q-btn  @click="openDialog(i._id)" flat>編輯</q-btn>
            </div>
          </q-card-section>
        </q-card>
      </q-step>

      <q-step
        :name="3"
        title="Check Out"
        icon="assignment"
      >
      <q-btn color="secondary"  @click='user.CH_checkout' :disabled="!hasInfo() || !canCheckout">結帳</q-btn>

      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>

</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'
import { isEmail } from 'validator'

const step = ref(1)
const user = useUserStore()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.tour?.CH_name || row.activity?.CH_name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'image', align: 'center', label: '照片', sortable: true },
  { name: 'edit', label: '數量', field: row => row.quantity, sortable: true },
  { name: 'deleteIt', label: '刪除', field: row => row.quantity, sortable: true }

]
const rows = reactive([])
const filter = ref('')
const emailRule = reactive([
  v => !!v || '信箱必填',
  v => isEmail(v) || '請輸入正確的信箱格式'
])
const form = reactive({
  _id: '',
  name: '',
  email: '',
  phone: '',
  idx: -1,
  dialog: false,
  submitting: false
})
const openDialog = (_id) => {
  form._id = _id
  const idx = _id === '' ? -1 : info.findIndex(i => i._id === _id)
  if (idx > -1) {
    form.name = info[idx].name
    form.email = info[idx].email
    form.phone = info[idx].phone
  } else {
    form.name = ''
    form.email = ''
    form.phone = ''
  }
  form.idx = idx
  form.dialog = true
  form.submitting = false
}
const updateCart = async (_id, quantity) => {
  const idx = rows.findIndex(row => row._id === _id)
  if (rows[idx].tour) {
    const result = await user.updateCart({ tour: rows[idx].tour._id, quantity })
    if (result) {
      if (quantity === 0) {
        rows.splice(idx, 1)
      } else {
        rows[idx].quantity = quantity
      }
    }
  } else if (rows[idx].activity) {
    const result = await user.updateCart({ activity: rows[idx].activity._id, quantity })
    if (result) {
      if (quantity === 0) {
        rows.splice(idx, 1)
      } else {
        rows[idx].quantity = quantity
      }
    }
  }
}
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    rows.splice(0, rows.length)
    rows.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
const info = reactive([])

const getInfo = async() => {
  try {
    const { data } = await apiAuth.get('/users/orderInfo')
    info.splice(0, rows.length)
    info.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getInfo()

const submit = async () => {
  form.submitting = true
  try {
    if (form._id.length === 0) {
      user.CH_addOrderInfo({
        name: form.name,
        email: form.email,
        phone: form.phone
      })
    } else {
      const { data } = await apiAuth.patch('/users/orderInfo', {
        _id: form._id,
        name: form.name,
        email: form.email,
        phone: form.phone
      })
    }
    getInfo()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const hasInfo = () => {
  console.log(info)
  if (info.length !== 0) {
    return true
  } else {
    return false
  }
}

const canCheckout = computed(() => {
  return rows.length > 0 && !rows.some(item => {
    return !(item.tour?.sell || item.activity?.sell)
  })
})
</script>

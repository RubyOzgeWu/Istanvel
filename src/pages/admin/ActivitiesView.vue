<template>
<div class="q-pa-md">
  <div class="row">
    <div class="col-12">
      <q-btn label="新增活動" color="secondary" @click="openDialog('', -1)" />
      <q-dialog v-model="form.dialog" persistent>
      <!-- <q-form > -->
        <q-card style="width: 700px; max-width: 80vw;">
            <q-toolbar>
                <q-toolbar-title><span class="text-weight-bold">新增商品</span></q-toolbar-title>
            </q-toolbar>

            <q-form v-model='form.valid' @submit.prevent='submitForm'>
              <q-card>
                <q-card-section class="q-pt-none">
                  <q-input dense v-model="form.name" autofocus label="活動名稱" :rules='[rules.required]'/>
                  <q-input dense v-model="form.CH_name" autofocus label="活動名稱(中文)" :rules='[rules.required]'/>
                  <q-input dense v-model="form.description" autofocus type="textarea" label="活動敘述(英文)" :rules='[rules.required]'/>
                  <q-input dense v-model="form.CH_description" autofocus type="textarea" label="活動敘述（中文）" :rules='[rules.required]'/>
                  <q-input dense v-model="form.location" autofocus label="活動地點" :rules='[rules.required]'/>
                  <q-input dense v-model="form.dateStart" autofocus label="開始日期" :rules='[rules.required]' />
                  <q-input dense v-model="form.dateEnd" autofocus label="結束日期" />
                  <q-input dense v-model="form.time" autofocus label="時間" />
                  <q-input dense v-model="form.price" autofocus label="價格" />
                  <q-select v-model="form.category" :options="options" label="行程分類（英文）" :rules='[rules.required]'/>
                  <q-select v-model="form.CH_category" :options="chOptions" label="行程分類（中文）" :rules='[rules.required]'/>
                  <q-file dense v-model="form.image" autofocus label="照片" />
                  <q-checkbox v-model="form.sell" label="上架" color="teal" />
                </q-card-section>
                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat type='submit' :loading='form.submitting' label="確定" v-close-popup />
                    <q-btn flat label="取消" @click='form.dialog = false' :disabled='form.submitting' v-close-popup />
                  </q-card-actions>
              </q-card>
            </q-form>
        </q-card>

      <!-- </q-form> -->
      </q-dialog>
    </div>
    <div class="col-12">
      <q-table
          :grid="$q.screen.xs"
          title="活動管理"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
          @row-click="onRowClick"
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
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
                          <q-item-label caption v-if="col.name !== 'image'">
                            <!-- {{ card.row[col.name] }} -->
                            {{ col.value}}
                          </q-item-label>
                          <q-avatar square v-else-if="col.name == 'image'">
                              <!-- <img :src="card.row[col.name]" alt=""> -->
                              <img :src="card.row.image " alt="">
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
                  <q-card-action>
                    <q-btn  @click="openDialog(card.row._id)" >編輯</q-btn>
                    <q-btn   @click="deleteIt(card.row._id)" >刪除</q-btn>
                  </q-card-action>
                </q-card>
              </div>
          </template>
          <template #body-cell-edit="edit">
            <q-btn  @click="openDialog(edit.row._id)" :edit="edit">編輯</q-btn>
            <q-btn @click="deleteIt(edit.row._id)" >刪除</q-btn>
          </template>
          <template #body-cell-image="image">
            <q-td>
              <q-avatar
                square
                size="100px"
              >
                <img :src="image.row.image" alt="">
              </q-avatar>
            </q-td>
          </template>
        </q-table>
    </div>
  </div>

</div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios.js'

const columns = [
  {
    name: 'Name',
    required: true,
    label: '活動名稱（英文）',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'ChName', align: 'center', label: '活動名稱（中文）', field: row => row.CH_name, sortable: true },
  { name: 'image', align: 'center', label: '照片', sortable: true },
  { name: 'Description', align: 'center', label: '活動介紹（英文）', field: row => row.description, sortable: true },
  { name: 'ChDescription', align: 'center', label: '活動介紹（中文）', field: row => row.CH_description, sortable: true },
  { name: 'DateStart', label: 'Category', field: row => row.dateStart, sortable: true },
  { name: 'DateEnd', label: 'Category', field: row => row.dateEnd, sortable: true },
  { name: 'edit', label: '編輯刪除', sortable: true }
]

const rows = reactive([])

const filter = ref('')

const form = reactive({
  _id: '',
  name: '',
  CH_name: '',
  description: '',
  CH_description: '',
  image: null,
  location: '',
  dateStart: '',
  dateEnd: '',
  time: '',
  price: 0,
  category: '',
  CH_category: '',
  sell: false,
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const options = ['Art & Design', 'Technology & Science', 'Food', 'Industry', 'Business']
const chOptions = ['藝術設計', '科技與科學', '食物', '產業', '商業']

const rules = reactive({
  required (v) {
    return !!v || '必填'
  },
  price (v) {
    return v > -1 || '必須大於等於 0'
  },
  size (v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})
const openDialog = (_id) => {
  form._id = _id
  const idx = _id === '' ? -1 : rows.findIndex(row => row._id === _id)
  if (idx > -1) {
    form.name = rows[idx].name
    form.CH_name = rows[idx].CH_name
    form.description = rows[idx].description
    form.CH_description = rows[idx].CH_description
    form.location = rows[idx].location
    form.dateStart = rows[idx].dateStart
    form.dateEnd = rows[idx].dateEnd
    form.time = rows[idx].time
    form.price = rows[idx].price
    form.category = rows[idx].category
    form.CH_category = rows[idx].CH_category
    form.sell = rows[idx].sell
  } else {
    form.name = ''
    form.CH_name = ''
    form.description = ''
    form.CH_description = ''
    form.location = ''
    form.dateStart = ''
    form.dateEnd = ''
    form.time = ''
    form.price = 0
    form.category = ''
    form.CH_category = ''
    form.sell = false
  }
  form.image = null
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}
const submitForm = async () => {
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    // else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/activities', fd)
      rows.splice(0, rows.length)
      rows.push(data.result)

      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
      init()
    } else {
      const { data } = await apiAuth.patch('/activities/' + form._id, fd)
      rows[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
      init()
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'success',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}
const init = async () => {
  try {
    const { data } = await apiAuth.get('/activities/all')
    rows.splice(0, rows.length)
    rows.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

const deleteIt = async (id) => {
  console.log(id)
  try {
    await apiAuth.delete('/activities/' + id)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    await Swal.fire({
      icon: 'success',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}
// const onRowClick = (event, row) => {
//   console.log(rows.indexOf('img'))
//   const result = rows.map(function (item, index) {
//     return item._id
//   })
//   openDialog(row._id, result.indexOf(row._id))
// }
</script>

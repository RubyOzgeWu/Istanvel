<template>
<div class="q-pa-md" id="ActivityView">
    <div class="banner">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-full text-subtitle2 flex column flex-center">
                <h1>{{activity.CH_name}}</h1>
            </div>
        </q-img>
    </div>
    <div class="row">
        <div class="col-9">
            <h1>{{activity.CH_name}}</h1>
            <span>{{activity.CH_description}}</span>
        </div>
        <div class="col-3">
            <q-form v-model="valid" @submit.prevent='submit'>
                <!-- <q-input filled v-model="checkForm.name" label="您的姓名"  :rules="[ val => val && val.length > 0 || '請輸入姓名']"/> -->
                <!-- <q-input filled v-model="checkForm.email" label="您的信箱"  :rules="[ val => val && val.length > 0 || '請輸入信箱']"/> -->
                <!-- <q-input filled v-model="checkForm.phone" label="電話號碼" /> -->
                <q-input filled v-model="date" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input filled v-model.number="quantity" type="number" label="票數"  :rules="quantityRule"/>
                <!-- <q-input filled v-model="checkForm.message" type="textarea" label="訊息留言區" /> -->
                <q-btn color="secondary" type="submit">訂票</q-btn>

            </q-form>
        </div>
    </div>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const activity = reactive({
  _id: '',
  CH_name: '',
  CH_description: '',
  location: '',
  dateStart: '',
  dateEnd: '',
  timeStart: '',
  timeEnd: '',
  image: '',
  price: 0,
  sell: false
})

// const checkForm = reactive({
//   name: '',
//   email: '',
//   phone: '',
//   message: ''
// })
const date = ref('2022/01/01')
const quantity = ref(0)
const quantityRule = reactive([
  v => v >= 1 || '數量錯誤'
])
const valid = ref(false)

const init = async () => {
  try {
    const { data } = await api.get('/activities/' + route.params.id)
    activity._id = data.result._id
    activity.CH_name = data.result.CH_name
    activity.CH_description = data.result.CH_description
    activity.location = data.result.location
    activity.dateStart = data.result.dateStart
    activity.dateEnd = data.result.dateEnd
    activity.timeStart = data.result.timeStart
    activity.timeEnd = data.result.timeEnd
    activity.image = data.result.image
    activity.price = data.result.price
    activity.sell = data.result.sell
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1)
  }
}
init()

const submit = () => {
  console.log(activity._id)
  user.addCart({
    activity: activity._id,
    // name: checkForm.name,
    // email: checkForm.email,
    // phone: checkForm.phone,
    date: date.value,
    quantity: quantity.value
    // message: checkForm.message
  }, 2)
}
</script>

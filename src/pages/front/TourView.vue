<template>
<div class="q-pa-md" id="TourView">
    <div class="banner">
        <q-img :src="tour.image">
            <div class="absolute-full text-subtitle2 flex column flex-center">
                <h2 class="text-center">{{tour.name}}</h2>
            </div>
        </q-img>
    </div>

    <!-- info-------------------------------------------------------------------- -->
    <div class="background">
        <div class="row content">
          <div class="col-sm-8 col-xs-12 info" >
              <p class="title">{{tour.name}}</p>
              <p class="description">{{tour.description}}</p>

              <table class="text-white table">
                <thead>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td><p>Included</p></td>
                    <td><p>{{tour.included}}</p></td>
                  </tr>
                  <tr>
                    <td><p>Departure Time</p></td>
                    <td><p>{{tour.departureTime}}</p></td>
                  </tr>
                  <tr>
                    <td><p>Departure Location</p> </td>
                    <td><p>{{tour.departureLocation}}</p></td>
                  </tr>
                  <tr>
                    <td><p>Note</p></td>
                    <td><p>{{tour.note}}</p></td>
                  </tr>
                </tbody>
              </table>

              <q-img :src="tour.image" class="image"></q-img>

          </div>
          <div class="col-sm-4 col-xs-12 order">
              <h4>Package Options</h4>
              <q-form v-model="valid" @submit.prevent='submit'>
                  <!-- <q-input filled v-model="checkForm.name" label="Your name"  :rules="[ val => val && val.length > 0 || 'Please enter your name']"/> -->
                  <!-- <q-input filled v-model="checkForm.email" label="Your email"  :rules="emailRule"/> -->
                  <!-- <q-input filled v-model="checkForm.phone" label="Your phone number" /> -->
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
                  <q-input filled v-model.number="quantity" type="number" label="number of ticket"  :rules="quantityRule"/>
                  <p class="total">Total $ {{tour.price*quantity}}</p>
                  <!-- <q-input filled v-model="checkForm.message" type="textarea" label="leave us some messages" /> -->
                  <q-btn color="secondary" type="submit" class="submit">add to the cart</q-btn>
                  <!-- <q-btn color="secondary" type="submit">click to order</q-btn> -->

              </q-form>
          </div>
      </div>
    </div>

</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'
import { isEmail } from 'validator'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const tour = reactive({
  _id: '',
  name: '',
  description: '',
  departureLocation: '',
  departureTime: '',
  included: '',
  notIncluded: '',
  openTime: '',
  address: '',
  note: '',
  image: '',
  price: 0,
  category: '',
  sell: false
})

const date = ref('2022/01/01')
const quantity = ref(0)
const quantityRule = reactive([
  v => v >= 1 || 'At least one ticket'
])

const valid = ref(false)

const init = async () => {
  try {
    const { data } = await api.get('/tours/' + route.params.id)
    tour._id = data.result._id
    tour.name = data.result.name
    tour.description = data.result.description
    tour.departureLocation = data.result.departureLocation
    tour.departureTime = data.result.departureTime
    tour.included = data.result.included
    tour.notIncluded = data.result.notIncluded
    tour.openTime = data.result.openTime
    tour.address = data.result.address
    tour.note = data.result.note
    tour.image = data.result.image
    tour.price = data.result.price
    tour.category = data.result.category
    tour.sell = data.result.sell
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: 'failed to get the tour info.'
    })
    router.go(-1)
  }
}
init()

// const submit = () => {
//   if (!valid.value) return
//   user.addOrder({ tour: tour._id, name: checkForm.name, email: checkForm.email, phone: checkForm.phone, date: checkForm.date, quantity: quantity.value, message: checkForm.message })
// }
const submit = () => {
  user.addCart({
    tour: tour._id,
    // name: checkForm.name,
    // email: checkForm.email,
    // phone: checkForm.phone,
    date: date.value,
    quantity: quantity.value
    // message: checkForm.message
  }, 1)
}
</script>

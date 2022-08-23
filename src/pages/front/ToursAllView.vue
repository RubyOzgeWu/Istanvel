<template>
<div class="q-pa-md" id="ToursAllView">
    <div class="banner">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <!--  -->
          <div class="absolute-full text-subtitle2 flex column flex-center">
            <h1>Tours</h1>
            <p>Enjoy the journey in Istanbul</p>
          </div>
        </q-img>
    </div>

    <div class="q-pa-md background">
        <div class="tours row">
          <div class="col-12" style="border:1px solid green">123</div>
          <div class="col-12 row">
            <div class="col col-12 col-sm-6 col-md-3" v-for="tour in tours" :key="tour._id">
              <TourCard :tour="tour" id="TourCard"></TourCard>
            </div>
          </div>
        </div>
    </div>

</div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../../boot/axios.js'
import TourCard from '../../components/TourCard.vue'

const tours = reactive([])

const init = async() => {
  try {
    const { data } = await api.get('/tours')
    tours.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: '伺服器錯誤'
    })
  }
}
init()

</script>

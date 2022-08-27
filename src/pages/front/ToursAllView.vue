<template>
<div class="q-pa-md" id="ToursAllView">
    <div class="banner">
        <q-img src="../../assets/merveilleux.jpeg">
          <!--  -->
          <div class="absolute-full text-subtitle2 flex column flex-center">
            <h1>Package Tours</h1>
            <p>Find the most special, impressive and fantastic journey in Istanbul</p>
          </div>
        </q-img>
    </div>

    <div class="q-pa-md background">
        <div class="tours row">
          <div class="col-12 row">
            <div class="col col-xl-3 col-sm-3 col-md-3 col-xs-6" v-for="tour in tours" :key="tour._id">
              <TourCard :tour="tour" id="TourCard"></TourCard>
            </div>
          </div>
          <div class="col-12 row">
            <div class="col col-xl-3 col-sm-3 col-md-3 col-xs-6" v-for="tour in tours" :key="tour._id">
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
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

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

<template>
<div class="q-pa-md" id="TransAllView">
  <!-- banner -->
    <div class="banner">
      <video autoplay loop class="video" style="object-fit: cover;" src="../../../assets/pexels-polina-kovaleva-7957382.mp4">
        <source type="video/mp4">
      </video>
      <div class="absolute-full text-subtitle2 flex column flex-center">
          <h1>Transportation</h1>
          <p>More easily to reach wherever you want to visit in Istanbul.</p>
      </div>
    </div>
    <!-- selections -->
    <div class="q-mx-auto selections" >
      <div class="q-pa-md row items-center selectionBox ">
      <!-- metro -->
        <q-card class="my-card row selection q-mx-xl-xl q-mx-lg-lg  q-mx-md-md q-mx-sm-sm" @click="goMetro" data-aos="fade-right" data-aos-offset="20">
            <q-card-section class="category col-3 col-xs-12 column">
              <q-icon name="train" size="140px" color="white" class="icon col-xl-7 col-lg-8 col-md-7 col-sm-7 col-xs-6" />
              <div class="text-h6 title col-xl-5 col-lg-5 col-md-5 col-sm-5" >Metro</div>
            </q-card-section>
        </q-card>

      <!-- tramvay -->
        <q-card class="my-card row selection q-mx-xl-xl q-mx-lg-lg q-mx-md-md q-mx-sm-sm " @click="goTram">
            <q-card-section class="category col-3 col-xs-12 column" >
              <q-icon name="tram" size="140px" color="white" class="icon col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-6" />
              <div class="text-h6 title col-xl-5 col-lg-5 col-md-5 col-sm-5" >Tramvay</div>
            </q-card-section>
        </q-card>

        <!-- marmaray -->
        <q-card class="my-card row selection q-mx-xl-xl q-mx-lg-lg q-mx-md-md q-mx-sm-sm" @click="goMarmaray" data-aos="fade-left" data-aos-offset="20">
            <q-card-section class="category col-3 col-xs-12 column" >
              <q-icon name="directions_subway" size="140px" color="white"  class="icon col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-6" />
              <div class="text-h6 title col-xl-5 col-lg-5 col-md-5 col-sm-5" >Marmaray</div>
            </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- carousel -->
    <div class="q-pa-md carouselBack">
      <h4>Travel to where you want to go...</h4>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="300px"
          class="large"
          data-aos="flip-down"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-around items-center no-wrap" >
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/sultanahmet.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-around items-center no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/sultanahmet.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-around items-center no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/sultanahmet.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-around items-center no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/sultanahmet.jpg" />
            </div>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-if="$q.screen.lt.lg"
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="300px"
          class="medium"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-between items-center no-wrap" >
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-col-gutter no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center q-col-gutter no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
              <q-img class="rounded-borders col-4 full-heigh q-mx-sm" src="../../../assets/merveilleux.jpeg" />
            </div>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-if="$q.screen.lt.md"
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="300px"
          class="small"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-between items-center no-wrap" >
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center no-wrap">
                <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/merveilleux.jpeg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-col-gutter no-wrap">
                <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/sultanahmet.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center q-col-gutter no-wrap">
              <q-img class="rounded-borders col-4 full-height q-mx-sm" src="../../../assets/galata.jpg" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
     <footer>

    </footer>
</div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const router = useRouter()

const slide = ref(1)
const goMetro = () => {
  router.push('/metro')
}
const goTram = () => {
  router.push('/tramvay')
}
const goMarmaray = () => {
  router.push('/Marmaray')
}
// const selectMethod = ref(null)
// const selectType = ref(null)
// const methods = reactive(['Metro', 'Tram', 'Marmaray'])
// const types = reactive([
//   'All', 'Culinary delights', 'History & Heritages', 'Sacred Religion', 'Shopping', 'Nature & Outdoors', 'Top & Must see'
// ])

// const form = reactive({
//   type: [],
//   method: []
// })

// const _1 = watch(selectMethod, () => {
//   if (selectMethod.value) {
//     selectType.value = null
//     form.type.splice(0, form.type.length)
//   }
// })
// const _2 = watch(selectType, () => {
//   if (selectType.value) {
//     selectMethod.value = null
//     form.method.splice(0, form.method.length)
//   }
// })
// const getMethod = async (value) => {
//   form.method.splice(0, form.method.length)
//   form.method.push(value)
// }
// const getType = async (value) => {
//   form.type.splice(0, form.type.length)
//   form.type.push(value)
// }

// const submit = async(value) => {
//   if (form.method.includes('Metro')) {
//     router.push('/metro')
//   } else if (form.method.includes('Tram')) {
//     router.push('/tramvay')
//   } else if (form.method.includes('Marmaray')) {
//     router.push('/Marmaray')
//   }
// }

</script>

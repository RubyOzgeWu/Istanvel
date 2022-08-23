<template>
<div class="q-pa-md" id="TransAllView">
  <!-- banner -->
    <div class="banner">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-full text-subtitle2 flex column flex-center">
            <h1>Transportation</h1>
            <p>More easily to reach wherever you want to visit in Istanbul.</p>
            </div>
        </q-img>
    </div>
    <!-- selections -->
    <div class="q-mx-auto selections">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card row" @click="goMetro">
            <q-card-section class="col column">
              <q-icon name="train" size="140px" color="white"/>
              <div class="text-h6">Metro</div>
            </q-card-section>
        </q-card>
        <q-card class="my-card row " @click="goTram">
            <q-card-section class="col column">
              <q-icon  name="tram" size="140px" color="white"/>
              <div class="text-h6">Tram</div>
            </q-card-section>
        </q-card>
        <q-card class="my-card row" @click="goMarmaray">
            <q-card-section class="col column">
              <q-icon  name="directions_subway" size="140px" color="white"/>
              <div class="text-h6">Marmaray</div>
            </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- allMap -->
    <div class="q-mx-auto allMap">
      <div class="q-pa-md row">
        <q-img src="../../../assets/transportation-line-map.jpg"></q-img>
      </div>
    </div>
    <!-- carousel -->
    <div class="q-pa-md wrap">
      <div class="q-mx-auto carousel">
        <div class="q-pa-md">
            <q-carousel
              arrows
              animated
              v-model="slide"
              height="500px"
            >
              <q-carousel-slide name="first" >
                <div class="row">
                  <div class="col imgBox">
                    <q-img src="../../../assets/galata.jpg"></q-img>
                  </div>
                  <div class="col info">
                    <h2>Galata</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maxime ab ducimus dignissimos iste neque quae atque, delectus aperiam, voluptatum sint officia voluptatem mollitia necessitatibus! Ullam velit quod non molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet odio magni velit placeat quasi magnam rerum molestiae sequi accusantium aspernatur laudantium mollitia inventore dolorum, incidunt necessitatibus nisi esse. Necessitatibus ut vitae tenetur nostrum quam magnam porro omnis dolorum! Eius sit saepe quo minima veritatis hic nisi impedit fugiat possimus vero? Tempore inventore asperiores dolor reiciendis ex ut quia assumenda et nam, totam voluptates a consectetur. Explicabo doloribus ea facere deserunt dolor cum autem eligendi fugiat? Dolorum in aspernatur nobis recusandae, molestias sapiente, dolorem sint, ex porro deserunt autem id repellendus. Dolore libero dolor cupiditate fugiat quas aliquam consequatur quam dignissimos?</p>
                  </div>
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="second">

              </q-carousel-slide>

              <q-carousel-slide name="third" >

              </q-carousel-slide>
            </q-carousel>
        </div>
      </div>
    </div>
     <footer>

    </footer>
</div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const slide = ref('first')
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

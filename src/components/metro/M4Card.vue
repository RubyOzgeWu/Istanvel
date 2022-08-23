<template>
<div class="row card">
  <div class="col-8 column left">
    <div id="map" />
  </div>
  <div class="col-4 column right">
    <div class="col">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
          <h3>Hagia Sophia</h3>
          </div>
      </q-img>
      <h2>hagia sophia</h2>
      <p>Hagia Sophia is the most popular site in Istanbul</p>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
          <h3>Hagia Sophia</h3>
          </div>
      </q-img>
    </div>
  </div>

</div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
const states = reactive({
  google: null,
  map: null,
  markers: null
})
const markers = reactive([])
const infowindows = reactive([])
const lat = reactive([
  40.99273603659175,
  40.990120750104566,
  40.99085434507776,
  40.99114204089927,
  40.991241633649864,
  40.9971468172588,
  40.97918337189312,
  40.98016327408239
])
const lng = reactive([
  29.014894355656573,
  29.024443284491944,
  29.024914224972825,
  29.026090113327456,
  29.026722840314683,
  29.023247467302106,
  29.025012653808037,
  29.026945069149974
])

const content = reactive([
  'Kadıköy İnciburnu Feneri',
  'Armenian Church of Surp Takavor',
  'Greek Orthodox Church of Ayia Efimia',
  'Osman Aga Mosque',
  'Osman Aga Fountain',
  'Haydarpasa Mosque',
  'Moda Pier',
  'Moda Coastal Park and Pathway'
])

let directionsService, directionsRenderer

const initMap = async() => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    version: 'weekly',
    libraries: ['places'],
    language: 'zh-TW'
  })
  states.google = await loader.load()
  states.map = new states.google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.084153235890845, lng: 28.81618672479194 },
    zoom: 14,
    mapTypeControl: false,
    fullscreenControl: false
  })
  directionsService = new states.google.maps.DirectionsService()
  directionsRenderer = new states.google.maps.DirectionsRenderer()
  directionsRenderer.setMap(states.map)
  calcRoute()
}

const calcRoute = () => {
  const request = {
    origin: { lat: 40.991208447315486, lng: 29.022243518099568 },
    destination: { lat: 40.88220175293726, lng: 29.2485060010489 },
    travelMode: 'TRANSIT',
    transitOptions: {
      modes: ['SUBWAY'],
      routingPreference: 'FEWER_TRANSFERS'
    }
  }
  directionsService.route(request, function(result, status) {
    if (status === 'OK') {
      const steps = result.routes[0].legs[0].steps
      //   // 加入地圖標記
      for (let i = 0; i <= 7; i++) {
        markers[i] = new states.google.maps.Marker({
          position: { lat: lat[i], lng: lng[i] },
          map: states.map,
          label: { text: `${i + 1}`, color: '#fff' }
        })
        infowindows[i] = new states.google.maps.InfoWindow({
          content: content[i]
        })
        markers[i].addListener('click', function () {
          if (infowindows[i].anchor) {
            infowindows[i].close()
          } else {
            infowindows[i].open(states.map, markers[i])
          }
        })
      }

      directionsRenderer.setDirections(result)
    }
  })
}

setTimeout(() => { initMap() }, 400)
// onMounted(async () => {
//   await initMap()
// })

</script>

<template>
<div class="row card" id="TransCard">
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
import 'vue-material-design-icons/styles.css'

const states = reactive({
  google: null,
  map: null,
  markers: null
})
const markers = reactive([])
const infowindows = reactive([])
const lat = reactive([
  41.0085897,
  41.01011326,
  41.01185542,
  41.00914523,
  41.00996409,
  41.01042438,
  41.01329268,
  41.01638709,
  41.01615222,
  41.01745548,
  41.01466468,
  41.02450076,
  41.02595063,
  41.03201022,
  41.03253419,
  41.02707333,
  41.02790213,
  41.03806963,
  41.04486655396734,
  41.04841500711954,
  41.04955127405445,
  41.05657818351158,
  41.085171832869285,
  41.096557758632024,
  41.14645602053973,
  41.13436797796986

])
const lng = reactive([
  28.955665824973337,
  28.956688142029563,
  28.981394857371743,
  28.9666399979861,
  28.961541069150638,
  28.965256242163424,
  28.960296209631593,
  28.960192267302606,
  28.964056928669972,
  28.963810165374785,
  28.955843786327804,
  28.971112599834715,
  28.97422680155211,
  28.975221755657586,
  28.976897363606387,
  28.972583182644687,
  28.976840899834766,
  28.984834177213436,
  28.9862291421642,
  28.988013944012458,
  28.99440904401254,
  28.98713582682264,
  29.00636856730424,
  28.989195953810828,
  29.016304869153878,
  29.032339840842432
])
const content = reactive([
  'Bodrum Mosque',
  'Laleli Mosque',
  'Istanbul Archaeology Museums',
  'Beyazit Square',
  'Bayezid II Hamam',
  'Bayezid II Mosque',
  'Kalenderhane Mosque',
  'Church-Mosque of Vefa',
  'Süleymaniye Mosque',
  'Mimar Sinan Türbesi',
  'Sarachane Park',
  'Arap Camii',
  'Galata Tower',
  'Pera Museum',
  'The Church of St. Anthony of Padua',
  'Neve Shalom Synagogue',
  'Crimea Memorial Church',
  'Taksim Square',
  'Cathedral of the Holy Spirit',
  'Harbiye Military Museum and Cultural Site Command',
  'Teşvikiye Camii',
  'Atatürk Museum',
  'Istanbul Sapphire observation deck',
  'Saklıgöl',
  'Fatih Forest Nature Park',
  'Atatürk Kent Ormanı'
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
    center: { lat: 41.015637550979484, lng: 28.95025855386467 },
    // 41.021748162505865,28.92402519473123
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
    origin: { lat: 41.00609960361108, lng: 28.951570296095493 },
    destination: { lat: 41.13997814478381, lng: 29.03074866549749 },
    travelMode: 'TRANSIT'
  }
  directionsService.route(request, function(result, status) {
    if (status === 'OK') {
      const steps = result.routes[0].legs[0].steps
      //   // 加入地圖標記
      for (let i = 0; i <= 24; i++) {
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

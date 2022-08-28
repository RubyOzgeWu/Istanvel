<template>
<div class="row card" id="TransCard">
  <div class="col-8 column left">
    <div id="map" />
  </div>
  <div class="col-4 column right">
    <div class="col">
      <q-img src="../../assets/metro/semsi.jpeg"></q-img>
      <h5>2. Şemsi Pasha Mosque</h5>
      <p>The Şemsi Pasha Mosque was designed by Ottoman imperial architect Mimar Sinan for Grand Vizier Şemsi Pasha.</p>

      <q-img src="../../assets/metro/yeni.jpeg"></q-img>
      <h5>3. Yeni Valide Mosque</h5>
      <p> It was built for sultan Ahmed III in honour of his mother Emetullah Râbi'a Gülnûş Sultan.</p>
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
  41.0254670064689,
  41.02609255847969,
  41.02491124961364,
  41.02245283952033,
  41.03734594190852,
  41.01376689781175
])

const lng = reactive([
  29.009996511480086,
  29.011274923125573,
  29.01509862682192,
  29.014312742163558,
  29.030101069151304,
  29.04189051147985
])

const content = reactive([
  'Üsküdar Hanım Sultans Museum',
  'Şemsi Pasha Mosque',
  'Yeni Valide Mosque',
  'Aziz Mahmud Hüdayi Mosque',
  'Kuzguncuk Sahili',
  'Hababam Sınıfı Museum'
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
    origin: { lat: 41.02631687799154, lng: 29.01491294024716 },
    destination: { lat: 41.01457963805404, lng: 29.18952013664088 },
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
      for (let i = 0; i <= 6; i++) {
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

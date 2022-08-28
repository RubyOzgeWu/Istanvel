<template>
<div class="row card" id="TransCard">
  <div class="col-8 column left" >
    <div id="map" />
  </div>
  <div class="col-4 column right">
    <div class="col">
      <q-img src="../../assets/metro/rumeli.jpg"></q-img>
      <h5>1. Rumelihisarı</h5>
      <p>It is a medieval fortress built on the orders of Ottoman Sultan Mehmed II.</p>
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
  41.0084604902293,
  41.03734594190852,
  41.01376689781175
])

const lng = reactive([
  29.009996511480086,
  29.011274923125573,
  29.01509862682192,
  29.014312742163558,
  28.98118696730233,
  29.030101069151304,
  29.04189051147985
])

const content = reactive([
  'Üsküdar Hanım Sultans Museum',
  'Şemsi Pasha Mosque',
  'Yeni Valide Mosque',
  'Aziz Mahmud Hüdayi Mosque',
  'Fountain Sultan Ahmed III',
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
    origin: { lat: 41.07603613213615, lng: 29.014320176451115 },
    destination: { lat: 41.085097327418936, lng: 29.045561366553958 },
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

      markers[0] = new states.google.maps.Marker({
        position: { lat: 41.08499220032258, lng: 29.056676440006523 },
        map: states.map,
        label: { text: '1', color: '#fff' }
      })
      infowindows[0] = new states.google.maps.InfoWindow({
        content: 'Rumeli Hisarı'
      })
      markers[0].addListener('click', function () {
        if (infowindows[0].anchor) {
          infowindows[0].close()
        } else {
          infowindows[0].open(states.map, markers[0])
        }
      })

      directionsRenderer.setDirections(result)
    }
  })
}

setTimeout(() => { initMap() }, 400)
// onMounted(async () => {
//   await initMap()
// })

</script>

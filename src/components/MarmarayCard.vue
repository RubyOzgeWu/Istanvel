<template>
<div class="row card" id="TransCard">
  <div class="col-8 column left">
    <div id="map" />
  </div>
  <div class="col-4 column right">
    <div class="col">
      <q-img src="../assets/marmaray/maxresdefault.jpeg"></q-img>
      <h5>1. Pendik Coast</h5>
      <p>You can walking, cycling with sea views on the coast.</p>

      <q-img src="../assets/marmaray/Monastery-of-Stoudios-Ruins.jpg"></q-img>
      <h5>3. Monastery of Stoudios</h5>
      <p>It was the most important monastery in the history of Constantinople, the capital of the Byzantine Empire.</p>

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
  40.87568866495783,
  40.88474282811494,
  40.996738333046665,
  40.988705553233174

])
const lng = reactive([
  29.22272655755416,
  29.205574782696807,
  28.927454684545708,
  28.92084081153443
])
const content = reactive([
  'Pendik Coast',
  'İSTMarina AVM',
  'Monastery of Stoudios',
  'Marble Tower'
])

let directionsService, directionsRenderer

const initMap = async() => {
  const loader = new Loader({
    apiKey: 'AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU',
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
    origin: { lat: 40.78572047956165, lng: 29.412470443220904 },
    destination: { lat: 41.01817370362472, lng: 28.766783991353883 },
    travelMode: 'TRANSIT',
    transitOptions: {
      modes: ['RAIL'],
      routingPreference: 'FEWER_TRANSFERS'
    }
  }
  directionsService.route(request, function(result, status) {
    if (status === 'OK') {
      const steps = result.routes[0].legs[0].steps
      //   // 加入地圖標記
      for (let i = 0; i <= 3; i++) {
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

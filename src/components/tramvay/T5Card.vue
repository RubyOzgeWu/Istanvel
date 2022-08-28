<template>
<div class="row card" id="TransCard">
  <div class="col-8 column left">
    <div id="map" />
  </div>
  <div class="col-4 column right">
    <div class="col">
      <q-img src="../../assets/tramvay/GulMosque.jpeg"></q-img>
      <h5>1. Gül Mosque</h5>
      <p>This is one of the most important surviving Byzantine religious buildings in Constantinople.</p>

      <q-img src="../../assets/tramvay/ecumencial.jpg"></q-img>
      <h5>2. The Ecumenical Patriarchate</h5>
      <p>Also known as the New Roman Patriarchate, is one of the Orthodox autonomous churches.</p>

      <q-img src="../../assets/tramvay/pammakaristos.jpeg"></q-img>
      <h5>3. Pammakaristos Church</h5>
      <p>The building is one of the most important Palaeolithic buildings in Constantinople.</p>

      <q-img src="../../assets/tramvay/Hirami_Ahmet_Pasha_Mosque6_180.jpeg"></q-img>
      <h5>4. Hirami Ahmet Pasha Mosque</h5>
      <p>This is one of the most Islamic conservative neighborhoods within the city walls</p>

      <q-img src="../../assets/tramvay/Ismail_Aga_Mosque_2487.jpeg"></q-img>
      <h5>5. Ismail Aga Mosque</h5>
      <p>This 18th-century red-brick building with minarets and tiled courtyards is the center of the disciplined Sufi faith.</p>

      <q-img src="../../assets/tramvay/Yavuz_Selim_Mosque_DSCF6829.jpeg"></q-img>
      <h5>6. Yavuz Sultan Selim Mosque</h5>
      <p>This is a 16th-century Ottoman imperial mosque located at the top of the 5th Hill of Istanbul. Its size and geographic position make it a familiar landmark on the Istanbul skyline.</p>

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
  41.02699857468409,
  41.02909219592859,
  41.029207344408356,
  41.02808904101996,
  41.02693827481015,
  41.02676655682241,
  41.03392727420108

])
const lng = reactive([
  28.956321199887075,
  28.95199145571126,
  28.9464674403704,
  28.945886540370537,
  28.947952028722344,
  28.9514214692055,
  28.940506455711382
])
const content = reactive([
  'Gül Mosque',
  'The Ecumenical Patriarchate',
  'Pammakaristos Church',
  'Hirami Ahmet Pasha Mosque',
  'Ismail Aga Mosque',
  'Yavuz Sultan Selim Mosque',
  'Palace of Blachernae'
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
    origin: { lat: 41.024488999638436, lng: 28.960251966959984 },
    destination: { lat: 41.08713508458404, lng: 28.943878907876684 },
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

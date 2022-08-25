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
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
          <h3>Hagia Sophia</h3>
          </div>
      </q-img>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
          <h3>Hagia Sophia</h3>
          </div>
      </q-img>
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
  41.00872061287202,
  41.005555315974014,
  41.008444297995865,
  41.00595869374599,
  41.00581230832557,
  41.00654743413211,
  41.00598828654755,
  41.00854590160801,
  41.007584388952075,
  41.0087335816696,
  41.01084669595379,
  41.00900766512918,
  41.02938665038105,
  41.009573919099935,
  41.032463886347855,
  41.03070203395343,
  41.02656696949414,
  41.02692023192094,
  41.026860250467145,
  41.02735591209257,
  41.023274293843905,
  41.01667817187497,
  41.017196650737546,
  41.016286677757826,
  41.01519556181798,
  41.015397902318156,
  41.01172996820429,
  41.01848132054741,
  41.02154019799798

])
const lng = reactive([
  28.980142811534765,
  28.97692108639225,
  28.981144052018266,
  28.975123969205136,
  28.975077198040346,
  28.974602080853305,
  28.974380540370063,
  28.9778458115348,
  28.97248075755707,
  28.97131744221636,
  28.968014453864505,
  28.96862481153483,
  28.935779426876,
  28.961763082699736,
  28.990498525029732,
  28.983709201733518,
  28.98086778454643,
  28.98125146920558,
  28.983003228722346,
  28.98235052687599,
  28.975385796194438,
  28.9705515845461,
  28.971937940370243,
  28.972596813381323,
  28.97358099619431,
  28.976477781624816,
  28.983314525029353,
  28.9202755826851,
  28.92605140053191

])
const content = reactive([
  'Hagia Sofia',
  'Sultan Ahmet Mosque',
  'Fountain Sultan Ahmed III',
  'Hippodrome of Constantinople',
  'Serpent Column',
  'Museum of Turkish and Islamic Arts',
  'Ibrahim Pasha Palace',
  'Basilica Cistern',
  'Theodosius Cistern',
  'Column of Constantine',
  'Grand Bazaar',
  'Sinan Pasha Tomb',
  'Mihrimah Sultan Mosque',
  'Theodosius Forumu',
  'Molla Çelebi Mosque',
  'Orhan Kemal Museum',
  'Kılıç Ali Pasha Complex',
  'Tophane Fountain',
  'Tophane-i Amire Sanjak Tower',
  'Tophane Pavilion',
  'Karaköy Palace',
  'Spice Bazaar',
  'Yeni Mosque',
  'Turkey İş Bank Museum',
  'PTT Museum',
  'Istanbul Railway Museum',
  'Topkapı Palace',
  'Panorama 1453 History Museum',
  'Byzantine Walls'
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
    origin: { lat: 41.03339389864939, lng: 28.860787869901504 },
    destination: { lat: 41.03445878919029, lng: 28.99275484167178 },
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
      for (let i = 0; i <= 28; i++) {
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

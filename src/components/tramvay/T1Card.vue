<template>
<div class="row card" id="TransCard">
  <div class="col-8 column left">
    <div id="map" />
  </div>
  <div class="col-4 column right">
    <div class="col">
      <q-img src="../../assets/top10/hagiasofia.jpg"></q-img>
      <h5>1. Hagia Sophia</h5>
      <p>Once the state church under Roman Empire's rule, and turned to Mosque after Ottoman Empire occupied.</p>

      <q-img src="../../assets/top10/sultanahmet.jpg"></q-img>
      <h5>2. Blue Mosque</h5>
      <p>It was constructed between 1609 and 1616 during the rule of Ahmed I. It contains Ahmed's tomb, a madrasah and a hospice.</p>

      <q-img src="../../assets/tramvay/historical-fountain-sultan-ahmet-iii-istanbul-turkey-february-ahmed-was-built-standing-hagia-sophia-topkapi-75542392.jpeg"></q-img>
      <h5>3. Fountain Sultan Ahmed III</h5>
      <p>It was built under Ottoman sultan Ahmed III in 1728, in the style of the Tulip period. It was a social centre and gathering place during the Ottoman period of Constantinople.</p>

      <q-img src="../../assets/tramvay/german-fountain.jpeg"></q-img>
      <h5>4. Germain Fountain</h5>
      <p>It was constructed to commemorate the second anniversary of German Emperor Wilhelm II's visit to Istanbul in 1898.</p>

      <q-img src="../../assets/tramvay/hippodrome-of-constantinoplecover-5d84642aef807.jpeg"></q-img>
      <h5>5. Hippodrome of Constantinople</h5>
      <p>Hippodromes were common features of Greek cities in the Hellenistic, Roman and Byzantine eras.</p>

      <q-img src="../../assets/tramvay/serpent-column.jpeg"></q-img>
      <h5>6. Serpent Column</h5>
      <p>It is part of an ancient Greek sacrificial tripod, originally in Delphi and relocated to Constantinople by Constantine the Great in 324.</p>

      <q-img src="../../assets/top10/cistern.jpg"></q-img>
      <h5>9. Basilica Cistern</h5>
      <p>It is located 150 metres southwest of the Hagia Sophia on the historical peninsula of Sarayburnu</p>

      <q-img src="../../assets/tramvay/1200px-Theodosius_cistern_08.jpeg"></q-img>
      <h5>10. Theodosius Cistern</h5>
      <p>It was built by Roman Emperor Theodosius II between 428 and 443 to store water supplied by the Valens Aqueduct.</p>

      <q-img src="../../assets/top10/grandBazaar.jpg"></q-img>
      <h5>12. The Grand Bazaar</h5>
      <p>It is one of the largest and oldest covered markets in the world</p>

      <q-img src="../../assets/tramvay/sinan_tomb.jpeg"></q-img>
      <h5>13. Sinan Pasha Tomb</h5>
      <p>It was built by the Ottoman architect Mimar Sinan for the admiral Sinan Pasha. </p>

      <q-img src="../../assets/tramvay/Tophane-Fountain-in-Istanbul.jpg"></q-img>
      <h5>19. Tophane Fountain</h5>
      <p>It is an 18th-century public water fountain built by Ottoman sultan Mahmud I in the Ottoman rococo architecture </p>

      <q-img src="../../assets/top10/misircarsi.jpg"></q-img>
      <h5>23. Spice Bazaar</h5>
      <p>The mosque is an example of the Sultanate of Women period in Ottoman Empire.</p>

      <q-img src="../../assets/tramvay/eminonu-new-mosque_646314-10148.jpeg"></q-img>
      <h5>24. New Mosque</h5>
      <p>The bazaar has been the center for spice trade in Istanbul for centuries.</p>

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
  41.00801906241111,
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
  28.976807646027563,
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
  'Germain Fountain',
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

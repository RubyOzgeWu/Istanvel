<template>
<div id="TopView">
    <h2 class="text-center title">TOP 10</h2>
    <p class="text-center subtitle">The most popular and famous tourist sites in Istanbul. Includes of the Hagia Sophia, the Grand Bazaar, etc.</p>

    <div class="photos row q-px-lg">
         <!-- ************************************* row1 ****************************************** -->
        <div class="col col-12 row row1">
            <div class="col col-7 row">
                <div class="Hagia col col-12" >
                    <q-img src="../../assets/top10/hagiasofia.jpg">
                        <div class="absolute-bottom text-subtitle1 text-center " @mouseover="show=true" @mouseleave="show=false">
                        <!-- @mouseover="show=true" @mouseleave="show=false" -->
                            <h4 class="text-left">Hagia Sophia</h4>
                            <p class="text-left" v-show="show">Originally built by the eastern Roman as the Christian cathedral of Constantinople for the state church of the Roman Empire, but after Ottam Empire occupied, it turned to the mosque till now. </p>
                        </div>
                    </q-img>
                </div>
                <div class="col col-12 row">
                    <div class="grandBazaar col col-6">
                        <q-img src="../../assets/top10/grandBazaar.jpg">
                            <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show2=true" @mouseleave="show2=false">
                                <h4 class="text-left out">Grand Bazaar</h4>
                                <p class="text-left" v-show="show2"> The Grand Bazaar is one of the largest and oldest covered markets in the world, and it is often regarded as one of the first shopping malls of the world.</p>

                            </div>
                        </q-img>
                    </div>
                    <div class="kizKulesi col col-6">
                        <q-img src="../../assets/top10/top10_kizkulesi.jpg">
                            <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show3=true" @mouseleave="show3=false">
                                <h4 class="text-left out">Kız Kulesi</h4>
                                <p class="text-left" v-show="show3">Also known as Leander's Tower (Tower of Leandros) since the medieval Byzantine period, is a tower on a small islet at the southern entrance of the Bosphorus strait, 200 m (220 yd) from the coast of Üsküdar in Istanbul, Turkey.</p>
                            </div>
                        </q-img>
                    </div>
                </div>

            </div>
            <div class="taksim col col-5">
                <q-img src="../../assets/top10/taksim.jpg" >
                    <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show4=true" @mouseleave="show4=false">
                        <h4 class="text-left out">Taksim Square <br> (İstiklal Avenue)</h4>
                        <p class="text-left" v-show="show4">The street starts at the northern end of Galata at Tünel Square and runs as far as Taksim Square. It is flanked by late Ottoman era buildings in a variety of styles including Neo-Classical, Neo-Gothic, Renaissance Revival, Beaux-Arts, Art Nouveau and First Turkish National Architecture. </p>
                    </div>
                </q-img>
            </div>
        </div>

        <!-- ************************************* row2 ****************************************** -->
        <div class="col col-12 row row2">
            <div class="col col-5 row">
                <div class="galata col col-12">
                    <q-img src="../../assets/top10/galata.jpg" height="550px" position="30% 45%">
                        <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show5=true" @mouseleave="show5=false">
                            <h4 class="text-left out">Galata Tower</h4>
                            <p class="text-left" v-show="show5">It is named after the quarter in which it is located, Galata. Built as a watchtower at the highest point of the Walls of Galata, the tower is now an exhibition space and museum, and one of the symbols of Beyoğlu and Istanbul.</p>
                        </div>
                    </q-img>
                </div>
                <div class="dolmabahce col col-12">
                    <q-img src="../../assets/top10/dolmabahce.jpg" height="300px">
                        <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show6=true" @mouseleave="show6=false">
                            <h4 class="text-left out">Dolmabahçe Palace</h4>
                            <p class="text-left" v-show="show6">Located in the Beşiktaş district of Istanbul, Turkey, on the European coast of the Bosporus strait, served as the main administrative center of the Ottoman Empire from 1856 to 1887 and from 1909 to 1922</p>
                        </div>
                    </q-img>
                </div>
            </div>
            <div class="col col-7 row">
                <div class="cistern col col-12">
                    <q-img src="../../assets/top10/cistern.jpg" height="300px" position="20% 45%">
                        <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show7=true" @mouseleave="show7=false">
                            <h4 class="text-left out">Basilica Cistern</h4>
                            <p class="text-left" v-show="show7"> The cistern, located 150 metres (490 ft) southwest of the Hagia Sophia on the historical peninsula of Sarayburnu, was built in the 6th century during the reign of Byzantine Emperor Justinian I.</p>
                        </div>
                    </q-img>
                </div>
                <div class="sultanAhmet col col-12">
                    <q-img src="../../assets/top10/sultanahmet.jpg" height="550px" position="30% 45%">
                        <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show8=true" @mouseleave="show8=false">
                            <h4 class="text-left out">Blue Mosque (Sultan Ahmed Mosque)</h4>
                            <p class="text-left" v-show="show8"> It was constructed between 1609 and 1616 during the rule of Ahmed I. It contains Ahmed's tomb, a madrasah and a hospice. Hand-painted blue tiles adorn the mosque’s interior walls, and at night the mosque is bathed in blue as lights frame the mosque’s five main domes, six minarets and eight secondary domes, so it also named 'Blue Mosque'.</p>
                        </div>
                    </q-img>
                </div>
            </div>
        </div>

         <!-- ************************************* row3 ****************************************** -->
        <div class="col col-12 row row3">
            <div class="suleymaniye col col-8" >
                <q-img src="../../assets/top10/suleymaniye.jpg" height="400px">
                    <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show9=true" @mouseleave="show9=false">
                        <h4 class="text-left out">Süleymaniye Mosque</h4>
                        <p  class="text-left" v-show="show9">The mosque was commissioned by Suleiman the Magnificent and designed by the imperial architect Mimar Sinan. An inscription specifies the foundation date as 1550 and the inauguration date as 1557.</p>
                    </div>
                </q-img>
            </div>
            <div class="misir col col-4" >
                <q-img src="../../assets/top10/misircarsi.jpg" height="400px">
                    <div class="absolute-bottom text-subtitle1 text-center"  @mouseover="show10=true" @mouseleave="show10=false">
                        <h4 class="text-left out">Spice Bazaar</h4>
                        <p class="text-left" v-show="show10"> It got the name "Egyptian Bazaar" because it was built with the revenues from the Ottoman eyalet of Egypt in 1660. The bazaar has been the center for spice trade in Istanbul for centuries.</p>
                    </div>
                </q-img>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

// const show = document.querySelector('.show')
// document.querySelector('.out').addEventListener('mouseover', function() {
//   show.color = 'black'
// })

// const show = () => {
//   console.log('123')
// }
const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
const show9 = ref(false)
const show10 = ref(false)

</script>

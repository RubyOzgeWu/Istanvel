<template>
  <div class="q-pa-md" id="IndexPage">

    <!-- *********************************************************************** -->
    <div class="banner ">
      <video autoplay loop class="video" style="object-fit: cover;" src="../../assets/pexels-roman-odintsov-7304300.mp4">
        <source type="video/mp4">
      </video>
      <div class="title" data-aos="zoom-in" data-aos-easing="ease-in-out" >Welcome to <span>Istanbul</span></div>
      <div class="subtitle" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300">In the heart of two continents, hidden treasures for more than a thounsand
              years,
              the adventures of Istanbul are wating for you.</div>
      <q-btn size="22px" class="q-px-xl q-py-xs" label=" EXPLORE NOW" />

    </div>

    <!-- section02 -------------------------------------------------------------------------------------------->
    <section id="section02">
      <h3>Enjoy your Journey in Istanbul</h3>
      <p class="intro">From Hagia Sophia to enjoying a cruise on the Bosphorus, all the things you have to know in your journey are
        here.</p>
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          <q-img src="../../assets/visa.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <a href="https://www.evisa.gov.tr/en/" target="_blank">Visa & Entry</a>
            </div>
          </q-img>
        </div>
        <div class="col-4">
          <q-img src="../../assets/tours.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <router-link to="/ToursAll">Tours <br>in <br>Istanbul</router-link>
            </div>
          </q-img>
        </div>
        <div class="col-4">
          <q-img src="../../assets/activities.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <router-link to="/ActivitiesAll"> Activities <br>in <br>Istanbul</router-link>
            </div>
          </q-img>
        </div>
      </div>
    </section>

    <!-- section03----------------------------------------------------------------------------------- -->
    <section id=section03>
      <div class="row">
        <div class="col-7">
          <q-img src="../../assets/turkish-breakfast-2.jpeg" style="max-width: 95%; height: 500px;" :fit="cover"></q-img>
        </div>
        <div class="col-5">
          <div class="column">
            <h3>Turkish Culture & Foods </h3>
            <p class="post">
              Turkish cuisine is one of the world’s top cuisines, joining the ranks of French, Chinese, Italian, and the like. Like the country’s cultural mosaic, the food of Turkey is very colorful and contains countless different influences and tastes. The cuisine of Turkey has continued to evolve over centuries, deriving influence from its rich history of lands that hosted first the Byzantine, and then the Ottoman Empires. Specific tastes in different regions of Turkey contribute to the complexity of the country’s cuisine. The availability of different Turkish food in some regions also helped to shape the foods common to that particular area. The Eastern Black Sea region, for example, is not appropriate for wheat production due to heavy rainfall; therefore the residents developed dishes that rely mostly on corn and cornflour.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- section04------------------------------------------------------------------------------------------ -->
    <section id="section04">
      <h3>TOP 10 in Istanbul</h3>
      <p class="intro">Discover the most popular, the most amazing, or the most ancient sites in Istanbul!</p>
      <div class="q-pa-sm">
        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
          control-color="secondary" navigation padding arrows height="500px">
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_kizkulesi.jpg" style="max-width: 350px;
            height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>

              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_sultanahmet.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_kizkulesi.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_sultanahmet.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_kizkulesi.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_sultanahmet.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_kizkulesi.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_sultanahmet.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_kizkulesi.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
              <q-img class="rounded-borders col-3 full-height" src="../../assets/top10_sultanahmet.jpg"
                style="max-width: 350px; height: 500px;" :fit="cover">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Dolmabahçe Palace
                </div>
              </q-img>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>

    <!-- footer---------------------------------------------------------------------------------------- -->
    <footer>

    </footer>
  </div>
</template>

<style scoped>
.q-pa-md {
  padding: 0;
}

</style>

<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const slide = ref(1)

// export default defineComponent({
//   name: 'IndexPage',
//   setup() {
//     return {
//       slide: ref(1)

//     }
//   }

// })
</script>

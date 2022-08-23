<template>
  <div class="q-pa-md" id="IndexPage">
    <div id="banner">
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
        transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
        <q-carousel-slide :name="1" img-src="../../assets/galata.jpg">
          <div class="absolute-center custom-caption">
            <div class="text-h1">Welcome to <span>Istanbul</span></div>
            <div class="subtitle">In the heart of two continents, hidden treasures for more than a thounsand
              years,
              the adventures of Istanbul are wating for you.</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label="FIND NOW" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../../assets/kizkulesi.jpg">
          <div class="absolute-center custom-caption">
            <div class="text-h1">Welcome to <span>Istanbul</span></div>
            <div class="subtitle">In the heart of two continents, hidden treasures for more than a thounsand
              years,
              the adventures of Istanbul are wating for you.</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label="FIND NOW" />
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" img-src="../../assets/sultanahmet.jpg">
          <div class="absolute-center custom-caption">
            <div class="text-h1">Welcome to <span>Istanbul</span></div>
            <div class="subtitle">In the heart of two continents, hidden treasures for more than a thounsand
              years,
              the adventures of Istanbul are wating for you.</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label="FIND NOW" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- section02 -------------------------------------------------------------------------------------------->
    <section id="section02">
      <h3>Enjoy your Journey in Istanbul</h3>
      <p>From Hagia Sophia to enjoying a cruise on the Bosphorus, all the things you have to know in your journey are
        here.</p>
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          <q-img src="../../assets/visa.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Visa & Entry
            </div>
          </q-img>
        </div>
        <div class="col-4">
          <q-img src="../../assets/tours.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Tours <br>in <br>Istanbul
            </div>
          </q-img>
        </div>
        <div class="col-4">
          <q-img src="../../assets/activities.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              Activities <br>in <br>Istanbul
            </div>
          </q-img>
        </div>
      </div>
    </section>

    <!-- section03----------------------------------------------------------------------------------- -->
    <section id=section03>
      <div class="row">
        <div class="col-6">
          <q-img src="../../assets/galata.jpg" style="max-width: 95%; height: 500px;" :fit="cover"></q-img>
        </div>
        <div class="col-6">
          <div class="column">
            <h3>Turkish Culture & Foods </h3>
            <p> with the Byzantines and gained momentum during the period of the Ottoman Empire. Sultan Mehmet the
              Conqueror
              declared İstanbul the capital of Ottoman Empire after he conquered the city in 1453. Over the next 450
              years
              the
              city was adorned with superb Ottoman monuments. Building works after the conquest gathered apace during
              the
              reigncity was adorned with superb Ottoman monuments. Building works after the conquest gathered apace
              during
              the
              reign.ci was adorned with superb Ottoman monuments. Building works after the conquest gathered apace
              during
              the
              reign.ci..</p>
          </div>
        </div>
      </div>
    </section>
    <!-- section04------------------------------------------------------------------------------------------ -->
    <section id="section04">
      <h3>TOP 10 in Istanbul</h3>
      <p>Discover the most popular, the most amazing, or the most ancient sites in Istanbul!</p>
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

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      slide: ref(1)
      // autoplay: ref(true)
      // fitModes: ['cover', 'fill', 'contain', 'none', 'scale-down']

      // autoplay: ref(true)

    }
  }

})
</script>

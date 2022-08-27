<template>
  <div class="q-pa-md" id="IndexPage">

    <!-- *********************************************************************** -->
    <div class="banner ">
      <div class="video-w">
        <video autoplay loop class="video" style="object-fit: cover;" muted src="../../assets/pexels-roman-odintsov-7304300.mp4">
          <source type="video/mp4">
        </video>
      </div>

      <div class="title" data-aos="zoom-in" data-aos-easing="ease-in-out" >Welcome to <span>Istanbul</span></div>
      <div class="subtitle" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300">In the heart of two continents, hidden treasures for more than a thounsand
              years,
              the adventures of Istanbul are wating for you.</div>
      <q-btn size="22px" class="q-px-xl q-py-xs" label=" EXPLORE NOW" to="/ToursAll" />
    </div>

    <!-- iPad -->
    <div class="ImgBanner" v-if="$q.screen.lt.md">
      <q-img src="../../assets/galata.jpg" >
          <!--  -->
          <div class="absolute-full text-subtitle2 flex column flex-center">
            <div class="title" data-aos="zoom-in" data-aos-easing="ease-in-out" >Welcome to <span>Istanbul</span></div>
            <div class="subtitle" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300">In the heart of two continents, hidden treasures for more than a thounsand
              years,
              the adventures of Istanbul are wating for you.</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label=" EXPLORE NOW" to="/ToursAll" />
          </div>
        </q-img>
    </div>

    <!-- section02 -------------------------------------------------------------------------------------------->
    <section id="section02">
      <h3>Enjoy your Journey in Istanbul</h3>
      <p class="intro">From Hagia Sophia to enjoying a cruise on the Bosphorus, all the things you have to know in your journey are
        here.</p>
      <div class="selections row">
        <div class="col col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" data-aos="fade-right" data-aos-offset="30">
          <q-img src="../../assets/visa.jpg" class="rounded-borders" :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center" data-aos="flip-up" data-aos-offset="30" data-aos-delay="200">
              <a href="https://www.evisa.gov.tr/en/" target="_blank">Visa & Entry</a>
            </div>
          </q-img>
        </div>
        <div class="col col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" >
          <q-img src="../../assets/tours.jpg" class="rounded-borders" :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center" data-aos="flip-up" data-aos-offset="30" data-aos-delay="200">
              <router-link to="/ToursAll">Tours <br>in <br>Istanbul</router-link>
            </div>
          </q-img>
        </div>
        <div class="col col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" data-aos="fade-left" data-aos-offset="30">
          <q-img src="../../assets/activities.jpg" class="rounded-borders" :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center" data-aos="flip-up" data-aos-offset="30" data-aos-delay="200">
              <router-link to="/ActivitiesAll"> Activities <br>in <br>Istanbul</router-link>
            </div>
          </q-img>
        </div>
      </div>
    </section>

    <!-- section03----------------------------------------------------------------------------------- -->
    <section id=section03>
      <div class="row" >
        <div class="col-7">
          <q-img src="../../assets/turkish-breakfast-banner.jpg" :fit="cover"></q-img>
        </div>
        <div class="col-4">
          <div class="marquee">
              <div class="marquee-wrapper">
                <div class="marquee-title">
                  / Turkish <span class="text-stroke-black">Culture &</span>
                  Foods / Turkish
                  <span class="text-stroke-black">Culture &</span>
                  Foods
                </div>
                <div class="marquee-title">
                  / Turkish <span class="text-stroke-black">Culture &</span>
                  Foods / Turkish
                  <span class="text-stroke-black">Culture &</span>
                  Foods
                </div>
              </div>
          </div>

          <div class="marquee">
            <div class="marquee-wrapper2">
            <div class="marquee-title2">
              / Türk <span style="color:#f5266e">Döner Kebab &</span>
              Dondurma / Türk
              <span style="color:#f5266e">Döner Kebab &</span>
              Dondurma
            </div>
            <div class="marquee-title2">
              / Türk <span style="color:#f5266e">Döner Kebab &</span>
              Dondurma / Türk
              <span style="color:#f5266e">Döner Kebab &</span>
              Dondurma
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section04------------------------------------------------------------------------------------------ -->
    <section id="section04" >
      <div data-aos="zoom-in-up"  data-aos-offset="30">
        <h3>TOP 10 in Istanbul</h3>
        <p class="intro">Discover the most popular, the most amazing, or the most ancient sites in Istanbul!</p>
      </div>
      <div class="carousel q-pa-md">
        <!-- :autoplay="2500"  q-pa-sm q-pa-md-lg  -->
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          :autoplay="2500"
          control-color="secondary"
          navigation
          padding
          height="300px"
          class="rounded-borders"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="background row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/hagiasofia.jpg" />
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/dolmabahce.jpg" />
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/grandBazaar.jpg" />
              <q-img v-if="$q.screen.gt.sm" class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/top10_kizkulesi.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="background row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/sultanahmet.jpg"/>
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/taksim.jpg"/>
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/cistern.jpg"/>
              <q-img v-if="$q.screen.gt.sm" class="rounded-borders col-xl-3 col-lg-3 col-md-3 col-sm-3 full-height" src="../../assets/top10/galata.jpg"/>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="background row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-xl-4 col-lg-3 col-md-4 full-height" src="../../assets/top10/suleymaniye.jpg" />
              <q-img class="rounded-borders col-xl-4 col-lg-3 col-md-4 full-height" src="../../assets/top10/misircarsi.jpg" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide v-if="$q.screen.lt.lg" :name="4" class="column no-wrap">
            <div class="background row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-4 full-height" src="../../assets/top10/top10_kizkulesi.jpg" />
              <q-img class="rounded-borders col-xl-3 col-lg-3 col-md-4 full-height" src="../../assets/top10/galata.jpg"/>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>

    <!-- footer---------------------------------------------------------------------------------------- -->

  </div>
</template>

<style scoped>
.q-pa-md {
  padding: 0;
}
.text-stroke-black {
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: white;
}

/* marquee1 */
.marquee-wrapper {
  /* border: 2px solid red; */
  width: 5000px;
  /* 3000 */
  /* transform: translate(-1900px) */
  animation: marqueeAnimation 40s linear 0s infinite running;

}

.marquee-title{
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  font-size: 5rem;
  /* 3rem */
  /* margin-left: 20px; */
  float:left

}
@keyframes marqueeAnimation {
  100% {
    transform: translateX(-3295px);
    /* 1975 */
  }
}

/* marquee2 */

.marquee:nth-child(2){
  margin-left: 30%;
}
.marquee-wrapper2 {
  width: 5000px;
  animation: marqueeAnimation2 30s linear 0s infinite running;

}
.marquee-title2{
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  font-size: 4rem;
  float:left
}

/* .marquee-title2:nth-child(1){
  color: yellow;
} */

@keyframes marqueeAnimation2 {
  100% {
    transform: translateX(-3520px);
    /* 1975 */
  }
}

</style>

<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const slide = ref(1)
const autoplay = ref(true)

</script>

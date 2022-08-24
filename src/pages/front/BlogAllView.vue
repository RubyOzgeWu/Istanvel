<template>
  <div id="BlogAllView">
    <div class="insideView">
      <q-splitter
        style="height: 100vh - 51px"
      >

        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="tabs"
          >
            <q-tab name="history" class="textTab" label="History of Turkey" />
            <q-tab name="history"  v-if="$q.screen.lt.md" icon="auto_stories"/>
            <q-tab name="geography" class="textTab" label="Geography" />
            <q-tab name="geography" v-if="$q.screen.lt.md" icon="travel_explore" />
            <q-tab name="culture" class="textTab" label="Culture in Turkey" />
            <q-tab name="culture" v-if="$q.screen.lt.md" icon="diversity_3"  />
          </q-tabs>

        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"

          >
            <q-tab-panel name="history">
              <div class="text-h1 q-mb-md space">History of <br> Turkey</div>
              <div v-if="$q.screen.lt.md" class="text-h1 q-mb-md">History of Turkey</div>
              <div class="row History">
                <div class="col" v-for="History in HistoryPosts" :key="History._id">
                  <q-card flat class="my-card row" data-aos="fade-left" data-aos-offset="40">

                      <q-card-section class="left col-xl-5 col-lg-5 col-md-12">
                          <q-img class="HistoryImg" :src="History.image" position="45% 35%"></q-img>
                      </q-card-section>

                      <q-card-section class="right col-xl-7 col-lg-7 col-md-12" >
                          <div  class="title"><router-link :to="'/post/' + History._id">{{History.title}}</router-link></div>
                          <p class="HistoryContent content">{{History.content}}</p>
                      </q-card-section>
                    </q-card>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="geography">
              <div class="text-h1 q-mb-md">Geography</div>
              <div class="column Geography">
                <div class="col" v-for="Geography in GeographyPosts" :key="Geography._id">
                  <q-card flat class="my-card row" data-aos="fade-right">
                      <q-card-section class="info col-xl-6 col-lg-6 col-md-12">
                        <div class="title"><router-link :to="'/post/' + Geography._id">{{Geography.title}}</router-link> </div>
                        <div class="GeoContent content"><p>{{Geography.content}}</p></div>
                      </q-card-section>
                      <q-card-section class="image col-xl-6 col-lg-6 col-md-12">
                        <q-img class="GeoImg" :src="Geography.image"></q-img>
                      </q-card-section>
                    </q-card>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="culture">
              <div class="text-h1 q-mb-md text-center">Culture & Foods</div>
              <div v-if="$q.screen.lt.md" class="text-h1 q-mb-md">Culture & Foods</div>
              <div class="row Culture">
                <div class="col" v-for="Culture in CulturePosts" :key="Culture._id">
                    <q-card flat class="my-card row" data-aos="fade-left">
                      <q-card-section class="image col-xl-12 col-lg-12 col-md-12">
                        <q-img class="CultureImg" :src="Culture.image"></q-img>
                      </q-card-section>
                      <q-card-section class="info col-xl-12 col-lg-12 col-md-12">
                        <div class="title"><router-link :to="'/post/' + Culture._id">{{Culture.title}}</router-link></div>
                        <div class="CultureContent content"><p>{{Culture.content}}</p></div>
                      </q-card-section>
                    </q-card>
                </div>

                <!-- <div class="col-6">
                  <q-card flat class="my-card column" style="height:100vh">
                    <q-card-section class="col-6">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                    </q-card-section>
                    <q-card-section class="col-6 column">
                      <div class="col-3 text-h4"><router-link :to="'/post/' + '62f745f930bac207f6508de7'">testing history2</router-link></div>
                      <div class="col-9">
                        <p>orem ipsum dolor sit amet consectetur, adipisicing elit. Molestias similique vero suscipit distinctio sint nostrum excepturi sequi aperiam facilis a est dicta, officia aliquid nihil architecto culpa nobis harum officiis incidunt autem ad, in fuga? Dolore, libero fugit tempora voluptates rerum inventore totam adipisci iusto ducimus quidem nesciunt cupiditate ullam veritatis sed quibusdam quam, omnis dicta deleniti tempore illo? Nobis obcaecati temporibus inventore expedita harum culpa nostrum reiciendis aliquid. Iure iste nobis, alias maxime dolore aut possimus quaerat eaque accusamus sit atque cupiditate, fugit voluptatem earum architecto quasi omnis! Temporibus ratione nisi inventore sed iure esse minima ad officia ab.</p>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-6">
                  <q-card flat class="my-card column" style="height:100vh">
                    <q-card-section class="col-6">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                    </q-card-section>
                    <q-card-section class="col-6 column">
                      <div class="col-3 text-h4"><router-link :to="'/post/' + '62f745f930bac207f6508de7'">testing history2</router-link></div>
                      <div class="col-9">
                        <p>orem ipsum dolor sit amet consectetur, adipisicing elit. Molestias similique vero suscipit distinctio sint nostrum excepturi sequi aperiam facilis a est dicta, officia aliquid nihil architecto culpa nobis harum officiis incidunt autem ad, in fuga? Dolore, libero fugit tempora voluptates rerum inventore totam adipisci iusto ducimus quidem nesciunt cupiditate ullam veritatis sed quibusdam quam, omnis dicta deleniti tempore illo? Nobis obcaecati temporibus inventore expedita harum culpa nostrum reiciendis aliquid. Iure iste nobis, alias maxime dolore aut possimus quaerat eaque accusamus sit atque cupiditate, fugit voluptatem earum architecto quasi omnis! Temporibus ratione nisi inventore sed iure esse minima ad officia ab.</p>
                      </div>
                    </q-card-section>
                  </q-card>
                </div> -->
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import { Screen } from 'quasar'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const HistoryPosts = reactive([])
const GeographyPosts = reactive([])
const CulturePosts = reactive([])
const miniState = ref(true)

const tab = ref('history')
// const splitterModel = ref(20)
const init = async() => {
  try {
    const { data } = await api.get('/posts')
    HistoryPosts.push(...data.result.filter(post => post.category === 'History'))
    GeographyPosts.push(...data.result.filter(post => post.category === 'Geography'))
    CulturePosts.push(...data.result.filter(post => post.category === 'Culture & Foods'))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: '伺服器錯誤'
    })
  }
}
init()

</script>

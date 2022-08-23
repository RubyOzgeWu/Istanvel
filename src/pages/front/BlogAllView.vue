<template>
  <div id="BlogAllView">
    <div class="insideView" v-if="$q.screen.gt.xs">
      <q-splitter
        style="height: 100vh - 51px"
      >

        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="tabs"
          >
            <q-tab name="history" label="History of Turkey" />
            <q-tab name="geography" label="Geography" />
            <q-tab name="culture" label="Culture in Turkey" />
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
              <q-btn v-if="$q.screen.lt.sm" class="drawerButton" icon="arrow_forward_ios" @click="changeColor()"></q-btn>
              <div class="text-h1 q-mb-md">History of <br> Turkey</div>
              <div class="row">
                <div class="col-12">
                  <!-- firstHistory -->
                    <q-card flat class="my-card row firstHistory q-pt-md">
                      <q-card-section class="col-xl-4 col-lg-5 col-md-5">
                        <q-img class="firstHistoryImg" src="../../assets/firstHistory.jpg"></q-img>
                      </q-card-section>
                      <q-card-section class="col-xl-8 col-lg-7 col-md-7 column">
                        <div class="col-xl-3 col-lg-6 col-md-6 text-h4"><router-link :to="'/post/' + '63032cfcaabac9aabe9704b5'">Are Turks descended from wolves? Hungary was once ruled by the Turks?</router-link> </div>
                        <div class="col-xl-9 col-lg-6 col-md-6 firstHistoryContent content ">
                          <p>Are wolves the ancestors of the Turks? Under the legacy of Ergenekon Destanı, the Turks are convinced that they share the same blood as the brave gray wolf. In "Book of Zhou, Volume 50", there are records similar to the myth of the gray wolf in the myth of Ergenekon Destanı. The content is that the Emperor Taiwu of Norhtern Wei destroyed a branch of the Turkic tribe, but a child was saved by a mother wolf and then gave birth to ten boys.  He hid and raised his children, grandchildren  in the valley called "Ergenekon", which surrounded by iron walls. Several generations passed, a man named Ashina brought his people out of the valley to take revenge, and the descendants of these tribes with wolf blood are the Turks.Up to now, the Turks still believe in the myth that they are descendants of wolves, and also use the gray wolf to symbolize the sense of glory for their own nation and country. Even the Turkish Nationalist Movement Party (MHP) often uses the gray wolf gesture in election campaigns to show its national identity. It can be seen that the wolf is a very honorable, noble and brave image in the hearts of Turks.
</p></div>
                      </q-card-section>
                    </q-card>
                </div>

                <!-- secondHistory -->

                <div class="col-xl-6 col-lg-12 col-md-12">
                  <q-card flat class="my-card row secondHistory">
                    <q-card-section class="col-xl-4 col-lg-5 col-md-5">
                      <q-img class="secondHistoryImg" src="../../assets/secondHistory.jpg"></q-img>
                    </q-card-section>
                    <q-card-section class="col-xl-8 col-lg-7 col-md-7 column">
                      <div class="col-xl-3 col-lg-4 text-h4"><router-link :to="'/post/' + '63032e98aabac9aabe9704bf'">The Glory and the decline of Ottoman Empire</router-link></div>
                      <div class="col-xl-9 col-lg-8 secondHistoryContent content"><p>Ottoman Empire, empire created by Turkish tribes in Anatolia (Asia Minor) that grew to be one of the most powerful states in the world during the 15th and 16th centuries. The Ottoman period spanned more than 600 years and came to an end only in 1922, when it was replaced by the Turkish Republic and various successor states in southeastern Europe and the Middle East. </p></div>
                    </q-card-section>
                  </q-card>
                </div>

                <!-- thirdHistory -->
                <div class="col-xl-6 col-lg-12 col-md-12">
                  <q-card flat class="my-card row thirdHistory">
                    <q-card-section class="col-xl-4 col-lg-5 col-md-5">
                      <q-img class="thirdHistoryImg" src="../../assets/Atatürk.jpg"></q-img>
                    </q-card-section>
                    <q-card-section class="col-xl-8 col-lg-7 col-md-7 column">
                      <div class="col-xl-3 col-lg-4 text-h4"><router-link :to="'/post/' + '63033424aabac9aabe9704d0'">The Men Who Change Turkey’s Future : Kemal Atatürk</router-link></div>
                      <div class="col-xl-9 col-lg-8 content thirdHistoryContent"><p>Kemal Atatürk, (Turkish: “Kemal, Father of Turks”) original name Mustafa Kemal, also called Mustafa Kemal Paşa, (born 1881, Salonika [now Thessaloníki], Greece—died November 10, 1938, Istanbul, Turkey), soldier, statesman, and reformer who was the founder and first president (1923–38) of the Republic of Turkey. He modernized the country’s legal and educational systems and encouraged the adoption of a European way of life, with Turkish written in the Latin alphabet and with citizens adopting European-style names.
</p></div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>

            </q-tab-panel>

            <q-tab-panel name="geography">
              <div class="text-h1 q-mb-md">Geography</div>
              <div class="column">
                <div class="col-12">
                    <q-card flat class="my-card row firstGeo">
                      <q-card-section class="col-7 column">
                        <div class="col-3 text-h4"><router-link :to="'/post/' + '630392cc07dec4a08eb736f7'">The Country Across Europe and Asia</router-link> </div>
                        <div class="col-9 firstGeoContent"><p>Turkey, also called Türkiye, country that occupies a unique geographic position, lying partly in Asia and partly in Europe. Throughout its history it has acted as both a barrier and a bridge between the two continents.Turkey is situated at the crossroads of the Balkans, Caucasus, Middle East, and eastern Mediterranean. It is among the larger countries of the region in terms of territory and population, and its land area is greater than that of any European state.Nearly all of the country is in Asia, comprising the oblong peninsula of Asia Minor—also known as Anatolia (Anadolu)—and, in the east, part of a mountainous region sometimes known as the Armenian Highland. The remainder—Turkish Thrace (Trakya)—lies in the extreme southeastern part of Europe, a tiny remnant of an empire that once extended over much of  the Balkans.
</p></div>
                      </q-card-section>
                      <q-card-section class="col-5">
                        <q-img class="firstGeoImg" src="../../assets/Turkey-map-boundaries-cities-locator.jpg"></q-img>
                      </q-card-section>
                    </q-card>
                </div>
                <div class="col-12 row">
                  <div class="col-12">
                    <q-card flat class="my-card row secondGeo">
                      <q-card-section class="col-4">
                        <q-img class="secondGeoImg" src="../../assets/merveilleux.jpeg"></q-img>
                      </q-card-section>
                      <q-card-section class="col-8 column">
                        <div class="col-1 text-h4"><router-link :to="'/post/' + '630394ea07dec4a08eb73708'">Walking through the Cotton Castle</router-link></div>
                        <div class="col-11 secondGeoContent"><p>Pamukkale, meaning "cotton castle" in Turkish, is a natural site in Denizli Province in southwestern Turkey. The area is famous for a carbonate mineral left by the flowing of thermal spring water. It is located in Turkey's Inner Aegean region, in the River Menderes valley, which has a temperate climate for most of the year.
The ancient Greek city of Hierapolis was built on top of the travertine formation which is in total about 2,700 metres (8,860 ft) long, 600 m (1,970 ft) wide and 160 m (525 ft) high. It can be seen from the hills on the opposite side of the valley in the town of Denizli, 20 km away.</p></div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="culture">
              <div class="text-h4 q-mb-md">Culture</div>
              <div class="row">
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
                </div>
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
    CulturePosts.push(...data.result.filter(post => post.category === 'Culture'))
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

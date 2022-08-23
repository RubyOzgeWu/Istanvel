<template>
  <div id="CH_BlogAllView">
    <q-splitter
      v-model="splitterModel"
      style="height: 100vh - 51px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="history" label="歷史小故事" />
          <q-tab name="geography" label="地理探索" />
          <q-tab name="culture" label="人文風情" />
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
            <div class="banner">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex column flex-center">
                        <h1>歷史小故事</h1>
                    </div>
                </q-img>
            </div>
            <div class="historyPosts column">
                <div class="history col-12" v-for="history in HistoryPosts" :key="history._id">
                    <q-card class="my-card">
                        <q-card-section>
                            <router-link :to="'/CH_MainLayout/post/' + history._id" class="text-h3">{{history.CH_title}}</router-link>
                            <div class="text-subtitle2">{{history.CH_content}}</div>
                        </q-card-section>
                        <q-separator dark inset />
                    </q-card>
                </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="geography">
            <div class="banner">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex column flex-center">
                        <h1>地理探索</h1>
                    </div>
                </q-img>
            </div>
            <div class="geographyPosts column">
                <div class="history col-12" v-for="geography in GeographyPosts" :key="geography._id">
                    <q-card class="my-card">
                        <q-card-section>
                            <router-link :to="'/CH_MainLayout/post/' + geography._id" class="text-h3">{{geography.CH_title}}</router-link>
                            <div class="text-subtitle2">{{geography.CH_content}}</div>
                        </q-card-section>
                        <q-separator dark inset />
                    </q-card>
                </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="culture">
            <div class="banner">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex column flex-center">
                        <h1>人文風情</h1>
                    </div>
                </q-img>
            </div>
            <div class="culturePosts column">
                <div class="history col-12" v-for="culture in CulturePosts" :key="culture._id">
                    <q-card class="my-card">
                        <q-card-section>
                            <router-link :to="'/CH_MainLayout/post/' + culture._id" class="text-h3">{{culture.CH_title}}</router-link>
                            <div class="text-subtitle2">{{culture.CH_content}}</div>
                        </q-card-section>
                        <q-separator dark inset />
                    </q-card>
                </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'

const HistoryPosts = reactive([])
const GeographyPosts = reactive([])
const CulturePosts = reactive([])

const tab = ref('history')
const splitterModel = ref(20)
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

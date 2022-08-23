<template>
  <div class="q-pa-md" id="IndexPage">
    <div id="banner">
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
        transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
        <q-carousel-slide :name="1" img-src="../../assets/galata.jpg">
          <div class="absolute-center custom-caption">
            <div class="text-h2">歡迎來到 <span>伊斯坦堡</span></div>
            <div class="text-subtitle1">蘊藏千年寶藏、融合東西方的人文風情、享譽世界三大菜系之一的土耳其料理，最精彩、最美味、最變化多端的伊斯坦堡正在等著您來探索。</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label="前往探索" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../../assets/kizkulesi.jpg">
          <div class="absolute-center custom-caption">
            <div class="text-h2">歡迎來到 <span>伊斯坦堡</span></div>
            <div class="text-subtitle1">蘊藏千年寶藏、融合東西方的人文風情、享譽世界三大菜系之一的土耳其料理，最精彩、最美味、最變化多端的伊斯坦堡正在等著您來探索。</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label="前往探索" />
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" img-src="../../assets/sultanahmet.jpg">
          <div class="absolute-center custom-caption">
            <div class="text-h2">歡迎來到<span>伊斯坦堡</span></div>
            <div class="text-subtitle1">蘊藏千年寶藏、融合東西方的人文風情、享譽世界三大菜系之一的土耳其料理，最精彩、最美味、最變化多端的伊斯坦堡正在等著您來探索。</div>
            <q-btn size="22px" class="q-px-xl q-py-xs" label="前往探索" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- section02 -------------------------------------------------------------------------------------------->
    <section id="section02">
      <h3>享受您的伊斯坦堡之旅</h3>
      <p>從拜訪聖索菲亞大教堂到乘著遊輪徜徉於博斯普魯斯海峽，所有關於伊斯坦堡您想知道的事，都可以在這裡挖掘。</p>
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          <q-img src="../../assets/visa.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              簽證與入境
            </div>
          </q-img>
        </div>
        <div class="col-4">
          <q-img src="../../assets/tours.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              套裝行程
            </div>
          </q-img>
        </div>
        <div class="col-4">
          <q-img src="../../assets/activities.jpg" class="rounded-borders" style="max-width: 345px; height: 400px;"
            :fit="cover">
            <div class="absolute-full text-subtitle2 flex flex-center">
              活動資訊
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
            <h3>土耳其聖索菲亞大教堂 </h3>
            <p>
                聖索菲亞（希臘語：Ἁγία Σοφία ；土耳其語：Ayasofya Camii）是位於現今土耳其伊斯坦堡的宗教建築，[1][2]舊稱聖索菲亞大教堂，有近一千五百年的漫長歷史，因其巨大的圓頂而聞名於世，是一幢「改變了建築史」的拜占庭式建築典範[3]。

索菲亞在希臘語裡的意思是神聖智慧[4]。其拉丁語名稱則為Sancta Sophia或Sancta Sapientia，希臘語全名是「Ναός τῆς Ἁγίας τοῦ Θεοῦ Σοφίας」，解作「上帝聖智教堂」，教堂供奉在正教神學裡的耶穌[5][6]。
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- section04------------------------------------------------------------------------------------------ -->
    <section id="section04">
      <h3>TOP 10 景點</h3>
      <p>快來探索最夯、最著名、最壯觀的景點</p>
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
const slide = ref(1)
// autoplay: ref(true)
// fitModes: ['cover', 'fill', 'contain', 'none', 'scale-down']

// autoplay: ref(true)

</script>

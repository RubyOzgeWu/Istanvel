
<template>
  <div class="q-pa-md Marmaray" id="TransportView">
    <div class="row header">
          <div class="title col-9">
            <h2 class="text-left">Marmaray</h2>
            <p class="text-left "> The Marmaray is a 76.6 km-long intercontinental commuter rail line in Istanbul.<br>A rail tunnel under Bosphorus Strait connect European side and Asian side. </p>
          </div>
          <q-select class="col-3 navigator" outlined v-model="navigator" @update:model-value="getType" :options="options"/>
    </div>

    <div class="q-pa-md row main">
      <div class="col-12 showBox">
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Marmaray" class="q-pa-none">
              <q-splitter>

                <template v-slot:before>
                  <q-tabs
                    v-model="innerTab"
                    vertical
                    class="text-teal"
                  >
                    <q-tab name="B" label="B" />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="innerTab"
                    animated
                    transition-prev="slide-down"
                    transition-next="slide-up"
                  >
                    <q-tab-panel name="B" >
                        <MarmarayCard ></MarmarayCard>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>

              </q-splitter>
            </q-tab-panel>
        </q-tab-panels>
      </div>
      <!-- <div class="col-3 right">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" width="500px">
              <div class="absolute-full text-subtitle2 flex column flex-center">
              <h3>Hagia Sophia</h3>
              </div>
          </q-img>
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" width="500px">
              <div class="absolute-full text-subtitle2 flex column flex-center">
              <h3>Hagia Sophia</h3>
              </div>
          </q-img>
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" width="500px">
              <div class="absolute-full text-subtitle2 flex column flex-center">
              <h3>Hagia Sophia</h3>
              </div>
          </q-img>
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" width="500px">
              <div class="absolute-full text-subtitle2 flex column flex-center">
              <h3>Hagia Sophia</h3>
              </div>
          </q-img>

      </div> -->
    </div>
  </div>
</template>
<style>
#TransportView.Marmaray{
      background: url('https://images.unsplash.com/photo-1636537511494-c3e558e0702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center center/cover;
}
</style>
<script setup>
import MarmarayCard from 'src/components/MarmarayCard.vue'

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const tab = ref('Marmaray')
const innerTab = ref('B')
const navigator = ref('Marmaray')
const options = reactive(['Metro', 'Tramvay'])
const form = reactive([])
const getType = async (value) => {
  form.splice(0, form.length)
  form.push(value)
  console.log(form)
  if (form.includes('Metro')) {
    router.push('/metro')
  } else if (form.includes('Tramvay')) {
    router.push('/tramvay')
  }
}

</script>

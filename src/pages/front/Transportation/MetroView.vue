
<template>
  <div class="q-pa-md Metro" id="TransportView">
    <div class="row header">
          <div class="title col-9">
            <h2 class="text-left">Metro </h2>
            <p class="text-left ">There are 11 metro lines in Istanbul.<br>Taking the M2 line can reach most of popular sites in Istanbul. </p>
          </div>
          <q-select class="col-3 navigator" outlined v-model="navigator" @update:model-value="getType" :options="options"/>
    </div>

    <div class="q-pa-md row main">
      <div class="col-12 showBox">
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="metro" class="q-pa-none">
              <q-splitter>

                <template v-slot:before>
                  <q-tabs
                    v-model="innerTab"
                    vertical
                    class="text-teal"
                  >
                    <q-tab name="M1" label="M1" />
                    <q-tab name="M2" label="M2" />
                    <q-tab name="M3" label="M3" />
                    <q-tab name="M4" label="M4" />
                    <q-tab name="M5" label="M5" />
                    <q-tab name="M6" label="M6" />
                    <q-tab name="M7" label="M7" />
                    <q-tab name="M9" label="M9" />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="innerTab"
                    animated
                    transition-prev="slide-down"
                    transition-next="slide-up"
                  >
                    <q-tab-panel name="M1" >
                        <M1Card ></M1Card>
                    </q-tab-panel>

                    <q-tab-panel name="M2">
                        <M2Card ></M2Card>
                    </q-tab-panel>
                    <q-tab-panel name="M3">
                        <M3Card ></M3Card>
                    </q-tab-panel>
                    <q-tab-panel name="M4">
                        <M4Card ></M4Card>
                    </q-tab-panel>
                    <q-tab-panel name="M5">
                        <M5Card ></M5Card>
                    </q-tab-panel>
                    <q-tab-panel name="M6">
                        <M6Card ></M6Card>
                    </q-tab-panel>
                    <q-tab-panel name="M7">
                        <M7Card ></M7Card>
                    </q-tab-panel>
                    <q-tab-panel name="M9">
                        <M9Card ></M9Card>
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
#TransportView.Metro{
  background: url('https://images.unsplash.com/photo-1611033643132-1cef97a9f9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center center/cover;
}
</style>
<script setup>
import M1Card from 'src/components/metro/M1Card.vue'
import M2Card from 'src/components/metro/M2Card.vue'
import M3Card from 'src/components/metro/M3Card.vue'
import M4Card from 'src/components/metro/M4Card.vue'
import M5Card from 'src/components/metro/M5Card.vue'
import M6Card from 'src/components/metro/M6Card.vue'
import M7Card from 'src/components/metro/M7Card.vue'
import M9Card from 'src/components/metro/M9Card.vue'

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const tab = ref('metro')
const innerTab = ref('M1')
const navigator = ref('Metro')
const options = reactive(['Tramvay', 'Marmaray'])
const form = reactive([])
const getType = async (value) => {
  form.splice(0, form.length)
  form.push(value)
  console.log(form)
  if (form.includes('Tramvay')) {
    router.push('/tramvay')
  } else if (form.includes('Marmaray')) {
    router.push('/Marmaray')
  }
}

</script>

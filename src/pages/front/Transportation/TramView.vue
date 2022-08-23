
<template>
  <div class="q-pa-md Tramvay" id="TransportView">
    <div class="row header">
          <div class="title col-9">
            <h2 class="text-left">Tramvay</h2>
            <p class="text-left ">There are 5 tram lines in Istanbul.<br>Most of popular sites in Istanbul are on T1 and T5. </p>
          </div>
          <q-select class="col-3 navigator" outlined v-model="navigator" @update:model-value="getType" :options="options"/>
    </div>

    <div class="q-pa-md row main">
      <div class="col-12 showBox">
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="tramvay" class="q-pa-none">
              <q-splitter>

                <template v-slot:before>
                  <q-tabs
                    v-model="innerTab"
                    vertical
                    class="text-teal"
                  >
                    <q-tab name="T1" label="T1" />
                    <q-tab name="T5" label="T5" />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="innerTab"
                    animated
                    transition-prev="slide-down"
                    transition-next="slide-up"
                  >
                    <q-tab-panel name="T1" >
                        <T1Card ></T1Card>
                    </q-tab-panel>

                    <q-tab-panel name="T5">
                        <T5Card ></T5Card>
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
#TransportView.Tramvay{
  background: url('https://images.unsplash.com/photo-1623613229313-5e59f698526f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center center/cover;
}
</style>
<script setup>
import T1Card from 'src/components/tramvay/T1Card.vue'
import T5Card from 'src/components/tramvay/T5Card.vue'

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const tab = ref('tramvay')
const innerTab = ref('T1')
const navigator = ref('Tramvay')
const options = reactive(['Metro', 'Marmaray'])
const form = reactive([])
const getType = async (value) => {
  form.splice(0, form.length)
  form.push(value)
  console.log(form)
  if (form.includes('Metro')) {
    router.push('/metro')
  } else if (form.includes('Marmaray')) {
    router.push('/Marmaray')
  }
}

</script>

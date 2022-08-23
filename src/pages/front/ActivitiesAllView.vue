<template>
<div class="q-pa-md" id="ActivitiesAllView">
    <div class="banner">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
            <h1>Activities</h1>
            <p>Enjoy the journey in Istanbul</p>
          </div>
        </q-img>
    </div>

    <div class="activities column">
        <div class="col-3">123</div>
        <div class="col-9 row">
          <div class="col col-12 col-sm-6 col-md-3" v-for="activity in activities" :key="activity._id">
            <ActivityCard :activity="activity" id="ActivityCard"></ActivityCard>
          </div>
        </div>
    </div>

</div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../../boot/axios.js'
import ActivityCard from '../../components/ActivityCard.vue'

const activities = reactive([])

const init = async() => {
  try {
    const { data } = await api.get('/activities')
    activities.push(...data.result)
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

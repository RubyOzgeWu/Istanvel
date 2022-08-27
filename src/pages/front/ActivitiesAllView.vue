<template>
<div class="q-pa-md" id="ActivitiesAllView">
    <div class="banner">
        <q-img src="../../assets/kizkulesi.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
            <h1>Activities</h1>
            <p>Experience various interesting activities in Istanbul</p>
          </div>
        </q-img>
    </div>

    <div class="q-pa-md background">
      <div class="tours row">
        <div class="col-12 row">
          <div class="col col-lg-3 col-md-3 col-sm-3 col-xs-6 " v-for="activity in activities" :key="activity._id">
            <ActivityCard :activity="activity" id="ActivityCard"></ActivityCard>
          </div>
        </div>
        <div class="col-12 row">
          <div class="col col-lg-3 col-md-3 col-sm-3 col-xs-6 " v-for="activity in activities" :key="activity._id">
            <ActivityCard :activity="activity" id="ActivityCard"></ActivityCard>
          </div>
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
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

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

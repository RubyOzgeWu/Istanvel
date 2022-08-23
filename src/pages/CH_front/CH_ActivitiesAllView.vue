<template>
<div class="q-pa-md" id="ActivitiesAllView">
    <div class="banner">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex column flex-center">
            <h1>活動資訊</h1>
            <p>快來伊斯坦堡一探究竟</p>
          </div>
        </q-img>
    </div>

    <div class="tours row">
        <div class="col-3">123</div>
        <div class="col-9 row">
          <div class="col col-sm-6 col-md-3" v-for="activity in activities" :key="activity._id">
            <ChActivityCard :activity="activity"></ChActivityCard>
          </div>
        </div>
    </div>

</div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../../boot/axios.js'
import ChActivityCard from '../../components/ChActivityCard.vue'

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

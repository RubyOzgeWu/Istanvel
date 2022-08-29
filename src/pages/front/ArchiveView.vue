<template>
<div class="q-pa-md" id="ArchiveView">
    <h2 class="archiveTitle">My Archive</h2>
    <div class="q-pa-md column archive">
        <q-card v-for="(archive, idx) in archives" bordered class="my-card col-12 row" :key="archive._id">
            <q-card-section class="col-6">
                <router-link :to="'/post/'+ archive.post._id">{{archive.post.title}}</router-link>
            </q-card-section>
            <q-card-section class="col-2" v-if="$q.screen.gt.xs">
                <p>{{archive.post.category}}</p>
            </q-card-section>
            <q-card-section class="col-4 button" v-if="$q.screen.gt.xs">
                <q-btn color="secondary" @click="deleteArchive(idx)">remove</q-btn>
            </q-card-section>
            <q-card-section class="col-6 button" v-if="$q.screen.lt.sm">
                <q-btn color="secondary" @click="deleteArchive(idx)">remove</q-btn>
            </q-card-section>

        </q-card>
    </div>
</div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import { useUserStore } from '../../stores/user'
import Swal from 'sweetalert2'

const archives = reactive([])
const user = useUserStore()

const deleteArchive = async(idx) => {
  const result = await user.deleteArchive({ post: archives[idx].post._id })
  if (result) {
    archives.splice(idx, 1)
  }
}
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/archivePost')
    archives.splice(0, archives.length)
    archives.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>

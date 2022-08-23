<template>
<div class="q-pa-md" id="CH_BlogView">
    <div class="banner">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-full text-subtitle2 flex column flex-center">
            </div>
        </q-img>
    </div>
    <div class="q-pa-md">
        <q-card flat bordered class="my-card">
            <q-card-section>
                <div class="text-h2">{{post.CH_title}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">作者：{{post.CH_author}}</q-card-section>
            <q-separator inset />

            <q-card-section>{{post.CH_content}}</q-card-section>
            <q-separator inset />

            <q-card-section>{{post.date}}</q-card-section>

            <q-card-action>
                <q-btn color="secondary" icon="bookmark" @click="saved()"></q-btn>
            </q-card-action>
        </q-card>
    </div>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const post = reactive({
  _id: '',
  CH_title: '',
  CH_author: '',
  CH_content: '',
  date: '',
  image: '',
  sell: false
})
const init = async() => {
  try {
    const { data } = await api.get('/posts/' + route.params.id)
    post._id = data.result._id
    post.CH_title = data.result.CH_title
    post.CH_author = data.result.CH_author
    post.CH_content = data.result.CH_content
    post.date = new Date(data.result.date).toLocaleString()
    post.sell = data.result.sell
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: 'failed to load the post'
    })
    router.go(-1)
  }
}
init()

const saved = () => {
  user.CH_addArchive({
    post: post._id
  })
}
</script>

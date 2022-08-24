
<template>
<div class="q-pa-md" id="BlogView">
    <div class="banner">
        <q-img src="../../assets/galata.jpg" position="50% 50%">
            <div class="absolute-full text-subtitle2 flex column flex-center">
            </div>
        </q-img>
    </div>
    <div class="q-pa-md">
        <q-card flat bordered class="my-card">
            <q-card-section>
                <div class="text-h3 title">{{post.title}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none author">{{post.author}}</q-card-section>
            <q-card-section class="date">{{post.date}}</q-card-section>
            <q-separator inset />

            <q-card-section class="image">
              <q-img :src="post.image" class="postImg"></q-img>
            </q-card-section>
            <q-card-section class="content">{{post.content}}</q-card-section>

            <q-card-action>
                <q-btn color="secondary" icon="bookmark" @click="saved()" class="button"></q-btn>
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
  title: '',
  author: '',
  content: '',
  date: '',
  image: '',
  sell: false
})
const init = async() => {
  try {
    const { data } = await api.get('/posts/' + route.params.id)
    post._id = data.result._id
    post.title = data.result.title
    post.author = data.result.author
    post.content = data.result.content
    post.date = new Date(data.result.date)
    post.image = data.result.image
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
  user.addArchive({
    post: post._id
  })
}
</script>

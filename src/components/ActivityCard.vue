<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-color text-white">
        <router-link :to="'/activity/' + activity._id" class="text-h6">{{activity.name}}</router-link>
        <p>{{new Date(activity.dateStart).getFullYear()}}/{{new Date(activity.dateStart).getMonth()+1}}/{{new Date(activity.dateStart).getDate()}}</p>
      </q-card-section>

      <q-separator/>

      <q-card-section class="description">
        <p>{{ activity.description }}</p>
      </q-card-section>
    </q-card>
</div>

</template>

<script setup>
defineProps(['activity'])
// 借用父層 tour 資料 (:tour="tour")

</script>

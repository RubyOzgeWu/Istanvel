<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <router-link :to="'/CH_MainLayout/activity/' + activity._id" class="text-h6">{{activity.CH_name}}</router-link>
        <div class="text-subtitle2">{{activity.price}}</div>
      </q-card-section>

      <q-separator dark inset />

      <!-- <q-card-section>
        {{ activity.CH_description }}
      </q-card-section> -->
    </q-card>
</div>

</template>

<script setup>
defineProps(['activity'])
// 借用父層 tour 資料 (:tour="tour")

</script>

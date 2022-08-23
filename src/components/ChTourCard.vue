<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="{{tour.image}}"></q-img>
        <router-link :to="'/CH_MainLayout/tour/' + tour._id" class="text-h6">{{tour.CH_name}}</router-link>
        <div class="text-subtitle2">{{tour.CH_description}}</div>
      </q-card-section>

      <q-separator dark inset />

      <!-- <q-card-section>
        {{ tour.CH_description }}
      </q-card-section> -->
    </q-card>
</div>

</template>

<script setup>
defineProps(['tour'])
// 借用父層 tour 資料 (:tour="tour")

</script>

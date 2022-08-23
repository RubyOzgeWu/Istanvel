<template>
<div class="q-pa-lg row items-start q-gutter-md" id="TourCard">
    <q-card class="my-card column">
      <q-card-section class="col-7 image">
        <q-img :src="tour.image"></q-img>
      </q-card-section>
      <q-card-section class="col-2 info title">
        <router-link :to="'/tour/' + tour._id" class="text-h6 col">{{tour.name}}</router-link>
      </q-card-section>
      <q-card-section class="col-2 info title">
          <p class="col description">{{ tour.description }}</p>
      </q-card-section>

      <q-card-action class="col-1 button row">
        <q-btn :to="'/tour/' + tour._id" label="SEE"></q-btn>
      </q-card-action>
    </q-card>
</div>

</template>

<script setup>
defineProps(['tour'])
// 借用父層 tour 資料 (:tour="tour")

</script>

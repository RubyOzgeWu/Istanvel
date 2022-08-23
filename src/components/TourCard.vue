<template>
<div class="q-pa-xl-lg q-pa-lg-lg q-pa-md-md q-pa-sm-sm q-pa-xs-xs row items-start q-gutter-md" id="TourCard">
    <q-card class="my-card column">
      <q-card-section class="col-6 col-md-7 image">
        <q-img :src="tour.image"></q-img>
      </q-card-section>

      <q-card-section class="col-6 col-md-5 info">
        <!-- <div class="infobox"> -->
          <div class="tourName">
            <router-link :to="'/tour/' + tour._id" class="nameLink" >{{tour.name}}</router-link>
          </div>
          <div class="price" >
            <p>NT$ {{ tour.price }}</p>
          </div>
        <!-- </div> -->
      </q-card-section>
    </q-card>
</div>

</template>

<script setup>
defineProps(['tour'])
// 借用父層 tour 資料 (:tour="tour")

</script>

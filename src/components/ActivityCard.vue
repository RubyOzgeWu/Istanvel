<template>
<div class="q-pa-xl-lg q-pa-lg-md q-pa-md-md q-pa-sm-sm q-pa-xs-xs row items-start q-gutter-md" id="ActivityCard" data-aos="fade-left">
    <q-card class="my-card column">
      <q-card-section class="col-6 col-md-7 image">
        <q-img :src="activity.image"></q-img>
      </q-card-section>

      <q-card-section class="col-6 col-md-5 info">
        <!-- <div class="infobox"> -->
          <div class="activityName">
              <router-link :to="'/activity/' + activity._id" class="nameLink">{{activity.name}}</router-link>
          </div>
          <div>
            <p class="date">{{new Date(activity.dateStart).getFullYear()}}/{{new Date(activity.dateStart).getMonth()+1}}/{{new Date(activity.dateStart).getDate()}}－{{new Date(activity.dateEnd).getFullYear()}}/{{new Date(activity.dateEnd).getMonth()+1}}/{{new Date(activity.dateEnd).getDate()}}</p>
          </div>
          <div class="price" >
            <p>TRY {{ activity.price }}</p>
          </div>
        <!-- </div> -->
      </q-card-section>
    </q-card>
</div>
</template>

<!--
<router-link :to="'/activity/' + activity._id" class="text-h6">{{activity.name}}</router-link>
<p>{{new Date(activity.dateStart).getFullYear()}}/{{new Date(activity.dateStart).getMonth()+1}}/{{new Date(activity.dateStart).getDate()}}</p>
<p>{{ activity.description }}</p>

 -->
<script setup>
defineProps(['activity'])
// 借用父層 tour 資料 (:tour="tour")

</script>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          後台管理
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
        <q-scroll-area class="fit">
          <q-list>
              <q-item clickable v-ripple to="/">
                <q-item-section avatar>
                  <q-icon name="home" />
                </q-item-section>
                <q-item-section>回前台</q-item-section>
              </q-item>
              <q-separator/>
              <q-item clickable v-ripple to="/admin/members">
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>會員管理</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/admin/orders">
                <q-item-section avatar>
                  <q-icon name="fact_check" />
                </q-item-section>
                <q-item-section>訂單管理</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/admin/tours">
                <q-item-section avatar>
                  <q-icon name="tour" />
                </q-item-section>
                <q-item-section>行程管理</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/admin/activities">
                <q-item-section avatar>
                  <q-icon name="list" />
                </q-item-section>
                <q-item-section>活動管理</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/admin/posts">
                <q-item-section avatar>
                  <q-icon name="list" />
                </q-item-section>
                <q-item-section>文章管理</q-item-section>
              </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      drawer: ref(false)

    }
  }
}
</script>

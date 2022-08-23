<template>
  <q-layout view="lHh Lpr lFf" id="main-layout">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->
        <q-icon name="img:src/assets/logo-temporary.png" />
        <q-toolbar-title>
          İstanvel
        </q-toolbar-title>
        <q-tabs  shrink no-caps class="text-white">
          <q-route-tab exact label="首頁" />
          <q-route-tab exact to="/CH_MainLayout/BlogAll" label="土耳其大小事" />
          <q-route-tab exact to="/CH_MainLayout/ToursAll" label="行程探索" />
          <q-route-tab exact label="交通懶人包" />
          <q-route-tab exact label="top10" />
          <q-route-tab exact to="/CH_MainLayout/ActivitiesAll" label="活動資訊" />
          <q-route-tab exact label="旅行土文小字典" />
        </q-tabs>

        <!-- languages----------------------------------------------------------------------- -->
        <q-btn color="primary" label="CH">
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item clickable to="/">
                <q-item-section>EN</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <!-- management----------------------------------------------------------------------------- -->
        <q-tabs v-model="tab" no-caps class="text-white login">
          <q-route-tab  v-if="!isLogin" to="/CH_MainLayout/login" name="login" label="登入"/>
          <q-route-tab  v-if="isLogin && isAdmin" to="/admin" label="管理員"/>
          <q-route-tab  v-if="isLogin" to="/CH_MainLayout/cart"  icon="shopping_cart" />
          <!-- <q-route-tab v-if="isLogin" to="/account" icon="mdi:account-circle"/> -->
          <q-btn-dropdown v-if="isLogin">
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon left name="account_circle" />
              </div>
            </template>

            <q-list>
              <q-item clickable to="/CH_MainLayout/order" @click="tab = 'My orders'">
                <q-item-section>我的訂單</q-item-section>
              </q-item>
              <q-item clickable to="/CH_MainLayout/archive" @click="tab = 'My archives'">
                <q-item-section>我的收藏</q-item-section>
              </q-item>
              <q-item clickable @click="logout">
                <q-item-section>登出</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>

      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)

</script>

<template>
  <q-layout view="hHh Lpr lff" id="main-layout">
    <q-header elevated class="text-white">
      <q-toolbar>
        <q-btn class="menu" v-if="$q.screen.lt.md" dense flat round icon="menu" @click="drawer = !drawer"  />
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->
        <q-icon class="logo" name="img: logo-temporary.png"/>
        <q-toolbar-title  >
          <router-link to="/">İstanvel</router-link>
        </q-toolbar-title>

      <!-- <q-tabs shrink no-caps class="text-white col-7 menu row">
        <q-route-tab exact to="/" name="mails" label="home" />
        <q-route-tab exact to="/BlogAll" label="blog" />
        <q-route-tab exact to="/ToursAll" label="tour" />
        <q-route-tab exact to="/TransportAll" label="transportation" />
        <q-route-tab exact label="top10" />
        <q-route-tab exact to="/ActivitiesAll" label="activities" />
        <q-route-tab exact label="dictionary" />
      </q-tabs> -->

        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <q-btn flat to="/" class="text-white">
            home
          </q-btn>
          <q-btn flat to="/BlogAll" class="text-white">
            blog
          </q-btn>
          <q-btn flat to="/ToursAll" class="text-white">
            tours
          </q-btn>
          <q-btn flat to="/TransportAll" class="text-white">
            transportation
          </q-btn>
          <q-btn flat to="/Top10" class="text-white">
            top 10
          </q-btn>
          <q-btn flat to="/ActivitiesAll"  class="text-white">
            activities
          </q-btn>
        </div>

        <q-space />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn dense flat class="language">
            <div class="row items-center no-wrap">
              EN
              <q-icon name="arrow_drop_down" size="16px" style="margin-left: 2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section>CH</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn flat v-if="isLogin && isAdmin" to="/admin" label="admin" class="admin"/>
          <q-btn flat v-if="isLogin" to="/cart"  icon="shopping_cart" class="shoppingCart"/>
          <q-btn flat v-if="!isLogin" to="/login" name="login" label="login" class="login"/>
          <q-btn dense flat no-wrap v-if="isLogin" class="account">
                <q-icon left name="account_circle" />
                <q-icon name="arrow_drop_down" size="16px" />
            <q-menu auto-close>
              <q-list dense>
                <q-item v-if="$q.screen.lt.sm && isLogin && isAdmin" to="/admin"  lickable class="GL__menu-link-orders">
                  <q-item-section>
                    <div>Admin</div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-orders" to="/order">
                  <q-item-section>
                    <div>My Orders</div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-archive" to="/archive" >
                  <q-item-section>My Archive</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-logout" @click="logout">
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

      </q-toolbar>

    </q-header>
     <q-drawer
        v-if="$q.screen.lt.md"
        v-model="drawer"
        show-if-above
        :width="200"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
            <q-list>
                <q-item clickable v-ripple to="/">
                  <q-item-section>
                    home
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/BlogAll">
                  <q-item-section>
                    blog
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/ToursAll">
                  <q-item-section>
                    tours
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/TransportAll" >
                  <q-item-section>
                    transportation
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/Top10"  >
                  <q-item-section>
                    top10
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/ActivitiesAll" >
                  <q-item-section>
                    activities
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple  >
                  <q-item-section>
                    <q-btn class="langButton" to="/CH_MainLayout">CH</q-btn>
                  </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
      </q-drawer>
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
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
import { Screen } from 'quasar'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)
const drawer = ref(false)
const menuList = reactive([
  {
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
])

const go = () => {
  console.log('123')
}

</script>

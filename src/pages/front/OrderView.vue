<template>
<div id="OrderView">
  <h2 class="orderTitle">My Orders</h2>
  <div class="order">
      <q-markup-table v-if="$q.screen.gt.xs">
    <thead>
      <!-- <th>test</th> -->
      <th>Order ID</th>
      <th>Order</th>
      <th>Ordered date</th>
      <th>Total</th>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row._id">
        <!-- <td>{{row}}</td> -->
        <td>{{row._id}}</td>
        <!-- <td>{{row}}</td> -->
        <td>
          <ul>
            <li v-for="order in row.order" :key="order._id">
              <router-link :to="order.tour?._id ? '/tour/'+ order.tour?._id : '/activity/'+ order.activity?._id ">
                {{order.tour?.name|| order.activity?.name}}
              </router-link>
            </li>
          </ul>
        </td>
        <!-- <td>{{row.order[idx].tour?.name ||row.order[idx].activity?.name }}</td> -->
        <td>{{new Date(row.date).toLocaleDateString()}}</td>
        <td>NTD {{row.totalPrice}}</td>
        <!-- <td><q-btn @click="openDetail=true" :detail="detail">detail</q-btn></td> -->
      </tr>
    </tbody>
      </q-markup-table>

    <q-markup-table v-if="$q.screen.lt.sm">
    <thead>
      <!-- <th>test</th> -->
      <th>Order ID</th>
      <!-- <th>Order</th> -->
      <th>Ordered date</th>
      <!-- <th>Total</th> -->
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row._id">

        <td class="id" @click="openDetail(row._id)">{{row._id}}</td>
        <td>{{new Date(row.date).toLocaleDateString()}}</td>
      </tr>
    </tbody>
    </q-markup-table>
  </div>

  <div>
    <q-dialog
      v-model="medium"
      full-width
    >
        <q-card style="width: 700px; max-width: 80vw;">
          <q-card-section>
            <div class="text-h6 details" style="color:#A10D48; font-family: 'Ubuntu', sans-serif;">Details</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div v-for="order in form.order" :key="order._id">
              <router-link :to="order.tour?._id ? '/tour/'+ order.tour?._id : '/activity/'+ order.activity?._id ">{{order.tour?.name || order.activity?.name}}</router-link>
            </div>
            <p class="price text-right" style="color:#A10D48; font-size: 1.25rem; font-family: 'Ubuntu', sans-serif; font-weight: 500; margin-top:10%;">Total: {{form.totalPrice}} $</p>
          </q-card-section>

          <q-card-actions align="right" class="text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
    </q-dialog>

  </div>
</div>

</template>
<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'
// const orders = reactive([])

const rows = reactive([])

const columns = [
  {
    name: 'ID',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row._id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'date', align: 'center', field: row => new Date(row.date).toLocaleDateString(), label: 'Date' },
  { name: 'total', label: 'total', field: row => row.totalPrice, sortable: true },
  { name: 'detail', label: '', sortable: true }
]

const form = reactive({
  order: '',
  name: '',
  totalPrice: ''
})

// const openDetail = ref(false)
const medium = ref(false)
const openDetail = (_id) => {
  const idx = _id === '' ? -1 : rows.findIndex(row => row._id === _id)
  if (idx !== -1) {
    medium.value = true
    form.order = rows[idx].order
    form.totalPrice = rows[idx].totalPrice
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    rows.splice(0, rows.length)
    rows.push(...data.result.map(order => {
      order.totalPrice = order.order.reduce((a, b) => {
        return a + (b.tour?.price || b.activity?.price) * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'failed',
      text: 'Cannot get the order'
    })
  }
}
init()
</script>

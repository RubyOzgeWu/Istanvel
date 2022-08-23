<template>
<!-- <div class="q-pa-md">
    <q-table
        :grid="$q.screen.lt.md"
        title="My Order"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
    >
      <template #body-cell-detail="detail">
        <q-btn @click="openDetail=true" :detail="detail">detail</q-btn>
      </template>
    </q-table>
    <q-dialog
      v-model="openDetail"
      full-width
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Order</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-markup-table>
            <thead>
              <th>Tour/Activity</th>
              <th>Ordered date</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              <tr>
                <td>{{rows[0].order}}</td>
              </tr>

            </tbody>

          </q-markup-table>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

</div> -->
<q-markup-table>
  <thead>
    <th>Order ID</th>
    <th>Ordered date</th>
    <th>Total</th>
    <th></th>
  </thead>
  <tbody>
    <tr v-for="row in rows" :key="row._id">
      <td>{{row._id}}</td>
      <td>{{new Date(row.date).toLocaleDateString()}}</td>
      <td>{{row.totalPrice}}</td>
      <td><q-btn @click="openDetail=true" :detail="detail">detail</q-btn></td>
    </tr>
  </tbody>
</q-markup-table>
<q-dialog
      v-model="openDetail"
      full-width
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Order</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>{{row._id}}</p>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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

const openDetail = ref(false)

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    rows.push(...data.result.map(order => {
      order.totalPrice = order.order.reduce((a, b) => {
        return a + b.tour?.price || b.activity?.price * b.quantity
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

<template>
<div class="q-pa-md" id="OrdersView">
    <q-table
            :grid="$q.screen.lt.md"
            title="訂單管理"
            :rows="rows"
            :columns="columns"
            row-key="name"
            :filter="filter"
            >
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                <q-icon name="search" />
                </template>
            </q-input>
        </template>
    </q-table>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'

const filter = ref('')
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
  { name: 'account', align: 'center', field: row => row.user.account, label: '訂單帳戶' },
  { name: 'name', align: 'center', field: row => row.orderInfo[0].name, label: '訂購人姓名' },
  { name: 'name', align: 'center', field: row => row.orderInfo[0].email, label: '訂購人信箱' },
  { name: 'name', align: 'center', field: row => row.orderInfo[0].phone, label: '訂購人電話' },
  { name: 'date', align: 'center', field: row => new Date(row.date).toLocaleDateString(), label: '訂單日期' },
  { name: 'edit', label: 'total', field: row => row.totalPrice, sortable: true }
]

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
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

<template>
<div class="q-pa-md">
    <q-table
        :grid="$q.screen.lt.md"
        title="我的訂單"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
    >

    </q-table>
</div>
</template>
<script setup>
import { reactive } from 'vue'
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
  { name: 'date', align: 'center', field: row => new Date(row.date).toLocaleDateString(), label: '日期' },
  { name: 'edit', label: '總共', field: row => row.totalPrice, sortable: true }
]

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
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
}
init()
</script>

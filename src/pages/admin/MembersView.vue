<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col-12">
            <q-table
                title="會員管理"
                :rows="rows"
                :columns="columns"
                row-key="account"
                :filter="filter"
                >
                <!-- <template v-slot:header-selection="scope">
                    <q-toggle v-model="scope.selected" />
                </template>

                <template v-slot:body-selection="scope">
                    <q-toggle v-model="scope.selected" />
                </template> -->
                <template v-slot:top-right>
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                      <template v-slot:append>
                          <q-icon name="search" />
                      </template>
                    </q-input>
                </template>
                <template #body-cell-deleteUser="deleteUser">
                      <q-td>
                        {{deleteUser.row._id}}
                        <q-btn @click="deleteIt(deleteUser.row._id)">刪除</q-btn>
                      </q-td>
                </template>
            </q-table>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios.js'

const columns = [
  {
    name: 'account',
    required: true,
    label: 'Account',
    align: 'left',
    field: row => row.account,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Email', align: 'center', label: 'Email', field: row => row.email, sortable: true },
  { name: 'deleteUser', label: '刪除', align: 'right', sortable: true }
]

const rows = reactive([])
const selected = ref([])

const filter = ref('')
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    rows.splice(0, rows.length)
    rows.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

const deleteIt = async (id) => {
  console.log(id)
  try {
    await apiAuth.delete('/users/' + id)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    await Swal.fire({
      icon: 'success',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}
</script>

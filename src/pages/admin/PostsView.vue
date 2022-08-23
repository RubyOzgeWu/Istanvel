<template>
<div class="q-pa-md">
  <div class="row">
    <div class="col-12">
      <q-btn label="新增文章" color="secondary" @click="openDialog('', -1)" />
      <q-dialog v-model="form.dialog" persistent>
      <!-- <q-form > -->
        <q-card style="min-width: 700px">
            <q-toolbar>
                <q-toolbar-title><span class="text-weight-bold">新增商品</span></q-toolbar-title>
            </q-toolbar>

            <q-form v-model='form.valid' @submit.prevent='submitForm'>
              <q-card>
                <q-card-section class="q-pt-none">
                  <q-input dense v-model="form.title" autofocus label="文章標題(英文)" :rules='[rules.required]'/>
                  <q-input dense v-model="form.CH_title" autofocus label="文章標題（中文）" :rules='[rules.required]'/>
                  <q-input dense v-model="form.author" autofocus label="文章作者（英文）" :rules='[rules.required]'/>
                  <q-input dense v-model="form.CH_author" autofocus label="文章作者（中文）" :rules='[rules.required]'/>
                  <q-input dense v-model="form.content" type="textarea" autofocus label="文章內容（英文）" :rules='[rules.required]'/>
                  <q-input dense v-model="form.CH_content" type="textarea" autofocus label="文章內容（中文）" :rules='[rules.required]'/>
                  <q-input dense v-model="form.date" autofocus label="上傳日期" :rules='[rules.required]'/>
                  <q-select v-model="form.category" :options="options" label="文章分類" :rules='[rules.required]'/>
                  <q-file dense v-model="form.image" autofocus label="照片" />
                  <q-checkbox v-model="form.sell" label="上傳文章" color="teal" />
                </q-card-section>
                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat type='submit' :loading='form.submitting' label="確定" v-close-popup />
                    <q-btn flat label="取消" @click='form.dialog = false' :disabled='form.submitting' v-close-popup />
                  </q-card-actions>
              </q-card>
            </q-form>
        </q-card>

      <!-- </q-form> -->
      </q-dialog>
    </div>
    <div class="col-12">
      <q-table
          :grid="$q.screen.lt.md"
          title="文章管理"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template #body-cell-edit="edit">
            <q-btn  @click="openDialog(edit.row._id)" >編輯</q-btn>
            <q-btn @click="deleteIt(edit.row._id)" >刪除</q-btn>
          </template>
          <template v-slot:item="card">
            <div
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
              :style="card.selected ? 'transform: scale(0.95);' : ''"
            >
              <q-card :class="card.selected ? 'bg-grey-2' : ''">
                <!-- <q-card-section> -->
                  <!-- <q-checkbox dense v-model="card.selected" :label="card.row.name" /> -->
                <!-- </q-card-section> -->
                <!-- <q-separator /> -->
                <q-list v-for="col in card.cols" :key="col.name">
                  <q-item >
                    <q-item-section>
                      <q-item>
                        <!-- <q-item-label>{{ col.label }}</q-item-label> -->
                        <!-- card.col => 指 整個data col // col.name => card.cols.name col的name 要相同於 row value 的 name -->
                        <q-item-label caption v-if="col.name !== 'image'">
                          <!-- {{ card.row[col.name] }} -->
                          {{ col.value}}
                        </q-item-label>
                        <q-avatar square v-else-if="col.name == 'image'">
                            <!-- <img :src="card.row[col.name]" alt=""> -->
                            <img :src="card.row.image " alt="">
                            <!-- <h3>{{ card.row.image }}</h3> -->
                            <!-- <q-btn>1234</q-btn> -->
                            <!-- <h1>{{ row.name }}</h1> -->
                        </q-avatar>
                      </q-item>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label caption></q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-card-action>
                  <q-btn  @click="openDialog(card.row._id)" >編輯</q-btn>
                  <q-btn   @click="deleteIt(card.row._id)" >刪除</q-btn>
                </q-card-action>
              </q-card>
            </div>
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
    name: 'title',
    required: true,
    label: '英文標題',
    align: 'left',
    field: row => row.title,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'CH_title', align: 'center', label: '中文標題', field: row => row.CH_title, sortable: true },
  { name: 'author', align: 'center', label: 'Author', field: row => row.author, sortable: true },
  { name: 'date', align: 'center', label: 'Date', field: row => row.date, sortable: true },
  { name: 'category', align: 'center', label: 'Category', field: row => row.category, sortable: true },
  { name: 'edit', label: '編輯', sortable: true }

]

const rows = reactive([])

const filter = ref('')

// const tours = reactive([])
const form = reactive({
  _id: '',
  title: '',
  CH_title: '',
  author: '',
  CH_author: '',
  content: '',
  CH_content: '',
  date: '',
  image: null,
  category: '',
  sell: false,
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})
const options = ['History', 'Geography', 'Culture & Foods']

const rules = reactive({
  required (v) {
    return !!v || '必填'
  },
  price (v) {
    return v > -1 || '必須大於等於 0'
  },
  size (v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})
const openDialog = (_id) => {
  form._id = _id
  const idx = _id === '' ? -1 : rows.findIndex(row => row._id === _id)
  if (idx > -1) {
    form.title = rows[idx].title
    form.CH_title = rows[idx].CH_title
    form.author = rows[idx].author
    form.CH_author = rows[idx].CH_author
    form.content = rows[idx].content
    form.CH_content = rows[idx].CH_content
    form.date = rows[idx].date
    form.category = rows[idx].category
    form.sell = rows[idx].sell
  } else {
    form.title = ''
    form.CH_title = ''
    form.author = ''
    form.CH_author = ''
    form.content = ''
    form.CH_content = ''
    form.date = ''
    form.category = ''
    form.sell = false
  }
  form.image = null
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}
const submitForm = async () => {
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    // else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/posts', fd)
      rows.push(data.result)

      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
      init()
    } else {
      const { data } = await apiAuth.patch('/posts/' + form._id, fd)
      rows[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
      init()
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}
const init = async () => {
  try {
    const { data } = await apiAuth.get('/posts/all')
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
    await apiAuth.delete('/posts/' + id)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    await Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}
</script>

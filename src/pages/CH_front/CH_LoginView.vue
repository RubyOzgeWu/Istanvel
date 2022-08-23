<template>
  <div class="q-pa-md" id="LoginView">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
          narrow-indicator>
          <q-tab name="login" label="登入" />
          <q-tab name="signUp" label="註冊" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <!-- login----------------------------------------------------- -->
          <q-tab-panel name="login" class="column">
            <div class="text-h6 text-center">登入</div>
            <q-form  @submit.prevent='login'>
              <q-input ref="inputRef" v-model="LoginForm.account" label="帳戶名稱" :rules="rules.account" />
              <q-input ref="inputRef" v-model="LoginForm.password" :type="isPwd ? 'password' : 'text'" label="密碼"
                :rules="rules.password">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd" />
                </template>
              </q-input>
              <q-btn type="submit" size="22px" class="q-px-xl q-py-xs" color="secondary" label="登入" />
            </q-form>

          </q-tab-panel>

          <!-- sign up--------------------------------------------------- -->
          <q-tab-panel name="signUp" class="column">
            <div class="text-h6 text-center">註冊</div>
            <q-form v-model='valid' @submit.prevent='register'>
              <q-input ref="inputRef" v-model="signUpForm.account" label="帳戶名稱" :rules="rules.account" />
              <q-input ref="inputRef" v-model="signUpForm.email" label="信箱" :rules="rules.email" />
              <q-input ref="inputRef" v-model="signUpForm.password" :type="isPwd ? 'password' : 'text'" label="密碼"
                :rules="rules.password">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd" />
                </template>
              </q-input>
              <q-btn type="submit" size="22px" class="q-px-xl q-py-xs" color="secondary" label="Sign up" />
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { isEmail } from 'validator'
import { api } from '../../boot/axios.js'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user.js'

import Swal from 'sweetalert2'

export default defineComponent({
  name: 'CH_LoginView',
  setup() {
    const router = useRouter()
    const user = useUserStore()

    const inputRef = ref(null)

    const signUpForm = reactive({
      email: '',
      account: '',
      password: ''
    })

    const LoginForm = reactive({
      account: '',
      password: ''
    })

    const rules = reactive({
      account: [
        v => !!v || '帳戶必填',
        v => (v.length >= 4 && v.length <= 20) || '帳戶名稱長度應在4-20字以內',
        v => /^[a-zA-Z0-9]+$/.test(v) || '帳戶名稱只能為英文字母或數字'
      ],
      email: [
        v => !!v || '信箱必填',
        v => isEmail(v) || '請填入正確的信箱格式'
      ],
      password: [
        v => !!v || '密碼必填',
        v => (v.length >= 4 && v.length <= 20) || '密碼長度應在4-20字以內',
        // .test() 把 v 替換成正則表達式出來的元素
        v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能為英文或數字'
      ]
    })

    const register = async () => {
      console.log('ok')
      try {
        await api.post('/users', signUpForm)
        await Swal.fire({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        router.push('/CH_MainLayout')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    }

    const login = () => {
      user.chLogin(LoginForm)
    }

    return {
      tab: ref('login'),
      signUpForm,
      LoginForm,
      rules,
      inputRef,
      isPwd: ref(true),
      register,
      login,

      reset() {
        inputRef.value.resetValidation()
      }
    }
  }

})

</script>

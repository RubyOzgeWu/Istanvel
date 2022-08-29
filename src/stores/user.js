import { defineStore } from 'pinia'
import { api, apiAuth } from '../boot/axios.js'

// import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export const useUserStore = defineStore({
  // state: () => ({
  //   counter: 0
  // }),

  id: 'user',
  state() {
    return {
      token: '',
      account: '',
      role: 0,
      cart: 0

    }
  },
  getters: {
    // doubleCount: (state) => state.counter * 2
    isLogin () {
      return this.token.length !== 0
    },
    isAdmin () {
      return this.role === 1
    },
    avatar () {
      return 'https://source.boringavatars.com/beam/120/' + this.account
    }
  },
  actions: {
    // increment () {
    //   this.counter++
    // }

    async login (form) {
      // const router = useRouter()
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login successfully'
        })
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : 'Error occurs'
        })
      }
    },
    async logout () {
      try {
        await apiAuth.delete('/users/logout')
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Logout successfully'
        })
      } catch (_) {
      }
      this.token = ''
      this.account = ''
      this.role = 0
      this.cart = 0
    },
    async chLogin(form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: '成功登入'
        })
        this.router.push('/CH_MainLayout')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '錯誤發生'
        })
      }
    },
    async addCart (data, num) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: 'Please login first'
        })
        this.router.push('/login')
        return
      }
      if (num === 1) {
        try {
          const { data: resData } = await apiAuth.post('/users/cartTour', data)
          this.cart = resData.result
          console.log(this.cart)
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Added to the cart'
          })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'failed',
            text: 'Failed'
          })
        }
      }
      if (num === 2) {
        try {
          const { data: resData } = await apiAuth.post('/users/cartActivity', data)
          this.cart = resData.result
          console.log(this.cart)
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Added to the cart'
          })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'failed',
            text: 'Failed'
          })
        }
      }
      if (num === 0) {
        try {
          const { data: resData } = await apiAuth.post('/users/cartInfo', data)
          this.cart = resData.result
          console.log(this.cart)
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Added to the cart'
          })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'failed',
            text: 'Failed'
          })
        }
      }
    },
    async CH_addCart (data, num) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        this.router.push('/login')
        return
      }
      if (num === 1) {
        try {
          const { data: resData } = await apiAuth.post('/users/cartTour', data)
          this.cart = resData.result
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '加入購物車成功'
          })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '加入購物車失敗'
          })
        }
      }
      if (num === 2) {
        try {
          const { data: resData } = await apiAuth.post('/users/cartActivity', data)
          this.cart = resData.result
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '加入購物車成功'
          })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '加入購物車失敗'
          })
        }
      }
    },
    async updateCart (data) {
      try {
        await apiAuth.patch('/users/cart', data)
        return true
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to update the cart'
        })
        return false
      }
    },
    async checkout (data) {
      try {
        await apiAuth.post('/orders', data)
        this.cart = 0
        this.orderInfo = 0
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'Check out successfully'
        })
        this.router.push('/order')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: 'Check out failed'
        })
      }
    },
    async CH_checkout (data) {
      try {
        await apiAuth.post('/orders', data)
        this.cart = 0
        this.orderInfo = 0
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '結帳成功'
        })
        this.router.push('/CH_MainLayout/order')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    async addArchive(data) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: 'Please login first'
        })
        this.router.push('/login')
      }
      try {
        const { data: resData } = await apiAuth.post('/users/archivePost', data)
        this.archivePost = resData.result
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'Add to your archive posts'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text: 'Failed'
        })
      }
    },
    async deleteArchive (data) {
      try {
        await apiAuth.patch('/users/archivePost', data)
        return true
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to delete'
        })
        return false
      }
    },
    async CH_addArchive(data) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        this.router.push('/login')
      }
      try {
        const { data: resData } = await apiAuth.post('/users/archivePost', data)
        this.archivePost = resData.result
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '已收藏文章'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '失敗'
        })
      }
    },
    async CH_deleteArchive (data) {
      try {
        await apiAuth.patch('/users/archivePost', data)
        return true
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '無法刪除文章'
        })
        return false
      }
    },
    async addOrderInfo (data) {
      try {
        const { data: resData } = await apiAuth.post('/users/orderInfo', data)
        this.orderInfo = resData.result
        Swal.fire({
          icon: 'success',
          title: 'success'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'failed'
        })
      }
    },
    async CH_addOrderInfo (data) {
      try {
        const { data: resData } = await apiAuth.post('/users/orderInfo', data)
        this.orderInfo = resData.result
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '加入資訊成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '加入資訊失敗'
        })
      }
    },
    async getUser () {
      if (this.token.length === 0) return
      try {
        const { data } = await apiAuth.get('/users')
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
      } catch (error) {
        this.logout()
      }
    }
  },
  persist: {
    key: 'vite-shop',
    paths: ['token']
  }
})

import { boot } from 'quasar/wrappers'
import VueGoogleMaps from '@fawmi/vue-google-maps'

export default boot(({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU'
    }
  })
})

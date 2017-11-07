import Vue from 'vue'
import router from './router'
import app from './App'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iview)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})

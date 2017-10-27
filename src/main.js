// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import me from './components/menu'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iview)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<me/>',
  components: { me }
})

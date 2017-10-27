import Vue from 'vue'
import Router from 'vue-router'
import me from '@/components/menuLeft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'me',
      component: me
    }
  ]
})

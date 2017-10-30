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
    },
    {
      path: '/home',
      icon: 'home',
      name: 'Home',
      title: '首页',
      component: me,
      children: [
          { path: '/runstatus', title: '运行状态', name: 'runstatus', icon: 'compose', component: resolve => { require(['../views/runstatus.vue'], resolve) } },
          { path: '/realtime', title: '实时信息', name: 'realtime', icon: 'arrow-swap', component: resolve => { require(['../views/realtime.vue'], resolve) } },
          { path: '/overview', title: '运行日志', name: 'overview', icon: 'arrow-swap', component: resolve => { require(['../views/overview.vue'], resolve) } }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Form from '../views/form'
import Table from '../views/table'
import Over from '../views/overview'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/form',
      component: Form
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/home',
      component: Over,
      children: [
          { path: 'runstatus', title: '运行状态', name: 'runstatus', icon: 'compose', component: resolve => { require(['../views/form.vue'], resolve) } },
          { path: 'realtime', title: '实时信息', name: 'realtime', icon: 'arrow-swap', component: resolve => { require(['../views/table.vue'], resolve) } },
          { path: 'overview', title: '运行日志', name: 'overview', icon: 'arrow-swap', component: resolve => { require(['../views/overview.vue'], resolve) } }
      ]
    }
  ]
})

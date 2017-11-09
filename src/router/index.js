import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/form'
import Table from '../components/table'
import Cont from '../views/homeCon'
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
      component: Cont,
      children: [
          { path: 'runstatus', title: '运行状态', name: 'runstatus', icon: 'compose', component: resolve => { require(['../views/runstatus.vue'], resolve) } },
          { path: 'realtime', title: '实时信息', name: 'realtime', icon: 'arrow-swap', component: resolve => { require(['../views/syslog.vue'], resolve) } }
      ]
    }
  ]
})

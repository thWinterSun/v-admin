import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/form'
import Table from '../components/table'
import Cont from '../views/homeCon'
import ChartCont from '../views/charts/chartsCont'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Cont,
            children: [
                { path: 'runstatus', title: '运行状态', name: 'runstatus', icon: 'compose', component: resolve => { require(['../views/runstatus.vue'], resolve) } },
                { path: 'realtime', title: '实时信息', name: 'realtime', icon: 'arrow-swap', component: resolve => { require(['../views/syslog.vue'], resolve) } }
            ]
        },
        {
            path: '/table',
            component: Table
        },
        {
            path: '/form',
            component: Form
        },
        {
            path: '/charts',
            component: ChartCont,
            children: [
                { path: 'echarts', title: 'echarts', name: 'echarts', component: resolve => { require(['../views/charts/echarts.vue'], resolve) } },
                { path: 'highCharts', title: 'highCharts', name: 'highCharts', component: resolve => { require(['../views/charts/highCharts.vue'], resolve) } }
            ]
        }
    ]
})

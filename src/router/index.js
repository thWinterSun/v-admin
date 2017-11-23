import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
Vue.use(Router)
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['../views/login.vue'], resolve); }
};
export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            children: [
                { path: 'runstatus', title: '运行状态', name: 'runstatus', component: resolve => { require(['../views/runstatus.vue'], resolve) } },
                { path: 'realtime', title: '实时信息', name: 'realtime', component: resolve => { require(['../views/syslog.vue'], resolve) } }
            ]
        },
        {
            path: '/table/',
            component: Home,
            children: [
                { path: 'basictable', title: '基本表格', name: 'basictable', component: resolve => { require(['../views/tables/basic-table.vue'], resolve) } },
                { path: 'filtertable', title: '过滤表格', name: 'filtertable', component: resolve => { require(['../views/tables/filter-table.vue'], resolve) } },
                { path: 'edittable', title: '编辑表格', name: 'edittable', component: resolve => { require(['../views/tables/edit-table.vue'], resolve) } },
                { path: 'test', title: '标签测试', name: 'test', component: resolve => { require(['../views/tables/test.vue'], resolve) } }
            ]
        },
        {
            path: '/form',
            component: Home,
            children: [
                { path: 'basicform', title: '基本表单', name: 'basicform', component: resolve => { require(['../views/forms/basic-form.vue'], resolve) } },
                { path: 'validateform', title: '验证表单', name: 'validateform', component: resolve => { require(['../views/forms/validate-form.vue'], resolve) } },
                { path: 'updata', title: '升级', name: 'updata', component: resolve => { require(['../views/forms/updata.vue'], resolve) } }
            ]
        },
        {
            path: '/charts',
            component: Home,
            children: [
                { path: 'echarts', title: 'echarts', name: 'echarts', component: resolve => { require(['../views/charts/echarts.vue'], resolve) } },
                { path: 'highCharts', title: 'highCharts', name: 'highCharts', component: resolve => { require(['../views/charts/highCharts.vue'], resolve) } }
            ]
        },
        loginRouter
    ]
})

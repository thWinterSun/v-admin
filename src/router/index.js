import Vue from 'vue'
import Router from 'vue-router'
import Content from '../views/content.vue'
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
    // mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            children: [
                { path: '', component: resolve => { require(['../views/home/homeBody.vue'], resolve) } },
                { path: 'runstatus', title: 'runstatus', name: 'runstatus', component: resolve => { require(['../views/home/homeBody.vue'], resolve) } },
                { path: 'worldMap', title: 'worldMap', name: 'worldMap', component: resolve => { require(['../views/home/intrusion.vue'], resolve) } },
                { path: 'globalMap', title: 'globalMap', name: 'globalMap', component: resolve => { require(['../views/home/global.vue'], resolve) } }
            ]
        },
        {
            path: '/table/',
            component: Content,
            children: [
                { path: '', component: resolve => { require(['../views/tables/basic-table.vue'], resolve) } },
                { path: 'basictable', title: '基本表格', name: 'basictable', component: resolve => { require(['../views/tables/basic-table.vue'], resolve) } },
                { path: 'edittable', title: '编辑表格', name: 'edittable', component: resolve => { require(['../views/strategySet/intrusion/intrusion-strategy.vue'], resolve) } },
                { path: 'edittable/add', title: 'add', name: '编辑添加', component: resolve => { require(['../views/strategySet/intrusion/intruFrom.vue'], resolve) } },
                { path: 'role', title: '角色', name: '角色管理', component: resolve => { require(['../views/systemSet/role.vue'], resolve) } },
                { path: 'role/add', title: 'add', name: '角色添加', component: resolve => { require(['../views/systemSet/roleForm.vue'], resolve) } },
                { path: 'user/add', title: 'add', name: '用户添加', component: resolve => { require(['../views/systemSet/userAdd.vue'], resolve) } }
            ]
        },
        {
            path: '/form',
            component: Content,
            children: [
                { path: '', component: resolve => { require(['../views/forms/basic-form.vue'], resolve) } },
                { path: 'basicform', title: '基本表单', name: 'basicform', component: resolve => { require(['../views/forms/basic-form.vue'], resolve) } },
                { path: 'validateform', title: '验证表单', name: 'validateform', component: resolve => { require(['../views/forms/validate-form.vue'], resolve) } },
                { path: 'updata', title: '升级', name: 'updata', component: resolve => { require(['../views/forms/updata.vue'], resolve) } }
            ]
        },
        {
            path: '/charts',
            component: Content,
            children: [
                { path: '', component: resolve => { require(['../views/charts/echarts.vue'], resolve) } },
                { path: 'echarts', title: 'echarts', name: 'echarts', component: resolve => { require(['../views/charts/echarts.vue'], resolve) } },
                { path: 'highCharts', title: 'highCharts', name: 'highCharts', component: resolve => { require(['../views/charts/highCharts.vue'], resolve) } },
                { path: 'frappe', title: 'frappe', name: 'frappe', component: resolve => { require(['../views/charts/echarts.vue'], resolve) } }
            ]
        },
        loginRouter
    ]
})

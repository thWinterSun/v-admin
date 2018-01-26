import Vue from 'vue'
import router from './router'
import store from './store/store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import ECharts from 'vue-echarts';
import theme from './assets/themes/vintage.json'
import app from './App'
import Cookies from 'js-cookie'
ECharts.registerTheme('dark', theme)
Vue.use(iview)
/* echarts */
Vue.component('chart', ECharts)
Vue.config.productionTip = false
/* Loadingbar */
router.beforeEach((to, from, next) => {
    if (!Cookies.get('csrftoken') && to.name !== 'login') {  // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'
        });
    } else {
        iview.LoadingBar.start();
        next();
    }
});

router.afterEach(route => {
    iview.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
})

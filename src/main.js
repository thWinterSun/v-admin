import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import ECharts from 'vue-echarts';
import app from './App'
Vue.use(iview)
/* echarts */
Vue.component('chart', ECharts)
Vue.config.productionTip = false
/* Loadingbar */
router.beforeEach((to, from, next) => {
    iview.LoadingBar.start();
    next();
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

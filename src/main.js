import Vue from 'vue'
import router from './router'
import store from './store/store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import ECharts from 'vue-echarts';
import theme from './assets/themes/dark.json'
import app from './App'
ECharts.registerTheme('dark', theme)
Vue.use(iview)
/* echarts */
Vue.component('chart', ECharts)
Vue.config.productionTip = false
/* Loadingbar */
// router.beforeEach((to, from, next) => {
//     if (!Cookies.get('csrftoken') && to.name !== 'login') {
//         next({
//             name: 'login'
//         });
//     } else {
//         iview.LoadingBar.start();
//         next();
//     }
// });

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

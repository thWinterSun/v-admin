import Vue from 'vue'
import router from './router'
import app from './App'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)
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
    template: '<app/>',
    components: { app }
})

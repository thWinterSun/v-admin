import Vue from 'vue'
import Vuex from 'vuex'
// import state from './modules/getInfo'
import state from './modules/userData.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state
})

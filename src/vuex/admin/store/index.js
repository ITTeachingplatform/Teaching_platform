import Vuex from 'vuex'
import Vue from 'vue';
import state from '../state'
Vue.use(Vuex);
const store = new Vuex.Store({
    state
})

export default store
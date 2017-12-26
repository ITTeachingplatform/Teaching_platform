import Vuex from 'vuex'
import Vue from 'vue';
import state from '../state'
import actions from '../actions'
import mutations from '../mutations'
Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
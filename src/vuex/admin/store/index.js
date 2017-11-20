//此文件用于将state/mutations/actions整合进store,支持多模块
//也就是在子组件中我们只需要导入这个store文件就可以使用这些东西了
//具体用法可以见管理员vue组件的导入

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
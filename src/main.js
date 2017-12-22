// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
// 富文本编辑器
import './assets/ueditor/ueditor.config'
import './assets/ueditor/ueditor.all'
import './assets/ueditor/ueditor.parse.min.js'
import './assets/ueditor/lang/zh-cn/zh-cn.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})

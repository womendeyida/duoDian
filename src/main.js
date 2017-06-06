// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  HomeXian from './home/home_xian'
import router from './router/index'
//导入vueX
import Vuex from 'vuex'
Vue.use(Vuex)

//引入重置样式表
import '../css/reset.css'


import axios from 'axios'
Vue.prototype.axios = 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, HomeXian },
  router
})

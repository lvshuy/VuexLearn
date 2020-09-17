// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from "vuex"
Vue.use(Vuex)
import store from "./store"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, //注册store,以便其它的组件可以访问
  components: { App },
  template: '<App/>'
})

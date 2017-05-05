// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource)

window.jQuery = jQuery
window.$ = jQuery

// require('motion-ui')
require('what-input')
require('foundation-sites')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

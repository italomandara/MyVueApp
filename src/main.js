// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import marked from 'marked'
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)
Vue.use(VueResource)

window.jQuery = jQuery
window.$ = jQuery

// require('motion-ui')
require('what-input')
require('foundation-sites')

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    markdown: function (input) {
      var htm = input || ''
      return marked(htm)
    },
    static: function (input) {
      var item = input || ''
      var SETTINGS = {
        STATIC_ROOT: 'http://localhost:8000/static/'
      }
      return [SETTINGS.STATIC_ROOT, item].join('')
    }
  }
})

Vue.filter('date', function (value, format) {
  return value
})

/* eslint-disable no-new */
window.MyCVApp = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

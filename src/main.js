// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
// import config from '../config/index'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import marked from 'marked'
import moment from 'moment'
import Vue2Filters from 'vue2-filters'
import VueLazyload from 'vue-lazyload'

Vue.use(Vue2Filters)
Vue.use(VueResource)
Vue.use(VueLazyload)

window.jQuery = jQuery
window.$ = jQuery

if (process.env.NODE_ENV === 'development') {
  window.DJANGO_URL = '//localhost:8000'
} else {
  window.DJANGO_URL = ''
}

require('motion-ui')
require('what-input')
require('foundation-sites')

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    markdown: function (input) {
      var htm = input || ''
      return marked(htm)
    },
    date: function (input, options) {
      var date = input || ''
      var format = options || 'LL'
      return moment(date).format(format)
    },
    static: function (input) {
      var item = input || ''
      var SETTINGS = {
        STATIC_ROOT: window.DJANGO_URL + '/static/'
      }
      return [SETTINGS.STATIC_ROOT, item].join('')
    }
  }
})

Vue.filter('date', function (value, format) {
  format = format || 'LL'
  return moment(value).format(format)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

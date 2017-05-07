import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import more from '@/components/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/more/',
      name: 'More',
      component: more
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import more from '@/components/more'
import thoughts from '@/components/thoughts'
import post from '@/components/post'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: home
  }, {
    path: '/more/',
    name: 'More',
    component: more
  }, {
    path: '/thoughts/',
    name: 'Thoughts',
    component: thoughts
  }, {
    path: '/thoughts/posts/:slug',
    name: 'Post',
    component: post
  }, {
    path: '/thoughts/categories/:category',
    name: 'Category',
    component: category
  }]
})

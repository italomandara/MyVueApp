import Vue from 'vue'
import Vuex from 'vuex'
import { getCategories } from './mixins/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {},
    nav: {
      is_video: true,
      is_standard_hero: true,
      person: {},
      intro: {},
      title: 'Navigation',
      page: {
        title: ''
      },
      hero_class: 'background-video'
    }
  },
  getters: {
    getPostCategories (state) {
      return getCategories(state.categories, 'post')
    }
  }
})

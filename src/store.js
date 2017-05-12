import Vue from 'vue'
import Vuex from 'vuex'
import { getCategories, slugify } from './mixins/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {},
    nav: {
      is_video: true,
      is_standard_hero: true,
      hero_image: '',
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
    },
    getSkillCategories (state) {
      return getCategories(state.categories, 'skill')
    },
    getCategoriesSlugs (state) {
      return (mymodel) => {
        var obj = {}
        var categories = state.categories[mymodel]
        for (var idx in categories) {
          var cat = categories[idx]
          obj[idx] = {slug: slugify(cat), name: cat}
        }
        return obj
      }
    }
  }
})

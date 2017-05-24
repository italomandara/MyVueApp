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
    getJobCategories (state) {
      return getCategories(state.categories, 'job')
    },
    getPostCategory (state) {
      return (a) => {
        return (!!state.categories.post && state.categories.post[a]) || ''
      }
    },
    getSkillCategory (state) {
      return (a) => {
        return (!!state.categories.skill && state.categories.skill[a]) || ''
      }
    },
    getJobCategory (state) {
      return (a) => {
        return (!!state.categories.job && state.categories.job[a]) || ''
      }
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
    },
    getEffect (state) {
      return (value, arg) => {
        var outputString = !!state.SETTINGS && 'https://process.filestackapi.com/' + state.SETTINGS.FILEPICKER_API_KEY + '/' + encodeURI(arg) + '/' + value || value
        return outputString
      }
    },
    getResized (state) {
      return (value, arg) => {
        var outputString = !!state.SETTINGS && 'https://process.filestackapi.com/' + state.SETTINGS.FILEPICKER_API_KEY + '/resize=' + encodeURI(arg) + '/' + value || value
        return outputString
      }
    }
  }
})

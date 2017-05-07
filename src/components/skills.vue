<template>
  <div class="background background-color-1 pad pad-top">
    <div class="row">
      <h4 class="margin bottom set-text-color to-white">Skills list</h4>
      <a @click="filterEl" v-for="skill_category in skill_categories" class="button filter small" :data-filter="skill_category.slug">{{ skill_category.name }}</a>
      <a @click="filterEl" v-for="skill_subcategory in skills_subcategories" class="button filter small" :data-filter-sub="skill_subcategory">{{ skill_subcategory }}</a>
      <a @click="filterEl" class="button filter small active" data-filter="none">All</a>
      <div class="masonry small-masonry-1 medium-masonry-2 large-masonry-4">     
          <skill :skill="skill" v-for="skill in skills_list" :key="skill.slug"></skill>
      </div>
    </div>
  </div>
</template>

<script>
  import { slugify, filterEl } from '../mixins/utils'
  import skill from './skill.vue'
  export default {
    name: 'skills',
    components: {
      skill
    },
    data () {
      this.$http
      .get(['http://', window.location.hostname, ':8000', '/api/skill/', '?format=json'].join(''))
      .then((response) => {
        this.skills_list = response.data
        this.skills_subcategories = this.skills_list.map(
          (list) => {
            return list.subcategory.toLowerCase()
          })
        .filter((elem, index, self) => {
          return index === self.indexOf(elem)
        })
      })
      return {
        skills_list: [],
        skills_subcategories: [],
        skill_categories: this.$store.getters.getSkillCategories
      }
    },
    methods: {
      filterEl,
      slugify
    }
  }
</script>

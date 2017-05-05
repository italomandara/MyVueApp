<template>
  <div class="background background-color-1 pad pad-top">
    <div class="row">
      <h4 class="margin bottom set-text-color to-white">Skills list</h4>
      <a data-click="filter_el($event)" v-for="skill_category in skill_categories" class="button filter small" :data-filter="skill_category">{{ skill_category }}</a>
      <a data-click="filter_el($event)" v-for="skill_subcategory in skills_subcategories" class="button filter small" :data-filter-sub="skill_subcategory">{{ skill_subcategory }}</a>
      <a data-click="filter_el($event)" class="button filter small active" data-filter="none">All</a>
      <div class="masonry small-masonry-1 medium-masonry-2 large-masonry-4">     
          <skill :skill="skill" v-for="skill in skills_list" :key="skill.slug"></skill>
      </div>
    </div>
  </div>
</template>

<script>
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
        skill_categories: this.$store.state.categories.skill
      }
    }
  }
</script>

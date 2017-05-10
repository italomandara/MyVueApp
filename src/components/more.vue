<template>
  <div class="row-wrapper">
    <div class="background background-color-1">
        <description :content="skills" :customclass="'row set-text-color to-white pad pad-bottom'"></description>
    </div>
    <div class="row last">
      <div class="row">
        <div class="medium-8 column">
          <h4 class="margin top bottom">Education and Courses</h4>
          <div class="masonry small-masonry-1 medium-masonry-2 large-masonry-2">
            <course v-for="course in courses" :key="course.slug" :course="course"></course>
          </div>
          <h4 class="margin top bottom">{{ achievements.h1 }}</h4>
          <description :content="achievements" :notitle="1" :customclass="'small-masonry-1 medium-masonry-2 large-masonry-2'"></description>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import description from './description.vue'
import course from './course.vue'

export default {
  components: {
    description,
    course
  },
  name: 'more',
  data () {
    return {
      achievements: [],
      skills: {},
      intro: {},
      courses: []
    }
  },
  beforeMount () {
    var nav = this.$store.state.nav

    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=achievements&format=json'].join('')).then(function (response) {
      this.achievements = response.data[0]
    })
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/course/', '?format=json'].join('')).then(function (response) {
      this.courses = response.data
    })
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=skills&format=json'].join('')).then(function (response) {
      this.skills = response.data[0]
    })
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=more&format=json'].join('')).then(function (response) {
      this.intro = response.data[0]
      nav.is_video = false
      nav.is_standard_hero = true
      nav.intro = this.intro
      nav.hero_class = ''
      nav.hero_image = this.static('img/bg.jpg')
      nav.page = {
        'title': 'more',
        'name': 'more'
      }
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

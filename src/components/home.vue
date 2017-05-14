<template>
<div class="row-wrapper">
  <div class="row">
    <div class="masonry medium-masonry-1 large-masonry-3 margin bottom top" v-html="markdown(intro.body)"></div>
    <description v-if="showDescription" :content="profile"></description>
  </div>
  <skills></skills>
  <div class="background background-color-2 pad pad-top">
    <div class="row">
      <carousel></carousel>
    </div>
  </div>
</div>
</template>

<script>
import description from './description.vue'
import skills from './skills.vue'
import carousel from './carousel.vue'

export default {
  components: {
    description,
    skills,
    carousel
  },
  name: 'home',
  data () {
    return {
      intro: {},
      profile: {},
      showDescription: false
    }
  },
  beforeMount () {
    var nav = this.$store.state.nav
    this.$http.get([window.DJANGO_URL, '/api/mycontent/', '?slug=intro&format=json'].join('')).then(
      (response) => {
        nav.intro = response.data[0]
        this.intro = response.data[0]
      })
    this.$http.get([window.DJANGO_URL, '/api/mycontent/', '?slug=profile&format=json'].join('')).then(
      (response) => {
        this.profile = response.data[0]
      })
    nav.is_video = true
    nav.is_standard_hero = true
    nav.hero_class = 'background-video'
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

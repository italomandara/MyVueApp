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
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=intro&format=json'].join('')).then(
      (response) => {
        this.$store.state.nav.intro = response.data[0]
        this.intro = response.data[0]
      })
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=profile&format=json'].join('')).then(
      (response) => {
        this.profile = response.data[0]
      })

    return {
      intro: {},
      profile: {},
      showDescription: false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

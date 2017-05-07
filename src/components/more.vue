<template>
<div class="row-wrapper">
  <div class="row">
    <description v-if="showDescription" :content="profile"></description>
  </div>
</div>
</template>

<script>
import description from './description.vue'

export default {
  components: {
    description
  },
  name: 'more',
  data () {
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=more&format=json'].join('')).then(
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
      showDescription: true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

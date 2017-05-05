<template>
  <div id="app" class="off-canvas-content">
    <hero></hero>
    <topbar></topbar>
    <mobile-topbar></mobile-topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import hero from './components/hero.vue'
import topbar from './components/topbar.vue'
import mobileTopbar from './components/mobile-topbar.vue'

export default {
  name: 'app',
  components: {
    hero,
    topbar,
    mobileTopbar
  },
  data () {
    this.$http
      .get(['http://', window.location.hostname, ':8000', '/api/s/', '?format=json'].join('')).then(
          (response) => {
            this.$store.state.SETTINGS = response.data
          }
        )
    this.$http
      .get(['http://', window.location.hostname, ':8000', '/api/categories/', '?format=json'].join('')).then(
        (response) => {
          this.$store.state.categories = response.data
        }
      )
    return {
      SETTINGS: this.$store.state.SETTINGS
    }
  }
}
</script>

<style lang="sass">
  @import "./styles/app.scss"
</style>  


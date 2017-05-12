<template>
  <div id="app" class="off-canvas-content">
    <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <div class="off-canvas position-left" id="offCanvasMenu" data-off-canvas>
        <!-- Close button -->
        <a class="left-off-canvas-toggle close-button" >
          <span aria-hidden="true">&times;</span>
        </a>
        <!-- Menu -->
        <ul class="mobile-ofc vertical menu">
          <menu-items></menu-items>
        </ul>
      </div>
      <div class="off-canvas-content">
        <hero></hero>
        <topbar></topbar>
        <mobile-topbar></mobile-topbar>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import hero from './components/hero.vue'
import topbar from './components/topbar.vue'
import mobileTopbar from './components/mobile-topbar.vue'
import menuItems from './components/menu-items.vue'

export default {
  name: 'app',
  components: {
    menuItems,
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


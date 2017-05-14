<template>
  <div id="app" class="off-canvas-content">
    <div class="off-canvas-wrapper-inner">
      <div class="off-canvas position-left" id="offCanvasMenu" data-off-canvas>
        <!-- Close button -->
        <a class="close-button" data-toggle="offCanvasMenu">
          <span aria-hidden="true">&times;</span>
        </a>
        <!-- Menu -->
        <menu-items :customClass="'mobile-ofc vertical menu'"></menu-items>
      </div>
      <div class="off-canvas-content" data-offcanvas-content>
        <hero></hero>
        <div id="full-menu" class="small-12 hide-for-small-only" data-sticky-container>
          <topbar></topbar>
        </div>
        <mobile-topbar></mobile-topbar>
        <router-view></router-view>
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
      .get([window.DJANGO_URL, '/api/s/', '?format=json'].join('')).then(
          (response) => {
            this.$store.state.SETTINGS = response.data
          }
        )
    this.$http
      .get([window.DJANGO_URL, '/api/categories/', '?format=json'].join('')).then(
        (response) => {
          this.$store.state.categories = response.data
        }
      )
    return {
      SETTINGS: this.$store.state.SETTINGS
    }
  },
  mounted () {
    // eslint-disable-next-line
    new Foundation.OffCanvas($('#offCanvasMenu'))
  }
}
</script>

<style lang="sass">
  @import "./styles/app.scss"
</style>  


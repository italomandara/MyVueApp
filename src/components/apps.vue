<template>
  <div class="row-wrapper">
    <div class="row">
      <description :content="intro" :notitle="true" :customclass="'pad pad-vertical'"></description>
    </div>
    <div class="row">
        <modal :modal="netflixapp"><netflix-app/></modal>
        <modal :modal="calc"><calc/></modal>
        <modal :modal="marvelapp"><marvel-app/></modal>
        <div class="is_hidden"></div>
    </div>
  </div>
</template>

<script>
import netflixApp from './netflixapp/netflixapp.vue'
import marvelApp from './marvelapp/marvelapp.vue'
import calc from './calc/calc.vue'
import modal from './modal.vue'
import description from './description.vue'
export default {
  components: {
    netflixApp,
    marvelApp,
    modal,
    description,
    calc
  },
  name: 'app',
  data () {
    return {
      intro: {},
      netflixapp: {
        id: 'netflixapp',
        button: 'Netflix App',
        buttonClass: 'button',
        options: {
          animationIn: 'scale-in-up',
          animationOut: 'scale-out-down',
          overlay: false
        },
        title: 'NetflixRoulette API',
        classes: 'large app-modal fast bounce-in'
      },
      marvelapp: {
        id: 'marvelapp',
        button: 'Marvel App',
        buttonClass: 'button',
        options: {
          animationIn: 'scale-in-up',
          animationOut: 'scale-out-down',
          overlay: false
        },
        title: 'Search for a Marvel hero',
        classes: 'large app-modal fast bounce-in'
      },
      calc: {
        id: 'calc',
        button: 'Calculator',
        buttonClass: 'button',
        options: {
          animationIn: 'scale-in-up',
          animationOut: 'scale-out-down',
          overlay: false
        },
        title: 'Calculator',
        classes: 'tiny app-modal fast bounce-in'
      }
    }
  },
  methods: {
  },
  beforeMount () {
    var nav = this.$store.state.nav
    this.$http.get([window.DJANGO_URL, '/api/mycontent/', '?slug=apps&format=json'].join('')).then(function (response) {
      this.intro = response.data[0]
      nav.is_video = false
      nav.is_standard_hero = true
      nav.intro = this.intro
      nav.hero_class = ''
      nav.hero_image = this.intro.image_primary
      nav.page = {
        'title': 'more',
        'name': 'more'
      }
    })
  }
}
</script>

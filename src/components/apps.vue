<template>
  <div class="row-wrapper">
    <div class="row">
      <description :content="intro" :notitle="true" :customclass="'pad pad-vertical'"></description>
    </div>
    <div class="row">
      <div class="small-2 column">
        <modal :modal="netflixapp"><netflix-app/></modal>
      </div>
      <div class="small-2 column">
        <modal :modal="calc"><calc/></modal>
      </div>
      <div class="small-8 column"></div>
    </div>
  </div>
</template>

<script>
import netflixApp from './netflixapp/netflixapp.vue'
import calc from './calc/calc.vue'
import modal from './modal.vue'
import description from './description.vue'
export default {
  components: {
    netflixApp,
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
        buttonClass: 'button expanded',
        options: {
          animationIn: 'scale-in-up',
          animationOut: 'scale-out-down',
          overlay: false
        },
        title: 'Find movies...',
        classes: 'small app-modal fast bounce-in'
      },
      calc: {
        id: 'calc',
        button: 'Calulator',
        buttonClass: 'button expanded',
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

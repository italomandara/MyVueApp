<template>
<div class="row-wrapper">
  <div class="row">
    <div class="masonry medium-masonry-1 large-masonry-3 margin bottom top" v-html="markdown(intro.body)"></div>
    <description v-if="showDescription" :content="profile"></description>
  </div>
  <skills></skills>
</div>
<!-- <div class="background background-color-2 pad pad-top">
    <div class="row" ng-controller="orbitController">
        <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
            <ul class="orbit-container slide-in-left slow ease-in-out mui-enter" style="transform: translateX(0)">
                <li ng-repeat="job in job_history" class="orbit-slide {{ $index === 0 ? 'is-active' : '' }}">
                        <job job="job"></job>
                </li>
            </ul>
            <nav class="orbit-bullets">
                <button ng-repeat="job in job_history" class="{{ $index === 0 ? 'is-active' : '' }}" data-slide="{{$index}}"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
            </nav>
        </div>
    </div>
</div> -->
</template>

<script>
import description from './description.vue'
import skills from './skills.vue'
export default {
  components: {
    description,
    skills
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

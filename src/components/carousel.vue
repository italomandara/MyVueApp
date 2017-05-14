<template>
  <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
      <ul class="orbit-container slide-in-left slow ease-in-out mui-enter" style="transform: translateX(0)">
          <li v-for="( job, index ) in jobs" :class="['orbit-slide', index === 0 ? 'is-active' : '' ]">
                  <job :job="job" ></job>
          </li>
      </ul>
      <nav class="orbit-bullets">
          <button v-for="( job, index ) in jobs" :class="[ index === 0 ? 'is-active' : '' ]" :data-slide="index"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
      </nav>
  </div>
</template>

<script>
  import job from './job.vue'
  export default {
    name: 'carousel',
    components: {
      job
    },
    data () {
      this.$http.get([window.DJANGO_URL, '/api/job/', '?format=json'].join('')).then((response) => {
        this.jobs = response.data
      })
      return {
        jobs: []
      }
    },
    updated () {
      // eslint-disable-next-line
      new Foundation.Orbit($(this.$el))
    }
  }
</script>

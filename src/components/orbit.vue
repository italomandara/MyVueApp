<template>
  <div class="orbit" role="region" data-orbit>
    <ul class="orbit-container slide-in-left slow ease-in-out mui-enter mui-enter " style="transform: translateX(0)" >
      <li v-for="image in images" class="orbit-slide"><img class="js-lazy margin bottom xsmall" :src="image"></li>
    </ul>
    <nav class="orbit-bullets" v-if="images.length>1">
      <button v-for="( image, index ) in images" :class="[ index === 0 ? 'is-active' : '' ]" :data-slide="index"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'orbit',
    props: ['images'],
    mounted () {
      // eslint-disable-next-line
      new Foundation.Orbit($(this.$el))
    }
  }
</script>

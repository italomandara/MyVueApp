<template>
  <figure id="hero" :class="['js-non-lazy row-wrapper cover hero', nav.hero_class]" :style="{ backgroundImage: nav.hero_image, backgroundPosition: 'center center' }" :data-original="nav.hero_image">
      <video autoplay preload loop v-if="nav.is_video && nav.intro.video_primary">
          <source :src="nav.intro.video_primary" type="video/mp4">
      </video>
      <div class="row" style="position: relative;" v-if="nav.is_standard_hero">
          <h1 class="margin top standout-text">{{ nav.intro.h1 }}</h1><br>
          <h4 class="margin bottom standout-text" style="margin-left: 50px">{{ nav.intro.h2 }}</h4>
      </div>
      <div class="row" v-if="!nav.is_video && !nav.is_standard_hero">
          <h3 class="margin top bottom standout-text" >{{ nav.page.title }} <small>Category</small></h3>
      </div>
  </figure>
</template>

<script>
  export default {
    name: 'hero',
    computed: {
      nav () {
        return this.$store.state.nav
      }
    }
  }
</script>

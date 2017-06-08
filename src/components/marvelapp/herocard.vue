<template>
  <div class="card marvel-app-card">
    <a :href="hero.urls[0].url" target="_blank" class="background background-color-1">
      <img v-lazy="hero.thumbnail.path + '.' + hero.thumbnail.extension">
    </a>
    <div class="card-section clearfix">
      <h5>{{ hero.name }}</h5>
      <p>{{ hero.description }}</p>
      <p v-for="link in hero.urls" class="margin none" ><a :href="link.url">{{ link.type }}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hero'],
  name: 'moviecard',
  data () {
    return {
      hideInfo: true,
      info: [
        'hide info',
        'show info'
      ]
    }
  },
  methods: {
    toggleInfo: function (event) {
      // eslint-disable-next-line
      $(event.target).next().removeClass('is-hidden')
      if (!this.hideInfo) {
        // eslint-disable-next-line
        Foundation.Motion.animateOut($(event.target).next(), 'hinge-out-from-top')
      } else {
        // eslint-disable-next-line
        Foundation.Motion.animateIn($(event.target).next(), 'hinge-in-from-top')
      }
      this.hideInfo = !this.hideInfo
    }
  }
}
</script>

<style lang="css" scoped>
  .marvel-app-card {
    border-radius: 20px;
  }
  .card-section {
    background: #b50f16;
    color: white;
  }
  a {
    color: white;
  }
</style>


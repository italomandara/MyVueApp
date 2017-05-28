<template>
  <div class="card">
    <div class="card-divider">
      {{ hero.release_year }}
    </div>
    <div class="background background-color-1">
      <img v-lazy="hero.thumbnail.path + '.' + hero.thumbnail.extension">
    </div>
    <div class="card-section">
      <h5>{{ hero.name }}</h5>
      <p>{{ hero.description }}</p>
      <button class="button secondary tiny margin none" @click="toggleInfo($event)">{{ info[hideInfo ? 1 : 0 ] }}</button>
      <div class="is-hidden fast bounce-in margin top">
        <small>
          <div class="row" v-for="link in hero.urls"><div class="small-4 column">{{ link.type }}: </div> <a :href="link.url" class="small-8 column">go to {{ link.type }}</a></div>
        </small>
      </div>
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

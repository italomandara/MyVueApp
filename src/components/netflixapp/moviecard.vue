<template>
  <div class="card">
    <div class="card-divider">
      {{ movie.release_year }}
    </div>
    <div class="background background-color-1">
      <img v-lazy="movie.poster">
    </div>
    <div class="card-section">
      <h5>{{ movie.show_title }}</h5>
      <p>{{ movie.summary }}</p>
      <button class="button secondary tiny margin none" @click="toggleInfo($event)">{{ info[hideInfo ? 1 : 0 ] }}</button>
      <div class="is-hidden fast bounce-in margin top">
        <small>
          <div class="row"><div class="small-4 column">Rating: </div> <div class="small-8 column">{{ movie.rating }}</div></div>
          <div class="row"><div class="small-4 column">Category:</div> <div class="small-8 column">{{ movie.category }}</div></div>
          <div class="row"><div class="small-4 column">Cast: </div> <div class="small-8 column">{{ movie.show_cast }}</div></div>
          <div class="row"><div class="small-4 column">Director:</div> <div class="small-8 column">{{ movie.director }}</div></div>
          <div class="row"><div class="small-4 column">runtime: </div> <div class="small-8 column">{{ movie.runtime }}</div></div>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
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

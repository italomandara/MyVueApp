<template>
  <div class="row pad">
    <!-- <div class="row-wrapper background background-color-3 margin bottom"> -->
    <form class="row" @submit.prevent="getMovies($event)">
      <div class="medium-3 small-6 column">
        <label>Director
          <input type="text" name="director">
        </label>
      </div>
      <div class="medium-3 small-6 column">
        <label>Actor
          <input type="text" name="actor">
        </label>
      </div>
      <div class="medium-3 show-for-medium column">
        <label>Title
          <input type="text" name="title">
        </label>
      </div>
<!--           <div class="small-2 column">
        <label>Year
          <input type="text" name="year">
        </label>
      </div> -->
      <div class="medium-3 show-for-medium column small margin top bottom">
        <button class="button expanded">Search</button>
      </div>
      <div class="small-12 hide-for-medium column small margin bottom">
        <button class="small button expanded">Search</button>
      </div>
    </form>
    <!-- </div> -->
    <div class="scrollable-500">
      <h5 v-if="error">Sorry, no results found</h5>
      <div v-else-if="movieList.length" class="small-12 masonry small-masonry-1 medium-masonry-2 large-masonry-3"> 
        <movie-card v-for="movie in movieList" :key="movie.show_id" :movie="movie"></movie-card>
      </div>
    </div>
  </div>
</template>

<script>
import movieCard from './moviecard.vue'
export default {
  components: {
    movieCard
  },
  name: 'netflixapp',
  data () {
    return {
      movieList: [],
      search: {
        director: '',
        actor: ''
      },
      error: false
    }
  },
  methods: {
    getMovies: function (event) {
      // eslint-disable-next-line
      var form = $(event.target).find('input').filter(function () {
        return !!this.value
      })
      var q = form.serialize()
      this.$http.get('http://netflixroulette.net/api/api.php?' + q).then((response) => {
        this.movieList = response.data.constructor === Array ? response.data : [response.data]
        this.error = false
      }, () => {
        this.error = true
      })
    }
  }
}
</script>

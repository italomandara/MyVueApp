<template>
  <div class="row pad">
    <!-- <div class="row-wrapper background background-color-3 margin bottom"> -->
    <form class="row" @submit.prevent="getHeroes($event)">
      <div class="medium-9 small-6 column">
        <label>Name
          <input type="text" name="nameStartsWith">
        </label>
      </div>
      <div class="medium-3 show-for-medium column small margin top bottom">
        <button class="button expanded">Search</button>
      </div>
    </form>
    <!-- </div> -->
    <div class="scrollable-500">
      <h5 v-if="error">Sorry, no results found</h5>
      <div v-else-if="heroList.length" class="small-12 masonry small-masonry-1 medium-masonry-2 large-masonry-3"> 
        <hero-card v-for="hero in heroList" :key="hero.id" :hero="hero"></hero-card>
      </div>
    </div>
  </div>
</template>

<script>
import heroCard from './herocard.vue'
export default {
  components: {
    heroCard
  },
  name: 'marvelapp',
  data () {
    return {
      heroList: [],
      search: {
        caracter: ''
      },
      error: false
    }
  },
  methods: {
    getHeroes: function (event) {
      // eslint-disable-next-line
      var form = $(event.target).find('input').filter(function () {
        return !!this.value
      })
      var q = form.serialize()
      this.$http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=' + this.$store.state.SETTINGS.MARVEL_PUBLIC_KEY + '&' + q).then((response) => {
        console.log(response)
        this.heroList = response.body.data.results.constructor === Array ? response.body.data.results : [response.body.data.results]
        this.error = false
      }, () => {
        this.error = true
      })
    }
  }
}
</script>

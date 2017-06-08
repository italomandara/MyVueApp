<template>
  <div class="row pad">
    <!-- <div class="row-wrapper background background-color-3 margin bottom"> -->
    <form class="row" @submit.prevent="queryHeroes($event)">
      <div class="large-3 medium-4 small-6 column">
        <label>Character name search
          <input type="text" name="nameStartsWith">
        </label>
      </div>
      <div class="large-3 medium-4 small-6 column small margin top bottom">
        <button class="button expanded">Search</button>
      </div>
    </form>
    <!-- </div> -->
    <div class="scrollable-500">
      <h5 v-if="error">Sorry, no results found</h5>
      <div v-else-if="heroList.length" class="small-12 masonry small-masonry-1 medium-masonry-2 large-masonry-3"> 
        <hero-card v-for="hero in heroList" :key="hero.id" :hero="hero"></hero-card>
      </div>
      <pagination v-if="pagesinfo.tot" :pagesinfo="pagesinfo" class="marvel text-center" @pagination="getHeroes"></pagination>
    </div>
  </div>
</template>

<script>
import heroCard from './herocard.vue'
import pagination from '../pagination.vue'

export default {
  components: {
    heroCard,
    pagination
  },
  name: 'marvelapp',
  data () {
    return {
      heroList: [],
      search: {
        caracter: '',
        offset: ''
      },
      error: false,
      page: 1,
      pagesinfo: {
        tot: 0,
        lim: 20,
        off: 0,
        q: ''
      }
    }
  },
  created () {
    this.getHeroes()
  },
  methods: {
    queryHeroes: function () {
      // eslint-disable-next-line
      var form = $(event.target).find('input').filter(function () {
        return !!this.value
      })
      var q = form.serialize()
      this.getHeroes({q: q, offset: 0})
    },
    getHeroes: function (value) {
      value = value || {}
      if (typeof value.offset === typeof undefined) {
        value.offset = 0
      }
      if (typeof value.q === typeof undefined) {
        value.q = ''
      }
      var params = [
        !value.q ? '' : '&' + value.q,
        value.offset ? '&offset=' + value.offset : ''
      ].join('')
      this.$http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=' + this.$store.state.SETTINGS.MARVEL_PUBLIC_KEY + params).then((response) => {
        this.heroList = response.body.data.results.constructor === Array ? response.body.data.results : [response.body.data.results]
        if (!!response.body.data.results && response.body.data.results.length) {
          this.error = false
          this.pagesinfo = {
            tot: response.body.data.total,
            lim: response.body.data.limit,
            off: response.body.data.offset,
            q: value.q
          }
        } else {
          this.error = true
        }
      }, () => {
        this.error = true
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .pagination.marvel .current {
    background: #b50f16;
  }
</style>

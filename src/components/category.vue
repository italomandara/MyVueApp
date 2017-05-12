<template>
  <div class="row-wrapper">
    <div class="row">
      <div class="masonry medium-masonry-1 large-masonry-3 large margin bottom top" v-html="markdown(intro.body)"></div>
    </div>
    <div class="row last">
      <div class="masonry medium-masonry-1 large-masonry-2 margin bottom">
        <postlistitem v-for="post in posts" :key="post.slug" :post="post"></postlistitem>
      </div>
      <error :error="error"></error>
    </div>
  </div>
</template>

<script>
import postlistitem from './postlistitem.vue'
import error from './error.vue'
import { slugify, getCategoryIdFromSlug } from '../mixins/utils'
export default {
  components: {
    postlistitem,
    error
  },
  name: 'category',
  data () {
    return {
      posts: [],
      intro: {},
      error: {}
    }
  },
  beforeMount () {
    var nav = this.$store.state.nav
    var cat = this.$route.params.category
    var category = getCategoryIdFromSlug(this.$store.state.categories.post, cat)
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/post/', '?ordering=-created_at&category=', category, '&format=json'].join('')).then(function (response) {
      this.posts = response.data
      if (!this.posts.data.length) {
        this.error = {
          title: 'Sorry,',
          description: "couldn't find any posts in this category"
        }
      }
    })
    this.$http.get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=', slugify(cat), '&format=json'].join('')).then(function (response) {
      this.intro = response.data[0]
      nav.is_video = false
      nav.is_standard_hero = true
      nav.intro = this.intro
      nav.hero_class = ''
      nav.hero_image = this.intro.image_primary || this.intro.featured_image
      nav.page = {
        'title': 'blog',
        'name': 'thoughts'
      }
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

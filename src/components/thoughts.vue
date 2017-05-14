<template>
  <div class="row-wrapper">
    <div class="row">
      <div class="masonry medium-masonry-1 large-masonry-3 large margin bottom top" v-html="markdown(intro.body)"></div>
    </div>
    <div class="row last">
      <div class="masonry medium-masonry-1 large-masonry-2 margin bottom">
        <postlistitem v-for="post in posts" :key="post.slug" :post="post"></postlistitem>
      </div>
    </div>
  </div>
</template>

<script>
import postlistitem from './postlistitem.vue'
export default {
  components: {
    postlistitem
  },
  name: 'thoughts',
  data () {
    return {
      posts: [],
      intro: {}
    }
  },
  beforeMount () {
    var nav = this.$store.state.nav

    this.$http.get([window.DJANGO_URL, '/api/post/', '?ordering=-created_at&format=json'].join('')).then(function (response) {
      this.posts = response.data
    })
    this.$http.get([window.DJANGO_URL, '/api/mycontent/', '?slug=thoughts-intro&format=json'].join('')).then(function (response) {
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

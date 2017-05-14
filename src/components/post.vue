<template>
<div class="row last">
  <div class="row">
    <p class="column margin top">Category: <span class="secondary label">{{ getPostCategory(post.category) }}</span></p>
    <p class="column small margin bottom set-text-color to-gray"><small>Posted by {{ post.author }} on <em>{{ post.created_at|date }}</em></small></p>
    <div class="small-12 column small margin bottom">
      <div class="masonry medium-masonry-1 large-masonry-2 small margin bottom" >
      <div class="margin bottom">
        <orbit :images="images"></orbit>
      </div>
      <div v-html="markdown(post.body)"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import orbit from './orbit.vue'
  export default {
    name: 'post',
    props: ['slug'],
    components: {
      orbit
    },
    data () {
      return {
        post: {},
        images: []
      }
    },
    methods: {
      getPostCategory (a) {
        if (typeof a !== typeof undefined) {
          return this.$store.state.categories.post[a]
        } else {
          return 0
        }
      }
    },
    // mounted () {
    //   // eslint-disable-next-line
    //   $(this.$el).foundation()
    // },
    beforeMount () {
      var nav = this.$store.state.nav
      this.$http.get(['http://', window.location.hostname, ':8000', '/api/post/', this.$route.params.slug, '/?format=json'].join('')).then(function (response) {
        this.post = response.data
        nav.is_video = false
        nav.is_standard_hero = true
        nav.intro = {
          h1: this.post.title,
          h2: this.post.subtitle
        }
        nav.hero_class = ''
        nav.hero_image = this.post.image_primary || this.post.featured_image
        nav.page = {
          'title': 'Post | ' + this.post.title,
          'name': 'Blog post'
        }

        this.images = []
        for (var index = 5; index >= 0; index--) {
          if (this.post['article_image' + index]) {
            this.images.push(this.post['article_image' + index])
          }
        }
      })
    }
  }
</script>

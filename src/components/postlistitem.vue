<template>
  <router-link class="large margin bottom container-link" :to="{ name: 'Post', params: { slug: post.slug }}">
    <div :class="['category-', slugify(getPostCategory(post.category)), ' tag-', post.tag, 'place-wrap small margin bottom']">
        <tooltip class="standout-text no-color-hover place place-top" :tooltip="postTooltip">
          <h5>{{ post.title }}</h5>
        </tooltip>
      <img class="js-lazy" :src="post.featured_image" data-original="post.featured_image">
      <p class="place place-bottom pad">
        <span class="secondary label">{{ getPostCategory(post.category) }}</span>
      </p>
    </div>
    <div class="">{{ post.body|truncate(100) }} <router-link :to="{ name: 'Post', params: { slug: post.slug }}">Read more.</router-link></div>
  </router-link>
</template>

<script>
  import { slugify } from '../mixins/utils'
  import tooltip from './tooltip.vue'
  export default {
    name: 'postlistitem',
    props: ['post'],
    components: {
      tooltip
    },
    methods: {
      slugify,
      getPostCategory (a) {
        return this.$store.state.categories.post[a]
      }
    },
    computed: {
      postTooltip () {
        return {
          placement: 'bottom',
          title: this.post.subtitle + ' by ' + this.post.author + ' ' + this.date(this.post.created_at)
        }
      }

    },
    mounted () {
      // eslint-disable-next-line
      $(this.$el).foundation()
    }
  }
</script>

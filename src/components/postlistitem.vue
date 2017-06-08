<template>
  <router-link class="large margin bottom container-link" :to="{ name: 'Post', params: { slug: post.slug }}">
    <div :class="['category-', slugify(getPostCategory(post.category)), ' tag-', post.tag, 'place-wrap small margin bottom']">
        <tooltip class="standout-text no-color-hover place place-top" :tooltip="postTooltip">
          <h5>{{ post.title }}</h5>
        </tooltip>
      <img v-lazy="featured_image">
      <p class="place place-bottom pad">
        <span class="secondary label">{{ getPostCategory(post.category) }}</span>
      </p>
    </div>
    <div>{{ post.body|truncate(100) }} <router-link :to="{ name: 'Post', params: { slug: post.slug }}">Read more.</router-link></div>
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
        return this.$store.getters.getPostCategory(a)
      }
    },
    computed: {
      postTooltip () {
        return {
          placement: 'bottom',
          title: this.post.subtitle + ' by ' + this.post.author + ' ' + this.date(this.post.created_at)
        }
      },
      featured_image () {
        return {
          src: this.$store.getters.getResized(this.post.featured_image, 'width:700'),
          loading: this.$store.getters.getEffect(this.post.featured_image, 'resize=width:50/output=q:30/')
        }
      }
    }
  }
</script>

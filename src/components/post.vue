<template>
  <div class="large margin bottom" ui-sref="posts({slug: post.slug})">
    <div :class="['category-', slugify(getPostCategory(post.category)), ' tag-', post.tag, 'place-wrap small margin bottom']">
      <a class="no-color-hover place place-top set-text-color has-tip" tooltip-placement="bottom" :tooltip="post.subtitle + ' by '+ post.author + ' ' + post.created_at">
        <h5 class="standout-text">{{ post.title }}</h5>
      </a>

      <img class="js-lazy" :src="post.featured_image" data-original="post.featured_image">
      <p class="place place-bottom pad">
        <span class="secondary label">{{ getPostCategory(post.category) }}</span>
      </p>
    </div>
    <div class="">{{ post.body|truncate(100) }} <a ui-sref="posts({slug: post.slug})">Read more.</a></div>
  </div>
</template>

<script>
  import { slugify } from '../mixins/utils'
  export default {
    name: 'post',
    props: ['post'],
    methods: {
      slugify,
      getPostCategory (a) {
        return this.$store.state.categories.post[a]
      }
    }
  }
</script>

<template>
  <a :href="tooltip.href" :class="['has-tip ', tooltip.placement, tooltip.class]" :title="tooltip.title" data-tooltip aria-haspopup="true">{{ tooltip.text }}</a>
</template>

<script>
  export default {
    name: 'hero',
    props: ['tooltip', 'text'],
    mounted () {
      // eslint-disable-next-line
      new Foundation.Tooltip($(this.$el))
    }
  }
</script>

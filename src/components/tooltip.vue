<template>
  <a :href="tooltip.href" :class="['has-tip ', tooltip.placement]" :title="tooltip.title" data-tooltip aria-haspopup="true">
  	<slot></slot>
  </a>
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

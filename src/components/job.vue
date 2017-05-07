<template>
<div :class="['row category-' + getJobCategory(job.category), 'subcategory-' + job.subcategory]" >
  <div class="small-12 medium-4 large-3 column text-right text-left-for-small-only">
    <h5 class="margin bottom xsmall set-text-color to-white">{{ job.name }}</h5>
    <p class="set-text-color to-white margin bottom none"><em>{{ job.company }} {{ job.location }}</em></p>
    <p class="set-text-color to-white margin bottom xsmall"><small>{{ job.start_date | date }} - {{ job.end_date | date }}</small></p>
    <p>
      <span class="secondary label">{{ getJobCategory(job.category) }}</span>
    </p>
  </div>
  <div class="small-12 medium-8 large-9 column">
    <p>{{ job.description }}</p>
  </div>
</div>
</template>

<script>
  export default {
    name: 'job',
    props: ['job'],
    methods: {
      getJobCategory (a) {
        return this.$store.state.categories.skill[a]
      }
    }
  }
</script>

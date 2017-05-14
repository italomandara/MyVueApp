<template>
  <div :class="customclass">
    <p class="set-text-color to-gray margin bottom none"><small>{{ course.start_date|date }} - {{ course.end_date|date }}</small></p>
    <strong>{{ course.title }}</strong>
    <p class="margin none">{{ course.description }}</p>
    <p class="set-text-color to-gray"><small><em>{{ course.location }}</em></small></p>
    <p>
      <span class="secondary label">{{ getCourseCategory(course.category) }}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'course',
    props: ['course', 'customclass'],
    methods: {
      getCourseCategory (a) {
        return this.$store.state.categories.course[a]
      }
    }
  }
</script>

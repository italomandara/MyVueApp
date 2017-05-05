<template>
  <div :class="['js-filter filter size-filter category-' + getSkillCategory(skill.category) + 'subcategory-' + skill.subcategory]">
    <div class="widget secondary large">
      <h5><i :class="[skill.icon]"></i>{{ skill.name }}</h5>
      <p>{{ skill.description }}</p>
      <p class="margin bottom">
        <span class="secondary label">{{ getSkillCategory(skill.category) }}</span>
        <span class="secondary label">{{ skill.subcategory }}</span>
      </p>
      <p class="xsmall margin bottom">proficiency:</p>
      <div class="progress" role="progressbar" tabindex="0" >
        <div class="progress-meter" :style="{ width: skill.rating + '0%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skill',
    props: ['skill'],
    methods: {
      getSkillCategory (a) {
        return this.$store.state.categories.skill[a]
      }
    }
  }
</script>

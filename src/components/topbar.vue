<template>
    <div class="top-bar in-grid small-12" data-top-anchor="full-menu" data-margin-top="0">
      <div class="row">
        <!-- <div class="top-bar-title">{{ nav.title }}</div> -->
        <div class="top-bar-left"> 
            <menu-items :show-title="true" class="dropdown menu"></menu-items>
        </div>
      </div>
    </div>
</template>

<script>
import menuItems from './menu-items.vue'
export default {
  name: 'topbar',
  components: {
    menuItems
  },
  computed: {
    nav () {
      return this.$store.state.nav
    }
  },
  data () {
    this.$http
      .get([window.DJANGO_URL, '/api/person/', '?name=Italo&format=json'].join('')).then(
        (response) => {
          this.$store.state.nav.person = response.data[0]
          this.$store.state.nav.title = [this.$store.state.nav.person.name, ' ', this.$store.state.nav.person.lastname, "'s resume"].join('')
        })
    return {
      hostname: window.location.hostname
    }
  },
  mounted () {
    // eslint-disable-next-line
    new Foundation.Sticky($(this.$el))
  }
}
</script>

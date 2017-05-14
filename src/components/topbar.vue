<template>
    <div class="top-bar in-grid small-12" data-top-anchor="full-menu" data-margin-top="0">
      <div class="row">
        <!-- <div class="top-bar-title">{{ nav.title }}</div> -->
        <div class="top-bar-left"> 
<!--             <li id="00-eegg" style="position:relative" class="hide">
              <a href="#"><i class="icon i-cog"></i> @ {{ hostname }}</a>
              <ul class="menu vertical submenu">
                <li><a href="javascript: void(0)" data-open="icons" data-reveal-ajax="{% url 'icons' %}" >Show Icons</a></li>
                <li><a href="javascript: void(0)" onclick="$('body').showLoader(false);" >Open loader</a></li>
              </ul>
            </li> -->
            <menu-items></menu-items>
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
          this.$store.state.nav.title = [this.$store.state.nav.person.name, this.$store.state.nav.person.lastname, "'s resume"].join('')
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

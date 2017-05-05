<template>
  <div class="row">
    <h1>Hello</h1>
  </div>
</template>

<script>
	export default {
	  name: 'home',
	  data () {
	    this.$http
	      .get(['http://', window.location.hostname, ':8000', '/api/mycontent/', '?slug=intro&format=json'].join('')).then(
	        (response) => {
	          this.$store.state.nav.intro = response.data[0]
	        })
	    return {
	      intro: this.$store.state.nav.intro
	    }
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

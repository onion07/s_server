<template>
	<button class="tologin-btn">{{texts}}</button>
</template>


<script>
	export default {
	  name: 'butttonTologin',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  props:['texts']
	}
</script>

<style lang="scss">

</style>

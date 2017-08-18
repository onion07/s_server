<template>

	<div id="popRemind" class="pop-remind" v-show="this.$store.getters.getPopDialogShow">
   		<p class="pop-text">{{this.$store.getters.getPopDialog}}</p>
	</div>

</template>


<script>

	export default {
	  name: 'popWrapper',
	  data () {
	    return {
	    }
	  }
	}
</script>


<style lang="scss">
	// @import '../../assets/scss/pop.scss'; 
	@import './pop.scss'; 

</style>

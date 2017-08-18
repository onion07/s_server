<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img1" src="../../assets/img/phone_1.png" alt="azoya注册">
		</span>
		<i class="ph-prefix">+86</i>
		<input type="tel" v-model="mesgCode" sel-id="reg-text-cellphone" name="phone" maxlength="11" placeholder="请输入手机号" autocomplete="off"/>
	</section>

</template>


<script>
	// import Vue from 'vue';
	import {mapGetters, mapActions} from 'vuex';
	export default {
	  name: 'InputRegisterPhone',
	  data () {
	    return {
	    	
	    }
	  },
  	  computed: {
  	  	...mapGetters([
		  	  'getPassword'
	  	]),
	  	 mesgCode: {
		    get () {
		      return this.$store.state.newUser.phone
		    },
		    set (value) {
		      this.$store.commit('SET_PHONE_NUMBER', value)
		    }
		  }
	  }
	}
</script>


<style lang="scss">

</style>

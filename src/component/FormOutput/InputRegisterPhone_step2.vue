<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img1" src="../../assets/img/phone_1.png" alt="azoya注册">
		</span>
		<i class="ph-prefix">+86</i>
		<input type="tel" v-model="mesgCode_test" sel-id="reg-text-cellphone" name="phone" maxlength="11" placeholder="请输入手机号" autocomplete="off"/>
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
	  	 mesgCode_test: {
		    get () {
		      return this.$store.state.findPsw.step2.userName
		    },
		    set (value) {
		      this.$store.commit('SET_FIND_PSW_STEP2', value)
		    }
		  }
	  }
	}
</script>


<style lang="scss">

</style>

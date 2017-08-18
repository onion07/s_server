<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img5" src="../../assets/img/user1.png" alt="azoya注册">
		</span>
		<input type="text" v-model="peModel" name="phone" placeholder="邮箱/手机号" autocomplete="off"/>
	</section>

</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
	  name: 'InputPhoneEmail',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  computed: {
	  	peModel: {
	  		get () {
		      return this.$store.state.signIn.userName;
		    },
		    set (value) {
		      this.$store.commit('INPUT_PHONE_EMAIL', value)
		    }
	  	}
	  }

	}
</script>


<style lang="scss">
	@import '../../assets/scss/_mixins.scss';
	.icon-img{
        &5{
			width: pxTorem(40px);
			height: pxTorem(43px);
	    }
	}

</style>

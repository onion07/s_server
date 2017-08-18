<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img6" src="../../assets/img/email_1.png" alt="azoya注册">
		</span>
		<input type="tel" v-model="email" sel-id="reg-text-cellphone" name="phone" maxlength="11" placeholder="请填写常用邮箱" autocomplete="off"/>
	</section>

</template>


<script>
	// import Bus from '../Bus';
	import {mapGetters, mapActions} from 'vuex';

	export default {
	  name: 'InputRegisterPhone',
	  data () {
	    return {
	      newUser: {
	      	email: ''
	      }
	    }
	  },
	  computed: {
	  	 email: {
		    get () {
		      return this.$store.state.EmnewUser.email
		    },
		    set (value) {
		      this.$store.commit('SET_EMAIL', value)
		    }
		  }
	  }

	}
</script>


<style lang="scss">
	@import '../../assets/scss/_mixins.scss';

	.icon-img{
        &6{
			width: pxTorem(41px);
			height: pxTorem(33px);
	    }
	}
</style>

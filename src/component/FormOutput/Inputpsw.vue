<template>
	
		<section class="form-wrapper-cell">
			<span class="icon-box">
				<img class="icon-img icon-img4" src="../../assets/img/psw_lock_1.png" alt="azoya注册">
			</span>
			<input type="password" :value="getPassword" @input="updatePassword" sel-id="reg-text-password" name="password" maxlength="20" placeholder="密码（6-20位字母或数字组合）" autocomplete="off"/>
		</section>

</template>


<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
	  name: 'Inputpsw',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  props:['ids','placeholder'],
	  computed: {

	  	getPassword () {

	  		switch(this.ids)
			{
				// <注册> 密码输入框
				case 'registerPsw': 
	  			{
		      		return this.$store.state.newUser.password;
	  			}
				  break;
				// <注册-邮箱> 密码
				case 'registerEmPsw_1': 
	  			{
		      		return this.$store.state.EmnewUser.password;
	  			}
				  break;
				// <注册-邮箱> 确认密码
				case 'registerEmPsw_2': 
	  			{
		      		return this.$store.state.EmnewUser.passwordAgain;
	  			}
				  break;
				// <登录> 密码输入框
				case 'loginPsw': 
	  			{
			  		return this.$store.state.signIn.password;
	  			}
				  break;
				// <用户中心> 旧密码
				case 'uCenter_oldPsw': 
	  			{
			  		return this.$store.state.userCenter.changePsw.oldPsw;
	  			}
				  break;
				 // <重设密码 -1> 
				case 'resetPsw_1': 
	  			{
			  		return this.$store.state.findPsw.step3.password1;
	  			}
				  break;
				  // <重设密码 -2> 
				case 'resetPsw_2': 
	  			{
			  		return this.$store.state.findPsw.step3.password2;
	  			}
				  break;
				  // <用户中心> 新密码1
				case 'uCenter_newPsw1': 
	  			{
			  		return this.$store.state.userCenter.changePsw.newPsw_1;
	  			}
				  break;
				  // <用户中心> 新密码2
				case 'uCenter_newPsw2': 
	  			{
			  		return this.$store.state.userCenter.changePsw.newPsw_2;
	  			}
				  break;
			      default: console.info('无事件')
		    }
	  	}
	  /*	passwordModel: {
	  		get () {
		      return this.$store.state.newUser.password;
		    },
		    set (value) {
		      this.$store.commit('SET_PASSWORD', value)
		    }
	  	}*/
	  },
	  methods: {
	  	updatePassword (e) {
	  		/*if (this.ids === 'registerPsw') {
		  		this.$store.commit('SET_PASSWORD', e.target.value)
	  		}
	  		if (this.ids === 'loginPsw') {
		  		this.$store.commit('INPUT_PASSWORD', e.target.value)

	  		}*/
	  		switch(this.ids)
			{
				// <注册> 密码输入框
				case 'registerPsw': 
	  			{
			  		this.$store.commit('SET_PASSWORD', e.target.value)
	  			}
				  break;
			    // <注册-邮箱> 密码输入框
				case 'registerEmPsw_1': 
	  			{
			  		this.$store.commit('SET_EM_PASSWORD_1', e.target.value)
	  			}
				  break;
				// <注册-邮箱> 确认密码输入框
				case 'registerEmPsw_2': 
	  			{
			  		this.$store.commit('SET_EM_PASSWORD_2', e.target.value)
	  			}
				  break;
				 // <重设密码 -1> 
				case 'resetPsw_1': 
	  			{
			  		this.$store.commit('RETSET_PASSWORD_1', e.target.value)
	  			}
				  break;
				  // <重设密码 -2> 
				case 'resetPsw_2': 
	  			{
			  		this.$store.commit('RETSET_PASSWORD_2', e.target.value)
			  		
	  			}
				// <登录> 密码输入框
				case 'loginPsw': 
	  			{
			  		this.$store.commit('INPUT_PASSWORD', e.target.value)
	  			}
				  break;
			    default: console.info('无事件')
		    }

	  	}
	  }
	}
</script>


<style lang="scss">
	@import '../../assets/scss/_mixins.scss';


</style>

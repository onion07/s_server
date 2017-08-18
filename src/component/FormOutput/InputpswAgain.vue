<template>
	
		<section class="form-wrapper-cell">
			<span class="icon-box">
				<img class="icon-img icon-img4" src="../../assets/img/psw_lock_1.png" alt="azoya注册">
			</span>
			<input type="password" :value="getPassword" @input="updatePassword" sel-id="reg-text-confirm" name="password" maxlength="20" placeholder="输入确认密码" autocomplete="off"/>
		</section>

</template>


<script>
	export default {
	  name: 'Inputpsw',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  props:['ids'],
	  computed: {

	  	getPassword () {
	  		// 邮箱注册
	  		if (this.ids === 'registerEmPsw_2') {
			    return this.$store.state.EmnewUser.passwordAgain;
	  		}
	  		//找回密码 - 重设密码
	  		if (this.ids === 'resetPsw_2') {
			    return this.$store.state.EmnewUser.passwordAgain;
	  		}

	  	}
	  },
	  methods: {
	  	updatePassword (e) {
	  		// 邮箱注册
	  		if (this.ids === 'registerEmPsw_2') {
		  		this.$store.commit('SET_EM_PASSWORD_2', e.target.value)
	  		}
	  		//找回密码 - 重设密码
	  		if (this.ids === 'resetPsw_2') {
		  		this.$store.commit('RETSET_PASSWORD_2', e.target.value)
	  		}
	  	}
	  }
	}
</script>


<style lang="scss">

</style>

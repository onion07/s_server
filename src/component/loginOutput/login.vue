<template>
	<main  id="loginForm">
		<div class="main">
			<section class="form-wrapper">
				<input-users></input-users>
				<input-password ids="loginPsw"></input-password>
				<input-imgCode ids="loginImgCode"></input-imgCode>
			</section>
			<section id="lgBtn" class="form-deal-wrapper">
				<login-button texts="登录" events="tologin"></login-button>
			</section>
			<section class="deal-other">
				<a href="/customer/account/create" class="create-ba">注册BA账户</a>
				<a href="/o_customer/security/findpwdpage/" class="forget-a">忘记密码？</a>
			</section>
		</div>
		<pop-dialog></pop-dialog>
	</main>
</template>


<script>
	//弹窗
	import Pop from '../popOutput/pop.vue';
	//邮箱&手机号输入框
	import InputPhoneEmail from '../FormOutput/InputPhoneEmail.vue';
	//密码输入框
	import InputPassword from '../FormOutput/Inputpsw.vue';
	//图片验证码
	import InputImgCode from '../FormOutput/InputImgCode.vue';
	// 登录按钮
	import ButtonGreen from '../FormOutput/ButtonGreen.vue';


	export default {
	  name: 'login',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
			'login-button': ButtonGreen,
	  		'input-users': InputPhoneEmail,
			'input-password': InputPassword,
			'input-imgCode': InputImgCode,
			'pop-dialog': Pop
	  },
	  methods: {
	  	nnn () {
	  		console.info('clickkkkkkkkk')
	  	}
	  }
	}
</script>


<style lang="scss">

	@import '../FormOutput/form.scss';

</style>

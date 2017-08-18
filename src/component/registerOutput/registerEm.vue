<template>
	<main  id="regEmailForm">
		
		<div class="main">
			<p class="hint">
				<span class="gift">
					<img src="../../assets/img/bar_gift.png" alt="注册大礼包">
				</span>注册并绑定手机即送<em>20欧元</em>大礼包
			</p>
			<section class="form-wrapper">
				<form id="PwdByEmail">
					<input-registerEmail></input-registerEmail>
					<input-imgCode ids="registerEmImgCode"></input-imgCode>
					<input-password ids="registerEmPsw_1"></input-password>
					<input-pswAgain ids="registerEmPsw_2" pholder="placeholder"></input-pswAgain>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<p class="protocol">
					<i class="is-agreed" :class="{agreed: this.$store.getters.getButtonLock }" @click="checkIsAgree"></i>
					<span @click="checkIsAgree">已阅读并同意</span>
					<a class="protocol-a" href="javascript:void(0);">《网站服务条款》</a>
				</p>

				<register-button texts="立即注册" events="regEmail"></register-button>
				<a href="/customer/account/login" class="tologin-btn">已有账号，返回登录</a>
				<!-- <toLogin-button texts="已有账号，返回登录"></toLogin-button> -->

				<p class="hk-mk"><a href="/customer/account/create?type=1">使用手机注册 ></a></p>
			</section>
		</div>
		<pop-dialog></pop-dialog>
	</main>
</template>


<script>
	import Vue from 'vue';
	import Bus from '../Bus';
	//弹窗
	import Pop from '../popOutput/pop.vue';
	//邮箱注册输入框
	import InputRegisterEmail from '../FormOutput/InputRegisterEmail.vue';
	//密码输入框
	import InputPassword from '../FormOutput/Inputpsw.vue';
	//再次输入密码
	import InputpswAgain from '../FormOutput/InputpswAgain.vue';
	//图片验证码
	import InputImgCode from '../FormOutput/InputImgCode.vue';
	// 注册按钮
	import ButtonRegister from '../FormOutput/ButtonGreen.vue';
	// 去登录按钮
	// import ButtonWhite from '../FormOutput/ButtonWhite.vue';

	export default {
	  name: 'register',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      phoneNum: 'kkkkkkk'
	    }
	  },
	  components:{

			'input-registerEmail': InputRegisterEmail,
			'input-password': InputPassword,
			'input-imgCode': InputImgCode,
			'input-pswAgain': InputpswAgain,
			'register-button': ButtonRegister,
			// 'toLogin-button': ButtonWhite,
			'pop-dialog': Pop

	  },
	  methods: {
	  	checkIsAgree () {
		      this.$store.commit('CHANGE_AGREED')
	  	},
	  	setPhoneNum (dt) {
	  		console.info(dt)
	  		this.phoneNum = dt;
	  	}
	  },
	  created () {
	  	console.info('parent > created.....')
	  	const _ts = this;
	  	Bus.$on('u-number',_ts.setPhoneNum);
	  }
	}

</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
</style>

<template>
	<main  id="regForm">
		
		<div class="main">
			<p class="hint">
				<span class="gift">
					<img src="../../assets/img/bar_gift.png" alt="注册大礼包">
				</span>注册并绑定手机即送<em>20欧元</em>大礼包
			</p>
			<section class="form-wrapper">
				<form id="PwdByPhone">
					<input-registerPhone></input-registerPhone>
					<input-imgCode ids="registerImgCode"></input-imgCode>
					<input-mesgCode :pNum="phoneNum"></input-mesgCode>
					<input-password ids="registerPsw"></input-password>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<p class="protocol">
					<i class="is-agreed" :class="{agreed: this.$store.getters.getButtonLock }" @click="checkIsAgree"></i>
					<span @click="checkIsAgree">已阅读并同意</span>
					<a class="protocol-a" href="javascript:void(0);">《网站服务条款》</a>
				</p>

				<register-button texts="立即注册" events="regPhone"></register-button>
				<a href="/customer/account/login" class="tologin-btn">已有账号，返回登录</a>
				<!-- <toLogin-button texts="已有账号，返回登录"></toLogin-button> -->
				
				<p class="hk-mk"><a href="/customer/account/create?type=email">香港和澳门用户可选择使用邮箱注册 ></a></p>
			</section>
		</div>

		<pop-dialog></pop-dialog>
	</main>
</template>


<script>
	import Vue from 'vue';
	import {mapGetters, mapActions} from 'vuex';
	//弹窗
	import Pop from '../popOutput/pop.vue';
	//手机号注册输入框
	import InputRegisterPhone from '../FormOutput/InputRegisterPhone.vue';
	//密码输入框
	import InputPassword from '../FormOutput/Inputpsw.vue';
	//手机短信验证码
	import InputMesgCode from '../FormOutput/InputMesgCode.vue';
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
	      phoneNum: '333'
	    }
	  },
	  components:{

			'input-registerPhone': InputRegisterPhone,
			'input-password': InputPassword,
			'input-imgCode': InputImgCode,
			'input-mesgCode': InputMesgCode,
			'register-button': ButtonRegister,
			'pop-dialog': Pop

	  },
	  computed:{

	  	// ...mapGetters([
		  // 	  'getIsAgreed',
	  	// ]),
	  	// ...mapActions([
		  // 	  'actionIsAgreed',
	  	// ])
	  },
	  methods: {

	  	checkIsAgree () {
		      this.$store.commit('CHANGE_AGREED')
	  	},
	  	setPhoneNum (dt) {
	  		this.phoneNum = dt;
	  		console.info('parent > dt:',dt)

	  	}
	  },
	  created () {
	  		console.info('parent > created.....')
  			this.$store.state.button.lock = false;
	  		

	  }
	}

</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
</style>

<template>
	<main  id="bindPhone">
		
		<div class="main">
			<section class="point-box">
				<div>
					<img src="../../assets/img/u_happy.png" alt="">
				</div>
				<h3>您已经通过邮箱注册成功！</h3>
			</section>
			<section class="form-wrapper">
				<form id="PwdByPhone">
					<input-registerPhone></input-registerPhone>
					<input-imgCode></input-imgCode>
					<input-mesgCode></input-mesgCode>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<green-button texts="立即绑定"></green-button>
				<toLogin-button texts="跳过绑定"></toLogin-button>
			</section>
		</div>
	</main>
</template>


<script>
	import Vue from 'vue';
	// import Bus from '../Bus';

	//手机号注册输入框
	import InputRegisterPhone from '../FormOutput/InputRegisterPhone.vue';
	//手机短信验证码
	import InputMesgCode from '../FormOutput/InputMesgCode.vue';
	//图片验证码
	import InputImgCode from '../FormOutput/InputImgCode.vue';
	// 注册按钮
	import ButtonGreen from '../FormOutput/ButtonGreen.vue';
	// 去登录按钮
	import ButtonWhite from '../FormOutput/ButtonWhite.vue';

	export default {
	  name: 'bindPhone',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      btnText: 'kkkkkkk'
	    }
	  },
	  components:{

			'input-registerPhone': InputRegisterPhone,
			'input-imgCode': InputImgCode,
			'input-mesgCode': InputMesgCode,
			'green-button': ButtonGreen,
			'toLogin-button': ButtonWhite,

	  },
	  methods: {
	  	setPhoneNum (dt) {
	  		console.info(dt)
	  		this.phoneNum = dt;
	  	}
	  },
	  created () {
	  	console.info('parent > created.....')
	  	const _ts = this;
	  	// Bus.$on('btn-text',_ts.btnText);
	  }
	}

</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
	.point-box{
		div{
			text-align: center;
		}
		img{
			width: pxTorem(65px);
			height: pxTorem(68px);
		}
		h3{
			margin-top: pxTorem(10px);
			font-size: pxTorem(30px);
			text-align: center;
			color: #6fb33e;
		}
	}
</style>

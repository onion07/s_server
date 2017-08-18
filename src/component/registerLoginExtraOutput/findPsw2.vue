<template>
	<main  id="findpswForm_2">
		
		<div class="main">
			<section class="point-box">
				<div>
					<span class="gray-tips">已绑定手机</span>
				</div>
				<h3>{{targetUser}}</h3>
			</section>
			<section class="form-wrapper">
				<form id="findpswStep2_ph">
					<input-imgCode ids="findpswStep2ImgCode"></input-imgCode>
					<input-mesgCode></input-mesgCode>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<green-button events="phone_step2_next" texts="下一步"></green-button>
				<!-- <toLogin-button texts="使用邮箱找回"></toLogin-button> -->
				<a href="/" class="tologin-btn">使用邮箱找回</a>

			</section>
			<section class="bottom-section">
				<h4 class="b-tips">手机收不到验证码怎么办？</h4>
				<ul class="list-tips">
					<li>可能由于网络异常导致，请重新获取或稍后再试</li>
					<li>请核实手机是否屏蔽系统短信，若已停用或丢失，请使用其他验证方式</li>
					<li>每个账号一天最多可以发送5条验证短信</li>
				</ul>
			</section>
		</div>

		<pop-dialog></pop-dialog>

	</main>
</template>


<script>
	import Vue from 'vue';

	//弹窗
	import Pop from '../popOutput/pop.vue';
	//手机号注册输入框
	// import InputRegisterPhone from '../FormOutput/InputRegisterPhone_step2.vue';
	//手机短信验证码
	import InputMesgCode from '../FormOutput/InputMesgCode_step2.vue';
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
	      targetUser: 'xxx'
	    }
	  },
	  components:{

			// 'input-registerPhone': InputRegisterPhone,
			'input-imgCode': InputImgCode,
			'input-mesgCode': InputMesgCode,
			'green-button': ButtonGreen,
			'toLogin-button': ButtonWhite,
			'pop-dialog': Pop

	  },
	  methods: {
	  	setPhoneNum (dt) {
	  		console.info(dt)
	  		this.phoneNum = dt;
	  	}
	  },
	  created () {
	  	console.info('parent > created.....')

	  	if( !!localStorage.getItem('userNameStg') ) {
		  	const target = localStorage.getItem('userNameStg');
	  		this.targetUser = target.replace(/\w{3}/,'****'); //简单设置
		}
	  }
	}

</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
	.point-box{
		div{
			text-align: center;
		}
		.gray-tips{
			color: #999;
			font-size: pxTorem(30px);

		}
		h3{
			margin-top: pxTorem(10px);
			font-size: pxTorem(30px);
			text-align: center;
			color: #333;
		}
	}
	.bottom-section{
		padding-top: pxTorem(130px);
	}
	.b-tips{
		line-height: pxTorem(68px);
		font-size: pxTorem(28px);
		color: #333;
	}
	.list-tips{
		padding-left: pxTorem(30px);
		li{
			list-style-type: disc !important;
			font-size: pxTorem(24px);
			line-height: pxTorem(46px);
			color: #999;
		}
	}
</style>

<template>
	<button @click="test" class="green-btn register-btn" :class="{'disable-gray': !this.$store.getters.getButtonLock}" sel-id="reg-btn-submit">{{texts}}</button>
</template>


<script>

	import {mapGetters, mapActions} from 'vuex';
	import Req from '../../api/request';
	import Config from '../../api/config';
	import PopDialog from '../popOutput/popup'; //弹窗action

	export default {
	  name: 'butttonResister',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      text: '5'
	    }
	  },
	  props:['texts','events'],
	  computed: {

	  	...mapGetters([
		  	  'getMesgCode',
		  	  'getPassword',
		  	  'getInputPhone',
		  	  'getInputImgCode'

	  	])
	  },
	  created (){
	  	// console.info('popxxxxxx',PopDialog)
	  },
	  methods:{
	  	...PopDialog,
	  	test () {
	  		console.info('第一步：绿色按钮》》》');

	  		switch(this.events)
			{
			    /**************  <登录> 按钮 ***************/
				case 'tologin': 
	  			{
		/*			if ( !this.$store.getters.getButtonLock ){
			  				return;
		  			}*/
		  			/*console.info('第二步：这是登录按钮。。',this.$store.getters.getPhoneEmail)
		  			console.info(this.$store.state.signIn.password)
		  			console.info(this.$store.state.signIn.imgcode)*/

					const _ts = this;
					// 获取账号
					const userName = this.$store.getters.getPhoneEmail;
					// 获取图形验证码
					const imgCode = this.$store.getters.getInputLoginImgCode;
					// 获取密码
					const thePassword = this.$store.getters.getLoginPassword;

					const filterBack1 = Config.phoneEmail(userName);
					const filterBack2 = Config.imgCode(imgCode);

					// 验证账号 (非请求)
					if ( !filterBack1.isValid ) {
						// console.info(filterBack1.invalidMsg);
						this.popAction(filterBack1.invalidMsg);
						return;
					}
					// 密码-校验
					if ( !Config.setPassword(thePassword).isValid ) {
						// console.info( Config.setPassword(thePassword).invalidMsg );
						this.popAction( Config.setPassword(thePassword).invalidMsg );

						return;
					}
					// 验证图形验证码-格式 (非请求)
					if ( !imgCode ) { //为空
						// console.info(filterBack2.invalidMsg)
						this.popAction( filterBack2.invalidMsg );
						return;
					}
					// 提交登录
		  			Req.respLogin({
							username: userName,
							password: thePassword
						},function (data) {

				          	if ( data.code !=='undefined' && data.ret === 1 ) {

					          	console.info('登录成功 ',data);
					          	setTimeout( () => {
						          	window.location.href = data.url;
					          	},1500);
				          	}
				          	else {
					          	console.info('登录失败 ',data)
				          	}
			        });

	  			}
				  break;
			    /************** <立即注册> 按钮 ***************/
				case 'regPhone':
		  		{
			  		if ( !this.$store.getters.getButtonLock ){
		  				return;
		  			}
		  			// 短信验证码-校验
				    const theMesgCode = this.$store.getters.getMesgCode;
		  			if ( !theMesgCode || !Config.mesgCode(theMesgCode).isValid ){
					     // console.info( Config.mesgCode(theMesgCode).invalidMsg );
					     this.popAction( Config.mesgCode(theMesgCode).invalidMsg );
					     return;
		  			}
		  			// 新密码-校验
		  			const thePassword = this.$store.getters.getPassword;
		  			if ( !Config.setPassword(thePassword).isValid ) {
					    // console.info( Config.setPassword(thePassword).invalidMsg );
					    this.popAction( Config.setPassword(thePassword).invalidMsg );
					    return;
		  			}
		  			// 提交注册
		  			Req.respRegister({
							userphone: this.$store.getters.getInputPhone,
							imgCode: this.$store.getters.getInputImgCode,
							password: thePassword,
							code: theMesgCode
						},function (data) {

				          	if ( data.code !=='undefined' && data.ret === 1 ) {

					          	console.info('注册成功 ',data)
					          	setTimeout( () => {
						          	window.location.href = window.location.host;
					          	},1500);
				          	}
				          	else {
					          	console.info('注册失败 ',data)

				          	}

			        });
		  		}	
				  break;
			    /************** <邮箱注册>按钮***************/
				case 'regEmail': 
				{
					console.info('regEmail......')
					console.info(this.$store.getters.getInputMail)
					console.info(this.$store.getters.getInputEmImgCode)
					console.info(this.$store.getters.getEmPassword_1)
					console.info(this.$store.getters.getEmPassword_2)

					const _ts = this;
					  // 获取要注册的邮箱
					const email = this.$store.getters.getInputMail;
					// 获取图形验证码
					const imgCode = this.$store.getters.getInputEmImgCode;

					// 邮箱图&形验证码-验证返回
					const filterBack1 = Config.email(email);
					const filterBack2 = Config.imgCode(imgCode);

					if ( !this.$store.getters.getButtonLock ){
		  				return;
		  			}
					// 邮箱-格式 (非请求)
					if ( !filterBack1.isValid ) {
						// console.info(PopDialog);
						this.popAction( filterBack1.invalidMsg );
						return;
					}
					// 验证图形验证码-格式 (非请求)
					if ( !imgCode ) { //为空
						console.info(filterBack2.invalidMsg)
						this.popAction( filterBack2.invalidMsg );
						return;
					}

					/***图像验证码-检验***/
					Req.respValidImgCode(imgCode,function (data) {
					  if (data.ret != 1) {
					      console.info('-------- ',data.msg)
					      _ts.popAction( data.msg );
					     _ts.$store.commit('SET_PASSWORD_LOCK',true); //禁止检测密码-锁

					  }
					  else {
					     _ts.$store.commit('SET_PASSWORD_LOCK',false); //禁止检测密码-锁
					  }
					});
					
					if( this.$store.getters.getEmPswLock ) { // true 图像验证码 不通过，不执行密码验证
					 	return;
					}
		  			// 新密码1-校验
		  			const emPassword_1 = this.$store.getters.getEmPassword_1;
		  			const emPassword_2 = this.$store.getters.getEmPassword_2;

		  			if ( !Config.c_newPassword_1(emPassword_1).isValid ) {
					    // console.info( Config.setPassword(thePassword).invalidMsg );
					    this.popAction( Config.c_newPassword_1(emPassword_1).invalidMsg );
					    return;
		  			}
		  			if ( this.$store.getters.getEmPassword_1 !== this.$store.getters.getEmPassword_2 ) {
		  				this.popAction('两次密码输入不一致');
					    return;
		  			}
		  			// 提交注册
		  			Req.respEmRegister({
							email: this.$store.getters.getInputMail,
							password: this.$store.getters.getEmPassword_1
						},function (data) {

				          	if ( data.code !=='undefined' && data.ret === 1 ) {

					          	console.info('注册成功 ',data)
					          	setTimeout( () => {
						          	window.location.href = window.location.host;
					          	},1500);
				          	}
				          	else {
					          	console.info('注册失败 ',data)

				          	}

			        });

				}
			      break;
			      /************** <修改密码>按钮***************/
				case 'changePsw': 
				{
					console.info('xxxxxx',this.$store.state.userCenter.changePsw.oldPsw)
					console.info('xxxxxx',this.$store.state.userCenter.changePsw.newPsw_1)
					console.info('xxxxxx',this.$store.state.userCenter.changePsw.newPsw_2)

					const _ts = this;
					// 获取旧密码
					const oldPassword = this.$store.getters.getOldPassword;
					// 获取新密码1
					const newPassword_1 = this.$store.getters.getNewPassword_1;
					// 获取密码2
					const newPassword_2 = this.$store.getters.getNewPassword_2;

					const filterBack1 = Config.c_oldPassword(oldPassword);
					const filterBack2 = Config.c_newPassword_1(newPassword_1);
					const filterBack3 = Config.c_newPassword_1(newPassword_2);

					// 旧密码 (非请求)
					if ( !filterBack1.isValid ) {
						console.info(filterBack1.invalidMsg)
						this.popAction(filterBack1.invalidMsg);
						return;
					}
					if ( !filterBack2.isValid ) {
						this.popAction(filterBack2.invalidMsg);
						return;
					}
					if ( newPassword_1 !== newPassword_2) {
						this.popAction("两次密码输入不一致");
						return;
					}
					
					// 提交(修改密码)
					Req.respChangePassword({
							oldPsw: this.$store.getters.getOldPassword,
							newPsw_1: this.$store.getters.getNewPassword_1,
							newPsw_2: this.$store.getters.getNewPassword_2
						},function (data) {
							
							console.info('data: ',data)

				          	if ( data.code !=='undefined' && data.ret === 1 ) {

								this.popAction( data.msg ); // data.msg = 修改密码成功
					          	setTimeout( () => {
						          	window.location.href = window.location.host;
					          	},1500);
				          	}
				          	else {
				          		_ts.popAction( data.msg );
					          	console.info('修改失败 ')
				          	}
			        });
				}
			      break;
			     /************** <找回密码>按钮***************/
			    case 'next' :
			    {
			    	console.info(this.$store.state.findPsw.userName)
			    	// 找回密码第一步
			    	if( !Config.phoneEmail( this.$store.state.findPsw.userName ).isValid ) {
					    this.popAction( Config.phoneEmail( this.$store.state.findPsw.userName ).invalidMsg );
					    return;
					}

		          	localStorage.setItem('userNameStg',this.$store.state.findPsw.userName);
		          	window.location.href = '/o_customer/security/choosepwdauthpage/';


			    }
			    break;
			    case 'phone_step2_next' :
			    {
			    	console.info('phone_step2_next')
			    	console.info(this.$store.getters.getFindpswStep2ImgCode)
			    	console.info(this.$store.getters.getFindpswStep2MesgCode)
					  	console.info('userPhone',_ts.$store.getters.getFindpswTargetUserName)
			    	/*if( !!localStorage.getItem('userNameStg') ) {
					  	const userPhone = localStorage.getItem('userNameStg');
					}*/
			    	const _ts = this;
			    	// 手机找回密码 第二步
			    	if( !Config.mesgCode( this.$store.state.findPsw.step2.mesgcode ).isValid ) {
					    this.popAction( Config.mesgCode( this.$store.state.findPsw.step2.mesgcode ).invalidMsg );
					    return;
					}
						// 下一步 按钮

					Req.respPhoneMesgCodefindpswStep2({
								userphone: _ts.$store.getters.getFindpswTargetUserName,
								imgCode: _ts.$store.getters.getFindpswStep2ImgCode,
								formId: 'findpswStep2_ph'
							},function (data) {
							
							console.info('data: ',data)

				          	if ( data.code !=='undefined' && data.ret === 1 && data.token ) {

								// this.popAction( data.msg ); // data.msg = 修改密码成功
								const resetUrl = '/o_customer/security/resetpwdpage/?type='+data.token.type+'&code='+data.token.code;
								console.info('resetUrl=> ',resetUrl)

					          	setTimeout( () => {
						          	window.location.href = resetUrl;
					          	},500);
				          	}
				          	else {
				          		_ts.popAction( data.msg );
					          	console.info('失败 ')
				          	}
			        });



			    }
			    break;
			    // 重置密码 - 找回密码 
			    case 'reset_psw' :
			    {
			    	console.info('reset_psw_0000')
			    	console.info(this.$store.getters.getFindpswStep3password1)
			    	console.info(this.$store.getters.getFindpswStep3password2)

			    	const _ts = this;
			    	// 新密码-校验
		  			const resetPassword_1 = _ts.$store.getters.getFindpswStep3password1;
		  			const resetPassword_2 = _ts.$store.getters.getFindpswStep3password2;

		  			if ( !Config.c_newPassword_1(resetPassword_1).isValid ) {
					    _ts.popAction( Config.c_newPassword_1(resetPassword_1).invalidMsg );
					    return;
		  			}
		  			if ( _ts.$store.getters.getFindpswStep3password1 !== _ts.$store.getters.getFindpswStep3password2 ) {
		  				_ts.popAction('两次密码输入不一致');
					    return;
		  			}
		  			const _type = _ts.$store.getters.getFindpswStep3takentype;
		  			const _code = _ts.$store.getters.getFindpswStep3takencode;

		  			console.info('greenbtn:_type',_type )
		  			console.info('greenbtn:_code',_code )
		  			// 提交
		  			Req.respResetPassword({
							type: _type,
							token: _code,
							password: resetPassword_1,
							confirmation: resetPassword_2
						},function (data) {

				          	if ( data.code !=='undefined' && data.ret === 1 ) {

					          	console.info('成功 ',data.msg)
					          	setTimeout( () => {
						          	window.location.href = window.location.host;
					          	},1500);
				          	}
				          	else {
					          	console.info('失败 ',data)
				  				this.popAction(data.msg);
				          	}

			        });

			    }
			    break;
				default:
					console.info('无事件')
				  
			}
	  		
	  	}
	  }
	}
</script>


<style lang="scss">
	@import '../../assets/scss/_mixins.scss';
	.buttonCommon{
		border: none;
		text-align: center;
		color: #fff;
		outline: none;
	}
	.green-btn{
		margin-top: pxTorem(40px);
		width: 100%;
		height: pxTorem(80px);
		@extend .buttonCommon;
		font-size: pxTorem(30px);
		background: #6fb33e;
		&.disable-gray{
		    background: #bdbdbd;
		}
	}
</style>

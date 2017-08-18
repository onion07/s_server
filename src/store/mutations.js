// import getters from './getters'

export default {
	// 弹窗(改变文本)
	CHANGE_DIALOG_TEXT: (state,value) => {
		state.popDialog.text = value;
		state.popDialog.isShow = !state.popDialog.isShow;
	},
	// 弹窗（显示隐藏）
	SHOW_HIDE_DIALOG_TEXT: (state) => {
		state.popDialog.isShow = !state.popDialog.isShow;
	},
	GET_PHONE_CODE: (state) => {
		console.log('mutations_GET_PHONE_CODE _______',state.newUser.phone)
	},
	/************** 以下是手机注册&邮箱注册 ****************/
	// 邮箱输入框 (注册-邮箱)
	SET_EMAIL: (state,value) => {
		state.EmnewUser.email = value;		
	},
	// 禁止检测密码-锁 (注册-邮箱)
	SET_PASSWORD_LOCK: (state,value) => {
		state.EmnewUser.pswlock = value;		
	},
	// 输入手机号框（注册）
	SET_PHONE_NUMBER: (state,value) => {
		state.newUser.phone = value;		
	},
	// 输入图形验证码(注册)
	SET_IMG_CODE_1: (state,value) => {
		state.newUser.imgcode = value;
	},
	// 输入图形验证码(注册-邮箱)
	SET_IMG_CODE_3: (state,value) => {
		state.EmnewUser.imgcode = value;
	},
	// 是否同意网站条款
	CHANGE_AGREED: (state,value) => {
		state.button.lock = !state.button.lock;

	},
	// 短信验证码
	SET_MESG_CODE: (state,value) => {
		state.newUser.mesgcode = value;
	},
	// 设置新密码
	SET_PASSWORD: (state,value) => {

		state.newUser.password = value;

		//同意《网站服务条款》： <立即注册> 可点击
		if ( !state.newUser.password ) {
			state.newUser.isagreed = false;
		}
		else if ( state.newUser.password ) {
			state.newUser.isagreed = true;
		}
	},
	// 设置新密码1 (邮箱)
	SET_EM_PASSWORD_1: (state,value) => {
		state.EmnewUser.password = value;
	},
	// 设置新密码2 (邮箱)
	SET_EM_PASSWORD_2: (state,value) => {
		state.EmnewUser.passwordAgain = value;
	},
	/************** 以下是登录 ****************/
	// 账号
	INPUT_PHONE_EMAIL: (state,value) => {
		state.signIn.userName = value;

	},
	// 密码
	INPUT_PASSWORD: (state,value) => {
		state.signIn.password = value;

	},
	// 输入图形验证码(登录)
	SET_IMG_CODE_2: (state,value) => {
		state.signIn.imgcode = value;

		if ( !state.signIn.imgcode ) {
			state.button.lock = false;
		}
		else if ( state.signIn.imgcode ) {
			state.button.lock = true;
		}
	},
	/************** 以下找回密码 ****************/
	'INPUT_FINDPSW_PHONE_EMAIL': (state,value) => {
		state.findPsw.userName = value;
	},
	'SET_FIND_PSW_STEP2': (state,value) => {
		state.findPsw.step2.userName = value;
	},
	'SET_FINDPSW_IMG_CODE': (state,value) => {
		state.findPsw.step2.imgcode = value;
	},
	'SET_FINDPSW_MESG_CODE': (state,value) => {
		state.findPsw.step2.mesgcode = value;
	},
	'RETSET_PASSWORD_1': (state,value) => {
		state.findPsw.step3.password1 = value;
	},
	'RETSET_PASSWORD_2': (state,value) => {
		state.findPsw.step3.password2 = value;
	},
	'SET_TAKEN_TYPE': (state,value) => {
		state.findPsw.step3.takenType = value;
	},
	'SET_TAKEN_CODE': (state,value) => {
		state.findPsw.step3.takenCode = value;
	},
	/************** 以下是用户中心 ****************/
	// 修改密码(旧密码)
	INPUT_OLD_PSW: (state,value) => {
		state.userCenter.changePsw.oldPsw = value;
	},
	// 修改密码(旧密码)
	INPUT_NEW_PSW_1: (state,value) => {
		state.userCenter.changePsw.newPsw_1 = value;
	},
	// 修改密码(旧密码)
	INPUT_NEW_PSW_2: (state,value) => {
		state.userCenter.changePsw.newPsw_2 = value;
	}
}
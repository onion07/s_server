export default {
	// 弹窗
	getPopDialog (state) {
		return state.popDialog.text;
	},
	getPopDialogShow (state) {
		return state.popDialog.isShow;
	},
	/**************  注册 *************/
	// 邮箱
	getInputMail (state) {
		return state.EmnewUser.email;
	},
	// 手机号
	getInputPhone (state) {
		return state.newUser.phone;
	},
	// 图形验证码（注册）
	getInputImgCode (state) {
		return state.newUser.imgcode;
	},
	// 图形验证码（注册-邮箱）
	getInputEmImgCode (state) {
		return state.EmnewUser.imgcode;
	},
	// 禁止密码检测-锁（注册-邮箱）
	getEmPswLock (state) {
		return state.EmnewUser.pswlock;
	},
	// 是否同意网站服务条款
	getIsAgreed (state) {
		return state.newUser.isagreed;
	},
	// 短信验证码
	getMesgCode (state) {
		return state.newUser.mesgcode;
	},
	// 新密码
	getPassword (state) {
		return state.newUser.password;
	},
	// 新密码1 (邮箱)
	getEmPassword_1 (state) {
		return state.EmnewUser.password;
	},
	// 新密码2 (邮箱)
	getEmPassword_2 (state) {
		return state.EmnewUser.passwordAgain;
	},
	// 登录&注册-按钮锁
	getButtonLock (state) {
		return state.button.lock;
	},
	/**************  找回密码 *************/
	getFindpswTargetUserName (state) {
		return state.findPsw.userName;
	},
	getFindpswStep2ImgCode (state) {
		return state.findPsw.step2.imgcode;
	},
	getFindpswStep2MesgCode (state) {
		return state.findPsw.step2.mesgcode;
	},
	getFindpswStep3password1 (state) {
		return state.findPsw.step3.password1;
	},
	getFindpswStep3password2 (state) {
		return state.findPsw.step3.password2;
	},
	getFindpswStep3takentype (state) {
		return state.findPsw.step3.takenType;
	},
	getFindpswStep3takencode (state) {
		return state.findPsw.step3.takenCode;
	},
	/**************  登录 *************/
	// 手机号/邮箱
	getPhoneEmail (state) {
		return state.signIn.userName;
	},
	// 图形验证码（登录）
	getInputLoginImgCode (state) {
		return state.signIn.imgcode;
	},
	// 密码（登录）
	getLoginPassword (state) {
		return state.signIn.password;
	},
	/**************  用户中心 *************/
	// (旧密码)
	getOldPassword (state) {
		return state.userCenter.changePsw.oldPsw;
	},
	// (新密码1)
	getNewPassword_1 (state) {
		return state.userCenter.changePsw.newPsw_1;
	},
	// (新密码2)
	getNewPassword_2 (state) {
		return state.userCenter.changePsw.newPsw_2;
	}
}
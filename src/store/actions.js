
export default {
	// 获取验证码-按钮
	'checkPhoneNum_code': ({commit,state}) => {
		commit('GET_PHONE_CODE',state)
	},
	'actionIsAgreed': ({commit,state}) => {
		commit('CHANGE_AGREED',state)
	},
}
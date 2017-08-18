import axios from 'axios';
import Qs from 'qs';


const HEADERS = { 
	  headers: {'X-Requested-With': 'XMLHttpRequest'}
};
const TRANS_F_REQ = {
	transformRequest: [function (data) {
			data = Qs.stringify(data); //必须
	    return data;
	}]
};

export  default {
	/*获取图形验证码*/
	respImgCode (deal) {
		axios(Object.assign({
			url: '/o_customer/security/getCaptcha',
			method: 'post',
			data: {
				formId: 'PwdByPhone'
			}
		},HEADERS,TRANS_F_REQ))
  		.then(function (resp){
  			if (resp.data!== 'undefined' && resp.data.ret === 1) {
  				deal(resp.data);
  			}

  		})
  		.catch(function (error) {
	    	console.log('网络出错啦！');
	  	});
	},
	/*校验图形验证码*/
	respValidImgCode (reqdata,deal) {
		axios(Object.assign({
			url: '/o_customer/security/verifyCaptcha',
			method: 'post',
			data: {
				captcha: reqdata,
				formId: 'PwdByPhone'
			}
		},HEADERS,TRANS_F_REQ))
  		.then(function (resp){
  			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}

  		})
  		.catch(function (error) {
	    	console.log('网络出错啦！');
	  	});
	},
	/*检测手机号是否可注册*/
	respPhoneNumber (userphone,deal) {
  		axios(Object.assign({
			url: '/o_customer/security/usernameCheck',
			method: 'post',
			data: {
				type: '1',//检测是否可注册了
  				username: userphone
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*获取短信验证码*/
	respPhoneMesgCode (imgCode,userphone,deal) {
  		axios(Object.assign({
			url: '/o_customer/security/sendSMS',
			method: 'post',
			data: {
				cellphone: userphone,
				captcha: imgCode,
				formId: 'PwdByPhone'
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*找回密码第二步-校验*/
	respCheckPhoneMesgCode (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/security/auth',
			method: 'post',
			data: {
				type: regObj.type,
				codde: regObj.code,
				captcha: regObj.imgCode,
				formId: regObj.formId
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*获取短信验证码 - 找回密码第二步*/
	respPhoneMesgCodefindpswStep2 (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/security/sendCode',
			method: 'post',
			data: {
				cellphone: regObj.userphone,
				captcha: regObj.imgCode,
				formId: regObj.formId
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*注册（手机）*/
	respRegister (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/account/createPhonePost',
			method: 'post',
			data: {
				formId: 'PwdByPhone',
				cellphone: regObj.userphone,
				password: regObj.password,
				pwdConfirm: regObj.password,
				captcha: regObj.imgCode,
				code: regObj.code
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*注册（邮箱）*/
	respEmRegister (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/account/createAjaxPost',
			method: 'post',
			data: {
				email: regObj.email,
				password: regObj.password
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*登录*/
	respLogin (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/account/loginNew',
			method: 'post',
			data: {
				username: regObj.username,
				password: regObj.password
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*修改密码 - 用户中心*/
	respChangePassword (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/security/updatePwd',
			method: 'post',
			data: {
				current_password: regObj.oldPsw,
				password: regObj.newPsw_1,
				confirmation: regObj.newPsw_2
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},
	/*重置密码 - 找回密码*/
	respResetPassword (regObj,deal) {
  		axios(Object.assign({
			url: '/o_customer/security/pwdReset',
			method: 'post',
			data: {
				type: regObj.type,
				token: regObj.token,
				password: regObj.password,
				confirmation: regObj.confirmation
			},
		},HEADERS,TRANS_F_REQ))
		.then(function (resp){
			if (resp.data!== 'undefined') {
  				deal(resp.data);
  			}
		})
		.catch(function (error) {
    		console.log('网络出错啦！');
	  	});
	},

	
	
}
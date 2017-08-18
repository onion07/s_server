export default {
	/*手机号注册*/
    phone (text) {
        return {
            isValid: /^1[3|4|5|7|8]\d{9}$/.test(text),
            invalidMsg: text.trim() == "" ? "请输入手机号" : "手机格式错误，请重新输入"
        }
    },
    email (text) {
        return {
            isValid: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(text),
            invalidMsg: text.trim() == "" ? "请输入邮箱" : "邮箱格式错误，请重新输入"
        }
    },
    /*手机号/邮箱 - 登录*/
    phoneEmail (text) {
        return {
            isValid: /^1[3|4|5|7|8]\d{9}$/.test(text) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(text),
            invalidMsg: text.trim() == "" ? "请输入账号" : "账号不存在"
        }
    },
    /*图形验证码*/
    imgCode (text,Status) {
        return {
            isValid: /^\d{4}$/.test(text) && Status,
            invalidMsg: text.trim() == "" ? "请填写图形验证码" : "图形验证码错误"
        }
    },
    /*短信验证码*/
    mesgCode (text) {
    	return {
            isValid: /^\d{6}$/.test(text),
            invalidMsg: text.trim() == "" ? "请填写短信验证码" : "短信验证码为6位"
        }
    },
    /*设置密码*/
    setPassword (text) {
        return {
            isValid: /^[a-zA-z0-9]\w{5,19}$/.test(text),
            invalidMsg: text.trim() == "" ? "请填写密码" : "密码6-20位字母或数字组合"
        }
    },
    /*旧密码 - 修改密码*/
    c_oldPassword (text) {
        return {
            isValid: /^[a-zA-z0-9]\w{5,19}$/.test(text),
            invalidMsg: text.trim() == "" ? "请填写旧密码" : "旧密码不正确"
        }
    },
     /*新密码1 - 修改密码*/
    c_newPassword_1 (text) {
        return {
            isValid: /^[a-zA-z0-9]\w{5,19}$/.test(text),
            invalidMsg: text.trim() == "" ? "请填写新密码" : "6-16个数字、字母或符号区分大小写"
        }
    },
     /*新密码2 - 修改密码*/
    c_newPassword_2 (text) {
        return {
            isValid: /^[a-zA-z0-9]\w{5,19}$/.test(text),
            // invalidMsg: text.trim() == "" ? "" : ""
        }
    }

}
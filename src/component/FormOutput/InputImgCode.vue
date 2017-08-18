<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img2" src="../../assets/img/yzm_1.png" alt="azoya注册">
		</span>
		<input type="text" :value="getImgCodeValue" @input="updateImgCode" sel-id="reg-text-captcha" name="" maxlength="4" placeholder="请输入验证码" autocomplete="off"/>
		<img class="yzm-img" @click="getImgCode" :src="imgUrl"  alt="验证码">
	</section>

</template>


<script>
	import axios from 'axios';
	import Qs from 'qs';
	import Req from '../../api/request';
	// import test from '../../assets/img/test.png'; //解决webpack打包绝对路径问题

	export default {
	  name: 'imgCode0',
	  data () {
	    return {
	      lock: false, // 防止连续点击请求
	      imgUrl: ''
	    }
	  },
	  props:['ids'],
	  created () {
	  	this.getImgCode();
	  },
	  computed: {

	  	getImgCodeValue () {

	  		switch(this.ids)
			{
				// <注册> 输入框
				case 'registerImgCode': 
	  			{
		      		return this.$store.state.newUser.imgcode;
	  			}
				  break;
				  // <注册-邮箱> 输入框
				case 'registerEmImgCode': 
	  			{
		      		return this.$store.state.EmnewUser.imgcode;
	  			}
				  break;
				// <登录> 输入框
				case 'loginImgCode': 
	  			{
			  		return this.$store.state.signIn.imgcode;
	  			}
				  break;
				// <找回密码> step2 输入框
				case 'findpswStep2ImgCode': 
	  			{
			  		return this.$store.state.findPsw.step2.imgcode;
	  			}
				  break;
			      default: console.info('无事件')
		    }
	  	}
	  },
	  methods: {
	  	updateImgCode (e) {
	  		switch(this.ids)
			{
				// <注册> 图形验证码
				case 'registerImgCode': 
	  			{
			  		this.$store.commit('SET_IMG_CODE_1', e.target.value)

	  			}
				  break;
				 // <注册-邮箱> 图形验证码
				case 'registerEmImgCode': 
	  			{
			  		this.$store.commit('SET_IMG_CODE_3', e.target.value)

	  			}
				  break;
				// <登录> 图形验证码
				case 'loginImgCode': 
	  			{
			  		this.$store.commit('SET_IMG_CODE_2', e.target.value)

	  			}
				  break;
				 // <找回密码> step2 输入框
				case 'findpswStep2ImgCode': 
	  			{
			  		this.$store.commit('SET_FINDPSW_IMG_CODE', e.target.value)
	  			}
				  break;
			      default: console.info('无事件')
		    }

	  	},
	  	getImgCode () {
	  		const vm = this;
	  		if (vm.lock) { return; }
	  		vm.lock = true;
	  		Req.respImgCode(function (data) {
	  			vm.imgUrl = data.img;
		  		vm.lock = false;
	  		});

	  	}
	  }
	}
</script>


<style lang="scss">

</style>

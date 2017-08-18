<template>
		<button class="green-btn login-btn" @click="test" sel-id="login-btn-submit">登录</button>
</template>


<script>
	export default {
	  name: 'buttonlogin',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  methods:{
	  	test () {
	  		console.info('按下登录按钮。。。。。');
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
		width: 100%;
		height: pxTorem(80px);
		@extend .buttonCommon;
		font-size: pxTorem(30px);
		background: #6fb33e;
	}
</style>

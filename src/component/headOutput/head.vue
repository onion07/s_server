<template>
	   <div id="header">
			<div class="header-button-left">
				<a href="javascript:history.go(-1);">返回</a>
			</div>
			<h1>{{titles}}</h1>
			<div class="header-button-right"></div>
		</div>
</template>

<script>

	export default {
	  name: 'head',
	  data () {
	    return {
	      title: '注册'
	    }
	  },
	  props:['titles']

	}
</script>

<style lang="scss">
	@import '../../assets/scss/_mixins.scss';
	$baseUrl:'../../assets';

	#header{
		display: flex;
		height: pxTorem(88px);
		line-height: pxTorem(88px);
		align-items:center;
		background: #0b94d9;
	}
	.header-button{
		&-left{
			flex: .2;
			a{
				position: relative;
				display: block;
				height: 100%;
				text-indent: -999px;
				&:before{
					content: '';
					position: absolute;
					left:pxTorem(40px);
					top: 50%;
				    width: pxTorem(20px);
				    height: pxTorem(37px);
				    transform: translate3d(0,pxTorem(-18px),0);
					background: url('#{$baseUrl}/img/back.png') no-repeat 0 0;
					background-size: contain;
				}
			}
		}
		&-right{
			flex: .2;
			height: 100%;
		}
	}
	h1{
		flex: 1;
		text-align: center;
		font-size: pxTorem(36px);
		color: 	#fff;
	}
</style>

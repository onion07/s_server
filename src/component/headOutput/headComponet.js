/**
 * 1.引入Vue
 * 2.引入公共样式
 * 3.引入组件header
 */
import Vue from 'vue';

import '../../assets/scss/public.scss'; 
import '../../assets/scss/header.scss';

Vue.component('head-component',{
	props:['titles'],
	template: ` <div class="comp-header">
					<div class="header-button-left">
						<a href="javascript:history.go(-1);">返回</a>
					</div>
					<h1>{{ titles }}</h1>
					<div class="header-button-right"></div>
				</div>
			  `
});

const vm = new Vue({
	el: '#compHeader'
})

export const AA = 'aa';

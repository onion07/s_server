import Vue from 'vue';
import Vuex from 'vuex';
import LoginComponent from './login.vue';
import { createStore } from '../../store';

const store = createStore();

const vm = new Vue({
	el: '#loginForm',
	store,
	components: {
		app: LoginComponent
	},
	render: h => h('app')
})

// 加载弹窗
// import('../popOutput/popup')
// 	.then( function (a) {

// 		console.info('popup...',a);	


// 	});
import Vue from 'vue';
import Vuex from 'vuex';
import FindpswComponent from './resetPsw.vue';
import { createStore } from '../../store';

const store = createStore();


const vm = new Vue({
	el: '#resetPswForm',
	store,
	components: {
		app: FindpswComponent,
	},
	render: h => h('app')
})



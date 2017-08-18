import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from '../../store';
import RegisterComponent from './registerEm.vue';

const store = createStore();

const vm = new Vue({
	el: '#regEmailForm',
	store,
	components: {
		app: RegisterComponent,
	},
	render: h => h('app')
})



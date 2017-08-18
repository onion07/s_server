import Vue from 'vue';
import Vuex from 'vuex';
import FindpswComponent from './findPsw.vue';
import { createStore } from '../../store';

const store = createStore();



const vm = new Vue({
	el: '#findpswForm_1',
	store,
	components: {
		app: FindpswComponent,
	},
	render: h => h('app')
})



import Vue from 'vue';
import Vuex from 'vuex';
import FindpswComponent from './findPsw2.vue';
import { createStore } from '../../store';

const store = createStore();



const vm = new Vue({
	el: '#findpswForm_2',
	store,
	components: {
		app: FindpswComponent,
	},
	render: h => h('app')
})



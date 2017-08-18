import Vue from 'vue';
import Vuex from 'vuex';
import {AA} from '../headOutput/headComponet';
import changePasswordComponent from './changePassword.vue';
import { createStore } from '../../store';

const store = createStore();

import '../../assets/scss/user.scss';

const vm = new Vue({
	el: '#changePswForm',
	store,
	components: {
		app: changePasswordComponent
	},
	render: h => h('app')
})

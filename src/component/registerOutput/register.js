import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from '../../store';
import RegisterComponent from './register.vue';

// import VModal from 'vue-js-modal';

// Vue.use(VModal, { dialog: true })

const store = createStore();

const vm = new Vue({
	el: '#regForm',
	store,
	components: {
		app: RegisterComponent,
	},
	render: h => h('app')
})



// 加载弹窗
import('../popOutput/popup')
	.then( function (dialog) {

		console.info('popup...');	
		// return easyDialog.default;
		
	});

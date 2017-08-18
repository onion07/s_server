import Vue from 'vue';
import BindPhoneComponent from './bindPhone.vue';


const vm = new Vue({
	el: '#bindPhone',
	components: {
		app: BindPhoneComponent,
	},
	render: h => h('app')
})



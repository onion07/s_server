import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})

// import('./component/test')
// 	.then( function (ab) {
// 		console.info(ab.default.rea);
// 		console.info('mainjs...');	
// 	}).catch( function () {
// 		console.warn('mainjs error...');
// 	});

console.info('#app......')
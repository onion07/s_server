<template>
	<main  id="resetPswForm">
		
		<div class="main">
			<section class="form-wrapper">
				<form id="resetpswStep2_ph">
					<input-Psw ids="resetPsw_1"></input-Psw>
					<input-PswAgain ids="resetPsw_2"></input-PswAgain>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<button-nextStep events="reset_psw" texts="确定"></button-nextStep>
			</section>
		</div>

		<pop-dialog></pop-dialog>

	</main>
</template>


<script>
	import Vue from 'vue';
	import Pop from '../popOutput/pop.vue'; 
	//邮箱&手机号输入框
	import InputPsw from '../FormOutput/Inputpsw.vue';
	import InputpswAgain from '../FormOutput/InputpswAgain.vue';
	import ButtonNext from '../FormOutput/ButtonGreen.vue';

	
	export default {
	  name: 'resetPsw',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{

			'input-Psw': InputPsw,
			'input-PswAgain': InputpswAgain,
			'button-nextStep': ButtonNext,
			'pop-dialog': Pop 
	  },
	  created () {
	  	const _ts = this;
	  	if ( !!window.location.search ) {

		  	const search = window.location.search;
		  	const type = search.split('&')[0].split('=')[1];
		  	const code = search.split('&')[1].split('=')[1];

		  	_ts.$store.commit('SET_TAKEN_TYPE',type);
		  	_ts.$store.commit('SET_TAKEN_CODE',type);

	  	}
	  }
	}
</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
</style>

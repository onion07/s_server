<template>
	<main  id="findpswForm_1">
		
		<div class="main">
			<section class="form-wrapper">
				<form id="findpswByphone">
					<section class="form-wrapper-cell">
						<span class="icon-box">
							<img class="icon-img icon-img5" src="../../assets/img/user1.png" alt="azoya注册">
						</span>
						<input type="text" v-model="peModelfind" name="phone" maxlength="11" placeholder="邮箱/手机号" autocomplete="off"/>
					</section>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<button-nextStep events="next" texts="下一步"></button-nextStep>
			</section>
		</div>

		<pop-dialog></pop-dialog>

	</main>
</template>


<script>
	import Vue from 'vue';
	//邮箱&手机号输入框
	// import InputPhoneEmail from '../FormOutput/InputPhoneEmail.vue';
	import ButtonNext from '../FormOutput/ButtonGreen.vue';
	//弹窗
	import Pop from '../popOutput/pop.vue';
	
	export default {
	  name: 'findPsw',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  computed: {
	  	peModelfind: {
	  		get () {
		      return this.$store.state.findPsw.userName;
		    },
		    set (value) {
		      this.$store.commit('INPUT_FINDPSW_PHONE_EMAIL', value)
		    }
	  	}
	  },
	  methods: {

	  },
	  components:{

			// 'input-phoneEmai': InputPhoneEmail,
		'button-nextStep': ButtonNext,
		'pop-dialog': Pop

	  }
	}
</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
	img{
		width: 100%;
	}
</style>

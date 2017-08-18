<template>
	<main  id="changePswForm">
		
		<div class="main">
			<section class="form-wrapper">
				<form id="changePasswordForm">
					<section class="form-wrapper-cell">
						<span class="fix-32">旧&nbsp;密&nbsp;码</span>
						<input type="password" :value="getPassword" @input="updatePassword" sel-id="reg-text-password" name="password" maxlength="20" placeholder="请输入旧密码" autocomplete="off"/>
					</section>
					<section class="form-wrapper-cell">
						<span class="fix-32">新&nbsp;密&nbsp;码</span>
						<input type="password" :value="getNewPassword1" @input="updateNewPassword1" sel-id="reg-text-password" name="password" maxlength="20" placeholder="设置密码（6-16字符）" autocomplete="off"/>
					</section>
					<section class="form-wrapper-cell">
						<span class="fix-32">新&nbsp;密&nbsp;码</span>
						<input type="password" :value="getNewPassword2" @input="updateNewPassword2" sel-id="reg-text-password" name="password" maxlength="20" placeholder="请再次输入上面的密码" autocomplete="off"/>
					</section>
				</form>
			</section>
			<section class="form-deal-wrapper">
				<button-ensure texts="确定" events="changePsw"></button-ensure>
			</section>
		</div>
		<pop-dialog></pop-dialog>
	</main>
</template>


<script>
	import Vue from 'vue';
	//密码
	import InputButton from '../FormOutput/ButtonGreen.vue';
	//弹窗
	import Pop from '../popOutput/pop.vue';
	
	export default {
	  name: 'changepassword',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  computed: {
		getPassword () {
      		return this.$store.state.userCenter.changePsw.oldPsw;
		},
		getNewPassword1 () {
      		return this.$store.state.userCenter.changePsw.newPsw_1;
		},
		getNewPassword2 () {
      		return this.$store.state.userCenter.changePsw.newPsw_2;
		}
	  	  
	  },
	  methods: {
		updatePassword (e) {
			this.$store.commit('INPUT_OLD_PSW', e.target.value)

		},
		updateNewPassword1 (e) {
			this.$store.commit('INPUT_NEW_PSW_1', e.target.value)

		},
		updateNewPassword2 (e) {
			this.$store.commit('INPUT_NEW_PSW_2', e.target.value)

		}
		
	  },
	  components:{
		  'button-ensure': InputButton,
		  'pop-dialog': Pop
	  }
	}
</script>


<style lang="scss">
	@import '../FormOutput/form.scss';
</style>

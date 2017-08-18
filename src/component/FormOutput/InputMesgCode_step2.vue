<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img3" src="../../assets/img/phone_c_1.png" alt="azoya注册">
		</span>

		<input type="text" v-model="megCode_step2" name="message-yamz" maxlength="6" placeholder="请输入短信验证码" autocomplete="off"/>
		<a href="javascript:void(0);" id="get-phone-code" @click="check">{{mesgBtnText}}</a>
		<dialog/>

	</section>

</template>


<script>
	import Vue from 'vue';
	import {mapGetters, mapActions} from 'vuex';
	import Req from '../../api/request';
	import Config from '../../api/config';
	import PopDialog from '../popOutput/popup'; //弹窗action


	// console.info(aa.getTEST())
	export default {
	  name: 'InputPhoneCode',
	  data () {
	    return {
	      times: 60,
	      lock: false, //获取验证码-按钮锁
	      user: '',
	      mesgBtnText: '获取验证码'
	    }
	  },
	  props:['pNum'],
	  computed: {

	  	...mapGetters([
		  	  'getInputPhone',
		  	  'getInputImgCode'
	  	]),
	  	megCode_step2: {
	  		get () {
		      return this.$store.state.findPsw.step2.mesgcode;
		    },
		    set (value) {
		      this.$store.commit('SET_FINDPSW_MESG_CODE', value);
		    }
	  	}
	  },
	 methods: {
	 		...PopDialog,
	 		// 改变按钮文本
			changeMesgText () {
				console.info('texxxxxx')
				var _ts = this;
				_ts.lock = true; //禁止点击

				_ts.interval = setInterval( () => {

					_ts.times -- ;
					_ts.mesgBtnText = `剩余${_ts.times}s`;

					if ( _ts.times === 0 ) {

						clearInterval(_ts.interval);
						_ts.times = 60 ;
						_ts.mesgBtnText = `重新获取`;
						_ts.lock = false; //释放点击
					}

				},1000);
			},
	        check () {

	      	  const _ts = this;
		        // 获取要找回密码的手机号
		      // const userPhone = this.$store.getters.getFindpswTargetUserName;

		      if( !!localStorage.getItem('userNameStg') ) {
				   this.user = localStorage.getItem('userNameStg');

			  }
		      
		      // 获取图形验证码
		      const imgCode = this.$store.getters.getFindpswStep2ImgCode;

		      // 验证返回
		      const filterBack2 = Config.imgCode(imgCode);

		      if (this.lock) {
		      	return;
		      }
		      // 验证图形验证码-格式 (非请求)
		      if ( !imgCode ) { //为空
		        console.info(filterBack2.invalidMsg)
		        this.popAction( filterBack2.invalidMsg );
		        return;
		      }
		      console.info('imgCode',imgCode)
		      /***图像验证码-检验***/
		      Req.respValidImgCode(imgCode,function (data) {

		          console.info('-------- ',data)
		          if (data.ret != 1) {
			          _ts.popAction( data.msg );
			          return ;
		          }
console.info('11111111',imgCode,_ts.user)
	          		Req.respPhoneMesgCode(imgCode,_ts.user,function (data) {

	          			_ts.changeMesgText();
			          	console.info('短信验证码 ',data)
				  		_ts.$store.commit('SET_FINDPSW_MESG_CODE',data)

				     });
	          	// _ts.getMesgRegisterCode();


		      });

		      // _ts.checkRegisterPhone(imgCode,userPhone); //测试



	        }
	    }
	}
</script>


<style lang="scss">

</style>

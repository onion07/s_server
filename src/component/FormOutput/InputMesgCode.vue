<template>
	
	<section class="form-wrapper-cell">
		<span class="icon-box">
			<img class="icon-img icon-img3" src="../../assets/img/phone_c_1.png" alt="azoya注册">
		</span>

		<input type="text" v-model="megCode" name="message-yamz" maxlength="6" placeholder="请输入短信验证码" autocomplete="off"/>
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
	      // megCode: '',
	      times: 60,
	      lock: false, //获取验证码-按钮锁
	      mesgBtnText: '获取验证码'
	    }
	  },
	  props:['pNum'],
	  computed: {

	  	...mapGetters([
		  	  'getInputPhone',
		  	  'getInputImgCode'
	  	]),
	  	megCode: {
	  		get () {
		      return this.$store.state.newUser.mesgcode;
		    },
		    set (value) {
		      this.$store.commit('SET_MESG_CODE', value);
		    }
	  	}
	  },
	  // methods:{
	  // 	  ...mapActions({
		 //      check: 'checkPhoneNum_code'
		 //  })
	  // },

	 methods: {
	 		...PopDialog,
	 		// 改变按钮文本
			changeMesgText () {
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
		        // 获取要注册的手机号
		      const userPhone = this.$store.getters.getInputPhone;
		      // 获取图形验证码
		      const imgCode = this.$store.getters.getInputImgCode;

		      // 验证返回
		      const filterBack1 = Config.phone(userPhone);
		      const filterBack2 = Config.imgCode(imgCode);

		      if (this.lock) {
		      	return;
		      }
		      // 验证手机号-格式 (非请求)
		      if ( !filterBack1.isValid ) {
		        console.info(PopDialog);
		        this.popAction( filterBack1.invalidMsg );
		        return;
		      }
		      // 验证图形验证码-格式 (非请求)
		      if ( !imgCode ) { //为空
		        console.info(filterBack2.invalidMsg)
		        this.popAction( filterBack2.invalidMsg );
		        return;
		      }

		      /***图像验证码-检验***/
		      Req.respValidImgCode(imgCode,function (data) {
		          if (data.ret != 1) {
			          console.info('-------- ',data.msg)
			          _ts.popAction( data.msg );

			          return ;
		          }

			      _ts.checkRegisterPhone(imgCode,userPhone);
		      });

		      // _ts.checkRegisterPhone(imgCode,userPhone); //测试



	        },
	        /***注册的手机号码-检验***/
	        checkRegisterPhone (imgCode,userPhone) {
	      		const _ts = this;

		        Req.respPhoneNumber(userPhone,function (data) {

		          	if ( data.code !=='undefined' && data.code === 200 ) {

			          	console.info('此号码可以注册了 ',data)
						_ts.changeMesgText();

			          	_ts.getMesgRegisterCode(imgCode,userPhone);
		          	}
		          	else{
			          	console.info('该手机号码已存在 ',data)
			          	const txt = '该手机号码已存在 ';
			            _ts.popAction( txt );
		          	}

		        });
	        },
	        /***短信验证码-检验***/
	        getMesgRegisterCode (imgCode,userPhone) {


		      	// this.mesgBtnText = `剩余${this.times}s`; // 改变值以触发mesgBtnText(){}

		  		Req.respPhoneMesgCode(imgCode,userPhone,function (data) {

		          	console.info('短信验证码 ',data)

			     });

	        }
	    }
	}
</script>


<style lang="scss">

</style>

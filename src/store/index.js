import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      newUser:{ /*手机注册*/
        phone: '',
        imgcode: '',
        mesgcode: '',
        password: '',
        isagreed: false
      },
      EmnewUser:{ /*邮箱注册*/
        email: '',
        imgcode: '',
        password: '',
        passwordAgain: '',
        pswlock: true
      },
      button:{ 
        lock: true
      },
      signIn:{  /*登录*/
        userName: '',
        password: '',
        imgcode: '',
        buttonlock: false
      },
      findPsw:{  /*找回密码*/
        userName: '',
        step2:{
          userName: '',
          imgcode: '',
          mesgcode: ''
        },
        step3:{
          password1:'',
          password2:'',
          takenType: '',
          takenCode: ''
        }
      },
      popDialog: { /*弹窗*/
        isShow: false,
        text: 'this`s popDialog'
      },
      userCenter:{/*用户中心*/
        changePsw: {
          oldPsw: '',
          newPsw_1: '',
          newPsw_2: ''
        }
      }
    },
    actions,
    mutations,
    getters
  })
}

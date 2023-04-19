// 引入api
import { reqGetCode, reqUserRegister,reqUserLogin,reqUserInfo, reqLogout } from "@/api";
// 引入utils.token
import {setToken,getToken,removeToken} from "@/utils/token";

const state = {
  code:"",
  token:getToken(),
  userInfo:{},
};
const mutations = {
  GETCODE(state,code){
    state.code = code; 
  },
  USERLOGIN(state,token){
    state.token = token;
  },
  GETUSERINFO(state,userInfo){
    state.userInfo = userInfo;
  },
  CLEAR(state){
    // 先清空store
    state.token = '';
    state.userInfo = {};
    // 本地存储清空
    removeToken();
  }
};
const actions = {
  // 用户注册User register
  async userRegister(context,userdata){
    let result = await reqUserRegister(userdata);
    if(result.code == 200){
      return "ok";
    }else {
      return Promise.reject(new Error("Register failed"))
    }
  },
  // 获取验证码getCode
  async getCode(context,phone){
    let result = await reqGetCode(phone);
    if(result.code == 200){
      context.commit("GETCODE",result.data);
      console.log('getCode:',result.data);
      return "ok";
    }else {
      return Promise.reject(new Error("getCode failed"))
    }
  },
  // 用户登陆userLogin
  async userLogin(context,data){
    let result = await reqUserLogin(data);
    console.log("login-result:",result);
    if(result.code ==200){
      context.commit("USERLOGIN",result.data.token);
      setToken(result.data.token);
      return "ok";
    }else{
      return Promise.reject(new Error("userLogin failed"));
    }
  },
  // 获取用户信息
  async getUserInfo(context){
    let result = await reqUserInfo();
    if(result.code == 200){
      context.commit("GETUSERINFO",result.data);
      // console.log('userinfo:',result.data);
      return "ok";
    }else{
      return Promise.reject(new Error("getUserInfo failed:可能你还没登陆"));
    }
  },
  // 退出登录
  async userLogout(context){
    let result = await reqLogout();
    if(result.code ==200){
      // 清除token
      context.commit('CLEAR');
      return 'ok';
    }else{
      return Promise.reject(new Error('Logout error'));
    }
  },



};
const getters = {};
 
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
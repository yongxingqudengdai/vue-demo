// 引入api
import { reqGetCode, reqUserRegister,reqUserLogin } from "@/api";
// 引入utils.token
import {setToken,getToken,removeToken} from "@/utils/token";

const state = {
  code:"",
  token:getToken(),
};
const mutations = {
  GETCODE(state,code){
    state.code = code; 
  },
  USERLOGIN(state,token){
    state.token = token;
  },
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
};
const getters = {};
 
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
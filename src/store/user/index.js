import { reqGetCode, reqUserRegister } from "@/api";

const state = {
  code:"",
};
const mutations = {
  GETCODE(state,code){
    state.code = code; 
  }
};
const actions = {
  // User register
  async userRegister(context,userdata){
    let result = await reqUserRegister(userdata);
    if(result.code == 200){
      return "ok";
    }else {
      return Promise.reject(new Error("Register failed"))
    }
  },
  // getCode
  async getCode(context,phone){
    let result = await reqGetCode(phone);
    if(result.code == 200){
      context.commit("GETCODE",result.data);
      console.log('getCode:',result.data);
      return "ok";
    }else {
      return Promise.reject(new Error("getCode failed"))
    }
  }
};
const getters = {};
 
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
import {reqCartList} from "@/api/index.js"
const state = {
  cartList:[],
};
const mutations = {
  GETCARTLIST(state,cartList){
    state.cartList = cartList;
  }
};
const actions = {
  // 获取购物车列表
  async getCartList(context){
    let result = await reqCartList()
    if(result.code == 200){
      context.commit('GETCARTLIST',result.data)
    }
  },
  // 
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
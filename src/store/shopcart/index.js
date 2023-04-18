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
    console.log('cartList.data:',result);
    if(result.code == 200){
      context.commit('GETCARTLIST',result.data)
    }
  },
  // 
};
const getters = {
  // 
  cartList(state){
    return state.cartList[0] || {}
  },
  // 购物车数据
  cartInfoList(){
    
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
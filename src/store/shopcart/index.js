import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api/index.js"
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};
const actions = {
  // 获取购物车列表
  async getCartList(context) {
    let result = await reqCartList()
    console.log('cartList.data:', result);
    if (result.code == 200) {
      context.commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车某一个产品（一整行）
  async deleteCartById(context, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('cartlist delete error'));
    }
  },
  // 修改选中状态
  async updateCheckedById(context,{skuId,isChecked}){
    let result = await reqUpdateCheckedById(skuId,isChecked);
    if(result.code == 200){
      return "ok";
    } else {
      return Promise.reject(new Error('updateCheckedById error'));
    }
  },

};
const getters = {
  // 
  cartList(state) {
    return state.cartList[0] || {}
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
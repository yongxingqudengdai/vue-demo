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
  // 修改选中状态（个别）
  async updateCheckedById(context,{skuId,isChecked}){
    let result = await reqUpdateCheckedById(skuId,isChecked);
    if(result.code == 200){
      return "ok";
    } else {
      return Promise.reject(new Error('updateCheckedById error'));
    }
  },
  // 修改选中状态（全部）
  async updateAllCartIsChecked(context,isChecked){
    // array占位，用于存储所有promise对象
    let promiseAll = [];
    context.state.cartList[0].cartInfoList.forEach(item => {
      let promise = context.dispatch("updateCheckedById",{
        skuId : item.skuId,
        isChecked:isChecked
      });
      // ***将promise对象存入promiseAll数组中
      promiseAll.push(promise);
      // ***等待所有promise对象完成操作（Promise.all方法）
      return Promise.all(promiseAll);
    });
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
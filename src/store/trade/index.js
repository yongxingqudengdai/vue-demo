import { reqAddressInfo, reqOrderInfo } from "@/api";
const state = {
  // 用户地址
  address: [],
  //商品清单数据 
  orderInfo: {}
};
const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address;
    console.log('address:',address);
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
    console.log('orderInfo:',orderInfo);
  },
};
const actions = {
  //获取用户地址信息
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETUSERADDRESS", result.data);
    } else {
      return Promise.reject(new Error('getUserAddress failed'))
    }
  },
  //获取商品清单数据
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("GETORDERINFO", result.data);
    } else {
      return Promise.reject(new Error('getOrderInfo failed'))
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
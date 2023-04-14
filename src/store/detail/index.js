// 引入api服务
import { reqGoodsInfo } from "@/api";

const state = {
  goodsInfo:[],
}
const mutations = {
  GOODSINFO(state,value){
    state.goodsInfo = value;
  }
}
const actions = {
  async goodsInfo(context,skuId){
    let result = await reqGoodsInfo(skuId);
    console.log('GoodsInfo:',result);
    if(result.code == 200){
      context.commit('GOODSINFO',result.data)
    }    
  }
}
const getters = {}

export default{
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
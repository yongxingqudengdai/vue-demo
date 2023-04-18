// 引入api服务
import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
//封装游客身份模块uuid--->生成一个随机字符串（不能在变了）
import {getUUID} from '@/utils/uuid_token';
const state = {
  goodsInfo:[],
  // 获取游客身份
  uuid_token:getUUID(),
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
    console.log('skuImageList:',result.data.skuInfo.skuImageList);
    if(result.code == 200){
      context.commit('GOODSINFO',result.data)
    }    
  },
  async addOrUpdateShopCart(context,{skuId,skuNum}){
    let result = await reqAddOrUpdateShopCart(skuId,skuNum);
    console.log('addOrUpdateShopCart actions excuted,result:',result);
    if(result.code == 200){
      return "ok";
    }else{
      return Promise.reject(new Error("faile"))
    }
  }
}
const getters = {
  // "categoryView","skuInfo","spuSaleAttrList"
  // 解决undefined问题：初始化空对象
  categoryView(state){
    return state.goodsInfo.categoryView || {};
  },
  skuInfo(state){
    return state.goodsInfo.skuInfo || {};
  },
  spuSaleAttrList(state){
    return state.goodsInfo.spuSaleAttrList || {};
  },
}

export default{
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
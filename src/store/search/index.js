import { reqGetSearchInfo } from "@/api";
// search模块的小仓库
const state = {
  searchList:{}
};
const mutations ={
  SEARCHLIST(state,value){
    state.searchList = value
  }
};
const actions = {
  // 发送api请求获取search模块数据
  // params={}是默认参数语法
  async searchList(context, params = {}) {
    let result = await reqGetSearchInfo(params);
    if(result.code === 200){
      // 执行mutation方法
      context.commit('SEARCHLIST',result.data);
    }
  },
};
// 计算属性，为了简化仓库的数据而生（比如store从api得到的某个数据层数太多）
const getters = {
  goodsList(state){
    return state.searchList.goodsList||[];
  },
  trademarkList(state){
    return state.searchList.trademarkList||[];
  },
  attrsList(state){
    return state.searchList.attrsList||[];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
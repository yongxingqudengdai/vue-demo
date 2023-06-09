// 引入api服务
import { reqBannerList,reqCategoryList } from '@/api';

// home模块的小仓库
const state = {
  count: 1 ,
  // 三级菜单数据，初始化数组
  categoryList:[],
  bannerList:[]
};
const mutations = {
  ADD(state) {
    state.count += 1;
  },
  MINUS(state) {
    state.count -= 1;
  },
  CATEGORYLIST(state,value){
    state.categoryList = value;
    // console.log(value)
  },
  BANNERLIST(state,value){
    state.bannerList = value;
  }
};
const actions = {
  // 通过api获取服务器数据
  async categoryList(context){
    let result = await reqCategoryList();
    if(result.code === 200){
      // 执行mutation方法
      context.commit('CATEGORYLIST',result.data);
    }
  },
  // 通过mockapi获取banner数据
  async bannerList(context){
    let result = await reqBannerList();
    console.log(result);
    if(result.code === 200){
      context.commit('BANNERLIST',result.data);
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
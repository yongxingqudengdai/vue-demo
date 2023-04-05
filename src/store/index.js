import Vue from 'vue';
import Vuex from 'vuex';

// 使用插件
Vue.use(Vuex);

// state:存放数据的地方
const state = {
  data:1
};

// mutations:修改state
const mutations = {};

// actions书写业务逻辑，处理异步
const actions = {};

// getters:相当于计算属性，可以对state数据进一步处理
const getters = {};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
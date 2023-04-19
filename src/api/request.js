//对于axios进行二次封装 范例原名ajax.js
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";
// console.log(nprogress);
// 引入store
import store from '@/store';

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token){
    // 添加请求头中的userTempId字段值
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  if(store.state.user.token){
    // 添加请求头中的token带给服务器
    config.headers.token = store.state.user.token;
  }
  // 进度条开始动
  nprogress.start();
  return config;
});

// 响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done();
  return res.data;
}, (err) => {
  return promise.reject(new Error('Failed'))
}

);

export default requests;
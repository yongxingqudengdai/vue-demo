//mock-ajax请求 范例原名ajax.js
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";
// console.log(nprogress);

const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  // 进度条开始动
  nprogress.start();
  return config;
});

// 相应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done();
  return res.data;
}, (err) => {
  return promise.reject(new Error('Faile'))
}

);

export default requests;
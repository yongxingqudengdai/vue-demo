// 引入请求
import requests from "./request";
import requestsMock from './requestMock'

export const reqCategoryList = () =>
requests.get('/product/getBaseCategoryList')
// 返回promise对象
// { return requests({ 'url': '/product/getBaseCategoryList', method: 'get' }) }; 注意花括号的区别

// 获取banner数据
export const reqBannerList = () => 
requestsMock.get('/banner') ;
export const reqFloorList = () =>
requestsMock.get('/floor')  ;// 获取floor数据
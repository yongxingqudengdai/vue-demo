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
requestsMock.get('/floor')  ; // 获取floor数据

// 获取搜索信息
// params至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list", method:"post", data:params});

// 获取商品details信息
export const reqGoodsInfo = (skuId)=>requests({ url:`/item/${skuId}`, method:"get" })

// 将产品添加到购物车&更新产品个数
// /api/cart/addToCart/{ skuId }/{ skuNum }
// ???没有data配置项，不需要返回数据？
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({ url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post",  })

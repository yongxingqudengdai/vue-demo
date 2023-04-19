// 引入请求
import requests from "./request";
import requestsMock from './requestMock'

export const reqCategoryList = () =>
  requests.get('/product/getBaseCategoryList')
// 返回promise对象
// { return requests({ 'url': '/product/getBaseCategoryList', method: 'get' }) }; 注意花括号的区别

// 获取banner数据
export const reqBannerList = () =>
  requestsMock.get('/banner');
export const reqFloorList = () =>
  requestsMock.get('/floor'); // 获取floor数据

// 获取搜索信息
// params至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

// 获取商品details信息
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" })

// 将产品添加到购物车&更新产品个数
// /api/cart/addToCart/{ skuId }/{ skuNum }
// ???没有data配置项，不需要返回数据？
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post", })

// 获取购物车商品信息
//URL:/api/cart/cartList   method:get 
export const reqCartList = () => requests({ url: `/cart/cartList`, method: "get" })

// 删除购物车的相关商品（一整行）
//URL:/api/cart/deleteCart/{skuId}   method:delete 
export const reqDeleteCartById = (skuId) => requests({ url:`/cart/deleteCart/${skuId}`, method: "delete" })

//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get 
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

// 注册用户
// URL:/api/user/passport/register   method:post  phone code password
export const reqUserRegister = (data) =>requests({url:`/user/passport/register`,data:data,method:"post"});

//获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,data , method:'post'});

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`, method:'get'});

//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=>requests({url:'/user/passport/logout', method:'get'});

//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList', method:'get'});

//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

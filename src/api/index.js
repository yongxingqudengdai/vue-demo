// 
import requests from "./request";

export const reqCategoryList = () => {
  // 返回promise对象
  return requests({ 'url': '/product/getBaseCategoryList', method: 'get' })
}
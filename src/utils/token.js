// 存储token
export const setToken = (token) =>{
  localStorage.setItem("TOKEN", token);
};
// 获取
export const getToken = (token) =>{
  return localStorage.getItem("TOKEN");
}
// 清除
export const removeToken=() =>{
  localStorage.removeItem("TOKEN");
}
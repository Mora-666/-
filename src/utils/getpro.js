import * as API from './index'
// 传递username,password
export const getManager = (params) => {
    return API.POST('/api/v1/auth/manager_login',params)
}

// 获取全部商品
export const getProduct = (params)=>{
  return API.GET('/api/v1/admin/products',params)
}
// 新增商品信息：
export const setProduct = (params)=>{
  return API.POST('/api/v1/admin/products',params);
}
//修改商品信息
export const alterProduct = (params,id)=>{
  return API.PUT('/api/v1/admin/products'+id,params);
}

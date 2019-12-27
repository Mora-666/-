import * as API from './index'
// 传递username,password
export const getManager = (params) => {
    return API.POST('/api/v1/auth/manager_login',params)
}


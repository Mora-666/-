import * as API from './index'
export const getList = (params ) => {
    return API.GET('/productlist.php',params)
}
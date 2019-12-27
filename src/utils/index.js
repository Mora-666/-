import axios from 'axios';
var baseUrl = "http://jx.xuzhixiang.top/ap/api";
export const GET = (url, params) => {
    return axios.get(`${baseUrl}${url}`, { params: params })
        .then(data=>data)
}
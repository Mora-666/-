import axios from 'axios';
const baseUrl = "http://api.cat-shop.penkuoer.com";
axios.defaults.headers.common['authorization'] = "Bearer " + localStorage.getItem('token')
export const GET = (url,params)=>{
    return axios.get(`${baseUrl}${url}`,{params:params})
    .then((data) => {
        return data
    })
}
export const POST = (url,params)=>{
    return axios.post(`${baseUrl}${url}`,params)
    .then((data) => {
       return data
    })
}
export const PUT = (url,params)=>{
    return axios.put(`${baseUrl}${url}`,params)
    .then((data) => {
       return data
    })
}
export const DELETE = (url,params)=>{
    return axios.delete(`${baseUrl}${url}`)
    .then((data) => {
       return data
    })
}

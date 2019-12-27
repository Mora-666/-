import {routerRedux} from 'dva';
import * as api from "../utils/getpro"
export default {
    namespace: 'info', 
    state: {
        userName: "王俊凯",
        password:"",
        list:[], 
        isEnter:false,
    },
    reducers: {
        getName(state,{payload}){
            return {...state,...payload}
        } ,
        getPassword(state,{payload}){
            return {...state,...payload}
        },
        save(state,{payload}){
            return {...state,...payload}
        }
    },

    effects: {
        *submitHandle(payload,{call,put}){
            const result = yield call(api.getManager,payload.payload);
            console.log(result);
            yield put({
                type:"save",
                payload:{
                    list:result,
                    isEnter:true
                }   
            })
            localStorage.setItem("token",JSON.stringify(result.data.token));
            yield put(routerRedux.push('/'));
        },
    }
}
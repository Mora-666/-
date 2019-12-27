import * as api from '../util/getpro' 
export default {
    namespace: 'info', 
    state: {
        name: "王俊凯",
        age: 20,
        des: "赞赞赞",
        list:[]
    },
    reducers: {
        change(state, { payload }) {
            return {...state,...payload}
        }
    },

    effects: {
        *getData(payload, { call, put }) {
            const result = yield call(api.getList, payload.payload)
            console.log(result);
            yield put({
                type: 'change',
                payload: {
                    list:result.data.data
                }
            })
        }
    }
}
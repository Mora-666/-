import * as api from "../../../../utils/getpro"
export default {
    namespace:"proData",
    state:{
      list:[],
        name: "商品名字",
        descriptions: "商品简介",
        quantity:19,
        price: "价格",
        coverImg: "主图",
        productCategory: "商品分类id"
    },
    reducers:{
      savePro(state,{payload}){
        return {...state,...payload};
      },

    },
    effects:{
      *dataProduct(payload,{call,put}){
        const result = yield call(api.getProduct,payload.payload);
        yield put({
          type:"savePro",
          payload:{
            list:result.data.products,
          }
        })
      },
      *addPro(payload,{call,put}){
        console.log(payload);
        // const result = yield call(api.setProduct,payload)
      }
    }
}

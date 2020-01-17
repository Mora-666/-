import * as api from "../../../../utils/getpro"
import {routerRedux} from "dva"
export default {
    namespace:"proData",
    state:{
      list:[],
        id:"商品id",
        name: "商品名字",
        descriptions: "商品简介",
        quantity:19,
        price: "价格",
        coverImg: "主图",
        productCategory: "商品分类id",
        categories:[],
    },
    reducers:{
      savePro(state,{payload}){
        // console.log(state.list);
        return {...state,...payload};
      },
      saveCategory(state,{payload}){
        return {...state,...payload};
      },
    },
    effects:{
      *dataProduct(payload,{call,put}){
        const result = yield call(api.getProduct,payload.payload);
        console.log(result);
        yield put({
          type:"savePro",
          payload:{
            list:result.data.products,
          }
        })
      },
      // 新增商品：
      // http://img3.imgtn.bdimg.com/it/u=1107263072,1224997471&fm=26&gp=0.jpg
      *addPro(payload,{call,put}){
        const result = yield call(api.setProduct,payload.payload);
        yield put(routerRedux.push("/main/product"));
      },
      //获取商品分类：
      *getCategory(payload,{call,put}){
        const result = yield call(api.getCates,payload.payload);
        yield put({
          type:"saveCategory",
          payload:{
            categories:result.data,

          }
        })
      },
      // 根据ID删除商品：
      *delPro({payload},{call,put}){
        const result = yield call(api.deletePro,payload.id);
        yield put({
          type:"saveProp"
        })
      },
      // 修改商品信息：
      *alterPro({payload},{call,put}){
        const result = yield call(api.alterProduct,payload);
        yield put(routerRedux.push("/main/product"));
      }
    }
}

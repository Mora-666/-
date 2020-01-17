import React,{useEffect,useState} from 'react'
import router from "umi/router"
import { Input,Card,Button } from 'antd';
import proStyle from "./product.css"
import {connect} from "dva"
function proEdit(props) {
  const { TextArea } = Input;
  const {dispatch} = props;
  // const list = props.location.state.data;
  const {name,descriptions,quantity,price,coverImg,id} = props;
  // const [proname,setProname]= useState(name);
  console.log(props);
  const deliver= {};
/* // 首先获取商品分类的ID:
useEffect(()=>{
  dispatch({
    type:"proData/getCategory",
    payload:{
      per:10
    }
  });
}) */


  return (
    <div className = "addNew">
    <Card title="新增商品" style={{ width:100+"%" }}>
      <div className = {proStyle.comm}>
        <p>商品名称</p>
        <Input style = {{width:100+"%"}} value={name} onChange={(e)=>{
          dispatch({
            type:"proData/savePro",
            payload:{
              name:e.target.value
            }
          })
          }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品描述</p>
        <TextArea autoSize style = {{width:100+"%"}} value = {descriptions} onChange = {(e)=>{
          dispatch({
            type:"proData/savePro",
            payload:{
              descriptions:e.target.value
            }
          })
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品图片</p>
        <TextArea autoSize style = {{width:100+"%"}} value = {coverImg} onChange = {(e)=>{
           dispatch({
            type:"proData/savePro",
            payload:{
              coverImg:e.target.value
            }
          })
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品价格</p>
        <Input  style = {{width:100+"%"}} value = {price} onChange = {(e)=>{
        dispatch({
          type:"proData/savePro",
          payload:{
            price:e.target.value
          }
        })
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品数量</p>
        <Input  style = {{width:100+"%"}} value = {quantity} onChange = {(e)=>{
          dispatch({
            type:"proData/savePro",
            payload:{
              quantity:e.target.value
            }
          })
        }}/>
      </div>

     <div className = {proStyle.comm}>
        <p>商品分类</p>
        <select id = "select" onChange = {(e)=>{
          console.log("没有传递值");
          /* let item = document.getElementById("select");
          let id = item.options[item.selectedIndex].value; */
        }}>
         <option style= {{display:"none"}}>请选择商品分类</option>
   {/*          {props.categories.map((item)=>{
          return(  <option key = {item._id} value= {item._id}>{item.name}</option>)
          })}*/}
        </select>
      </div>
      <Button type="primary" block onClick = {()=>{
        props.dispatch({
          type:"proData/alterPro",
          payload:{
            name,price,descriptions,coverImg,quantity,
            id,
          }
        })
      }}>确定</Button>
    </Card>
    </div>
  )
}

export default  connect(state=>state.proData)(proEdit)

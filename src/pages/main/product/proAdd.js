import { useEffect,useState} from "react"
import { Input,Card,Button } from 'antd';
import proStyle from "./product.css"
import {connect} from "dva"

function AddNew(props){
  const { TextArea } = Input;
  const {dispatch} = props;
  const [name,setName] = useState("");
  const [descriptions,setDes] = useState("");
  const [price,setPrice] = useState(0);
  const [quantity,setQuantity] = useState(0);
  const [coverImg,setImg] = useState("");
  const [productCategory,setProid] = useState("");


// 首先获取商品分类的ID:
  useEffect(()=>{
    dispatch({
      type:"proData/getCategory",
      payload:{
        per:10
      }
    })
  })
  return(
    <div className = "addNew">
    <Card title="新增商品" style={{ width:100+"%" }}>
      <div className = {proStyle.comm}>
        <p>商品名称</p>
        <Input placeholder="请输入商品名称" style = {{width:100+"%"}} onChange = {(e)=>{
          setName(e.target.value)
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品描述</p>
        <TextArea placeholder="具体描述商品信息" autoSize style = {{width:100+"%"}} onChange = {(e)=>{
          setDes(e.target.value)
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品图片</p>
        <TextArea placeholder="请添加商品图片" autoSize style = {{width:100+"%"}} onChange = {(e)=>{
          setImg(e.target.value)
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品价格</p>
        <Input placeholder="请输入商品价格" style = {{width:100+"%"}} onChange = {(e)=>{
         setPrice(e.target.value)
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品数量</p>
        <Input placeholder="请输入商品数量" style = {{width:100+"%"}} onChange = {(e)=>{
          setQuantity( e.target.value)
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品分类</p>
        <select id = "select" onChange = {(e)=>{
          let item = document.getElementById("select");
          let id = item.options[item.selectedIndex].value;
          setProid(id);
        }}>
          <option style= {{display:"none"}}>请选择商品分类</option>
          {props.categories.map((item)=>{
          return(  <option key = {item._id} value= {item._id}>{item.name}</option>)
          })}
        </select>
      </div>
      <Button type="primary" block onClick = {()=>{
        props.dispatch({
          type:"proData/addPro",
          payload:{
            name,price,descriptions,coverImg,quantity,productCategory
          }
        })
      }}>确定</Button>
    </Card>
  </div>
  )
}
export default connect(state=>state.proData)(AddNew);

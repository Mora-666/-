import { Input,Card,Button } from 'antd';
import proStyle from "./product.css"
function AddNew(props){
  const { TextArea } = Input;

  let name,descriptions,price,coverImg ,quantity,productCategory = ""
  return(
    <div className = "addNew">
    <Card title="新增商品" style={{ width:100+"%" }}>
      <div className = {proStyle.comm}>
        <p>商品名称</p>
        <Input placeholder="请输入商品名称" style = {{width:100+"%"}} onChange = {(e)=>{
          name = e.target.value
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品描述</p>
        <TextArea placeholder="具体描述商品信息" autoSize style = {{width:100+"%"}} onChange = {(e)=>{
          descriptions = e.target.value
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品图片</p>
        <TextArea placeholder="请添加商品图片" autoSize style = {{width:100+"%"}} onChange = {(e)=>{
          coverImg  = e.target.value
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品价格</p>
        <Input placeholder="请输入商品价格" style = {{width:100+"%"}} onChange = {(e)=>{
          price= e.target.value
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品数量</p>
        <Input placeholder="请输入商品数量" style = {{width:100+"%"}} onChange = {(e)=>{
          quantity = e.target.value
        }}/>
      </div>
      <div className = {proStyle.comm}>
        <p>商品分类</p>
        <Input placeholder="请输入商品数量" style = {{width:100+"%"}} onChange = {(e)=>{
          productCategory = e.target.value
        }}/>
      </div>
      <Button type="primary" block onClick = {()=>{
        props.dispatch({
          type:"addPro",
          payload:{
            name,price,descriptions,coverImg,quantity,productCategory
          }
        })
        console.log(name);
      }}>确定</Button>
    </Card>
  </div>
  )
}
export default AddNew;

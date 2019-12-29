// 商品列表页：
import {connect} from "dva"
import { Button,Table } from 'antd';
import {useEffect} from "react";
import proSty from "./product.css"
function Product(props){
// console.log(props);
const ButtonGroup = Button.Group;
  const {dispatch} = props;
  const {list} = props;
  useEffect(()=>{
    dispatch({
      type:"proData/dataProduct",
      payload:{
        per:20
      }
    },[])
  });
  const columns = [
    {
      title: '商品姓名',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '商品简介',
      className: 'column-des',
      dataIndex: 'des',
    },
    {
      title: '商品数量',
      dataIndex: 'numbers',
    },
    {
      title: '商品价格(￥)',
      dataIndex: 'price',
      render: text => <span>{text+" ￥"}</span>,
    },
    {
      title: '商品图片',
      dataIndex: 'coverImg',
      render: text => <img src = {text} style={{width:100+"px"}}/>
    },
    {
      title: '操作',
      dataIndex:'handle',
      render: text =>
      <ButtonGroup>
      <Button type="primary"> 修改</Button>
      <Button type="danger"> 删除</Button>
    </ButtonGroup>
    },
       {
      title: '商品分类Id',
      dataIndex: 'proCategory',
    },
  ];
let data = [];
list.map((item,index)=>{
data.push({
    key:item._id,
    name:item.name,
    des:item.descriptions,
    numbers:item.quantity,
    price:item.price,
    coverImg:item.coverImg,
    proCategory:item.productCategory,
    handle:item._id,
})
  })

    return(
        <div>
          <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => '商品列表'}
        footer={() => 'Footer'}
        />,
        </div>
    )
}
export default connect(state =>state.proData)(Product)

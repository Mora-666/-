import {connect} from "dva"
import{Table,Button,Popconfirm} from "antd"
import {useEffect} from "react"
import router from "umi/router"

function ProType(props){
  const ButtonGroup = Button.Group;
  const {dispatch} = props;
  console.log(props);
  const {totalCount,categories,pages} = props.categories;
  console.log(categories);
  const txt = '你确定要删除此分类吗？';
  useEffect(()=>{
    dispatch({
      type:"proData/getCategory",
      payload:{
        per:10
    }}
    )
  },[]);
  const columns = [
    {
      title: '分类名称',
      dataIndex: 'name',
    },
    {
      title: '分类描述',
      dataIndex: 'des',
    },
    {
      title: '操作',
      dataIndex:'handle',
      render: text =>
      <ButtonGroup>
      <Button type="primary" onClick = {()=>{
      }}> 修改</Button>
      <Popconfirm placement="top" title={txt} onConfirm={()=>{
      }} okText="Yes" cancelText="No">
        <Button type="danger"> 删除</Button>
      </Popconfirm>
    </ButtonGroup>
    },
  ];
  const data = [];
  categories.map((item,index)=>{
    data.push(
      {
        name:item.name,
        des:item.descriptions,
      })
      }
    )

  return(
    <div>
  <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => '分类总数'+{totalCount}}
        footer={() => 'Footer'}
        />,
    </div>
  )
}
export default connect(state =>state.proData)(ProType)

import { connect } from 'dva';
import styles from './index.css';
import logo from "../../assets/logo.png"
import Link from "umi/link"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


 function Index(props) {
  return (
    <Layout>
    <Header className="header">
      <div className={styles.logo}><img src ={logo} title = "logo"/></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">商品管理</Menu.Item>
        <Menu.Item key="2">订单管理</Menu.Item>
        <Menu.Item key="3">用户管理</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                商品管理
              </span>
            }
          >
            <Menu.Item key="1"><Link to = "/main/product/">商品列表</Link></Menu.Item>
            <Menu.Item key="2"><Link to = "/main/product/proAdd">新增商品信息</Link></Menu.Item>
            <Menu.Item key="3"><Link to = "/main/product/proType">商品分类列表</Link></Menu.Item>
            <Menu.Item key="4">新增商品分类信息</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                订单管理
              </span>
            }
          >
            <Menu.Item key="5">获取订单列表</Menu.Item>
            <Menu.Item key="7">修改商品信息</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                用户管理
              </span>
            }
          >
            <Menu.Item key="9">获取用户列表</Menu.Item>
            <Menu.Item key="10">新增用户</Menu.Item>
            <Menu.Item key="11">获取用户收货地址</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}
export default Index


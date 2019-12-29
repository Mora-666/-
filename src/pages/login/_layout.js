import loginSty from "./login.css"
import { Form, Icon, Input, Button, Checkbox,notification } from 'antd';
import {connect} from "dva"
 function Login(props) {
{/* 提醒框 */}
  const openNotification = () => {
    notification.open({
      message: '登录提示',
      description: '登录成功/失败',
      placement: 'bottomRight',
      bottom: 50,
      duration: 1,
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
  };
    return (
        <div className = {loginSty.loginBg}>
        <Form className={loginSty.loginForm}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}
              />} className= {loginSty.loginInputName }
              placeholder="请输入登录名"
              onChange ={(e)=>{
                 props.dispatch({
                   type:"info/getName",
                   payload:{
                    userName:e.target.value
                   }
                 })
              }}
            />,
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入登录密码"
              className={loginSty.loginInputPas}
              onChange = {(e)=>{
                props.dispatch({
                   type: "info/getPassword",
                  payload:{
                    password:e.target.value
                  }
                }
                )
              }}
            />,
        </Form.Item>
        <Form.Item>
          <Checkbox  className={loginSty.loginCheck}>Remember me</Checkbox>
          <a className={loginSty.loginFormForgot} href="">
            Forgot password
          </a>
          <Button type="primary"  className={loginSty.loginFormButton} onClick = {(e)=>{
            e.preventDefault();
            props.dispatch({
            type:"info/submitHandle",
            payload:{
              userName:props.userName,
              password:props.password
            }
            });
          }
        }

          >
            登录
          </Button>
        </Form.Item>
      </Form>
        </div>
    )
}
export default connect(state=>state.info)(Login)




import loginSty from "./login.css"
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default function(props) {
   const handleSubmit = e => {
     console.log(props);
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    return (
        <div className = {loginSty.loginBg}>
        <Form onSubmit={()=>handleSubmit()} className={loginSty.loginForm}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} 
              />}className= {loginSty.loginInputName } 
              placeholder="请输入登录名"
            />,
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入登录密码"
              className={loginSty.loginInputPas}
            />,
        </Form.Item>
        <Form.Item>
          <Checkbox  className={loginSty.loginCheck}>Remember me</Checkbox>
          <a className={loginSty.loginFormForgot} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className={loginSty.loginFormButton}>
            登录
          </Button>
        </Form.Item>
      </Form>
        </div>
    )
}




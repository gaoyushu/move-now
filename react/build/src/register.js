import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
          
                <div>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#1c4678',color:'#fff'}}>
                        <p style={{textAlign:'center',fontSize:'17px',lineHeight:'45px'}}>注册</p>
                    </div>
                    <img src='images/logo.jpg' style={{width:'56%',marginTop:'35%',marginLeft:'22%'}}/>
                    {/* <div style={{height:'40%'}}> */}
                        <input type='text' className='register-name' placeholder='用户名'/>
                        <input type='password' className='register-pswd' placeholder='设置密码'/>
                        <input type='password' className='register-pswd' placeholder='确认密码'/>
                        <div style={{height:40}}>
                            <input type='checkbox' className='register-check'/>
                            <p style={{color:'#1c4678',float:'left',fontSize:'13px',marginTop:'15px'}}>同意用户协议</p>
                        </div>
                        <Link to='/login'><button className='register-but'>注册</button></Link>
                        <Link to='/login' style={{color:'#1c4678',fontSize:'13px',float:'right',marginRight:'13%',marginTop:'5px',textDecoration:'none'}}>已经注册，点击登录</Link>
                    {/* </div> */}
                </div>
         
        )
    }
}

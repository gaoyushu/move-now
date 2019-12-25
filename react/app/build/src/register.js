import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
          
                <div>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',color:'#fff'}} className='register-top'>
                    <Link to='/'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>注册</p>
                    </div>
                    <img src='src/images/logo.jpg' style={{width:'56%',marginTop:'25%',marginLeft:'22%'}}/>
                    {/* <div style={{height:'40%'}}> */}
                    <form>
                        <input type='email' className='register-name' placeholder='邮箱'/>
                        <div className='register-tel'>
                            <input type='tel' className='register-tell' placeholder='验证码'/>
                            <input type='submit' value='获取验证码' className='register-telr'/>
                        </div>
                        <input type='password' className='register-pswd' placeholder='设置密码'/>
                        <input type='password' className='register-pswd' placeholder='确认密码'/>
                        <div style={{height:40}}>
                            <input type='checkbox' className='register-check'/>
                            <p style={{color:'#000',float:'left',fontSize:'13px',marginTop:'15px'}}>同意用户协议</p>
                        </div>
                        <Link to='/login'>
                            <input type='submit' className='register-but' value='注册'/>
                        </Link>
                        <Link to='/login' style={{color:'#000',fontSize:'13px',float:'right',marginRight:'13%',marginTop:'5px',textDecoration:'none'}}>已经注册，点击登录</Link>
                    {/* </div> */}
                    </form>
                </div>
         
        )
    }
}

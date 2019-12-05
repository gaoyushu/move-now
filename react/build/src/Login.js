import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
// import Register from './register';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='headers'>
                    登录
                </div>
                <div className='logos'>
                    <img src='./images/logo.jpg' alt='朝花夕拾' style={{width:'100%',height:'auto'}} />
                </div>
                <form method='POST' className='table'>
                    <input type='text' placeholder='账号' className='login' />
                    <input type='password' placeholder='密码' className='login1' />
                    <Link to='/flower'><input type='submit' value='登录' className='login2' /></Link>
                </form>
                <div className='zhuce'>
                    {/* <Link to='/register'>立即注册</Link> */}
                </div>
                {/* <div>
                    <Route path='/register' Component={Register} />
                </div> */}
            </div>
            
        )
    }
}

import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
// import Register from './register';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='headers'>
                <Link to='/register'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>登录</p>
                    
                </div>
                <div className='logos'>
                    <img src='src/images/logo.jpg' alt='朝花夕拾' style={{width:'100%',height:'auto'}} />
                </div>
                <form method='POST' className='table'>
                    <input type='email' placeholder='邮箱' className='login' />
                    <input type='password' placeholder='密码' className='login1' />
                    <Link to='/square/follow'><input type='submit' value='登录' className='login2' /></Link>
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

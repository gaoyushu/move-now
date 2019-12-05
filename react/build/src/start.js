import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Register from './register.js';
import Login from './Login.js';

export default class Start extends Component {
    render() {
        return (
           
                <div className='start'>
                    <p>一篇日记 认识一个人</p>
                    <Link to='/register'>
                        <button className="start-but1">注册</button>
                    </Link>
                    <Link to='/login'>
                        <button className="start-but2">登录</button>
                    </Link>
                    {/* <div>
                        <Route exact path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                    </div> */}
                    

                </div>
          
        )
    }
}

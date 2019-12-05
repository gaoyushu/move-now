import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
// import About from './about';
// import Start from './start';
export default class Set extends Component {
    render() {
        return (
            <div>
                <div className='ss'>
                    <div className='headers'>
                        {/* 跳到花海 */}
                        <Link to='/flower'>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                        </Link> 
                        <span style={{float:"left",paddingLeft:'35%'}}>设置</span>
                    </div>
                    <div className='s-cont'>
                        账号
                        <span style={{marginLeft:'10%'}}>朝花夕拾</span>
                    </div>
                    <div className='s-cont'>
                        修改密码
                    </div>
                    <div className='s-cont'>
                        消息设置
                    </div>
                    <div className='s-cont'>
                        隐私设置
                    </div>
                    <div className='s-cont'>
                        通用设置
                    </div>
                    <div className='s-cont'>
                        清除缓存
                    </div>
                    {/* 跳到关于我们 */}
                    <Link to='/about'>
                        <div className='s-cont'>
                            关于我们
                        </div>
                    </Link>
                    {/* 跳到启动页 */}
                    <Link to='/'>
                        <div className='s-out'>
                            退出账号
                        </div>
                    </Link>
                        
               </div> 
               {/* <div>
                   <Route path='/' Component={} />
                   <Route path='/about' Component={About} />
                   <Route path='/start' Component={Start} />
                </div>     */}
            </div>
        )
    }
}

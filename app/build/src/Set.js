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
                        <Link to='/my'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>设置</p>
                    
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
                    {/* <Link to='/about'>
                        <div className='s-cont'>
                            关于我们
                        </div>
                    </Link>
                    {/* 跳到启动页 
                    <Link to='/'>
                        <div className='s-out'>
                            退出账号
                        </div>
                    </Link> */}
                        
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

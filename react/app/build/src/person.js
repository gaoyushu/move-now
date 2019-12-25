import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Person extends Component {
    render() {
        return (
            <div>
                <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to='/my'>
                            <span style={{marginLeft:10,lineHeight:'45px4',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <div className='person-div'>
                        <div className='person-head'>
                            <div className='person-img'>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                        </div>
                        <div className='person-content'>
                            <div className='person-content1'>
                                <div className='content1l'>
                                    <p>昵称</p>
                                </div>
                                <div className='content1r'>
                                    <p>快乐的代码小孩</p>
                                </div>
                            </div>
                            <div className='person-content1'>
                                <div className='content1l'>
                                    <p>签名</p>
                                </div>
                                <div className='content1r'>
                                    <p>我不是真正的快乐</p>
                                </div>
                            </div>
                            <div className='person-content1'>
                                <div className='content1l'>
                                    <p>邮箱</p>
                                </div>
                                <div className='content1r'>
                                    <p>123456989</p>
                                </div>
                            </div>
                        </div>
                        <button className='comment-but' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>个性化信息修改</button>
          
                    </div>
                    

                  
                
            
      </div>
        )
    }
}

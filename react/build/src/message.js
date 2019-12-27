import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Collect from './collect.js';
// import hashHistory from 'react-router'

export default class Message extends Component {
    constructor(){
        super();
        this.state={
            // i:0,
            // j:0,
            backgroundColor1:'white',
            color1:'#1C4678',
            // c1:'点赞',
            backgroundColor2:'#1C4678',
            color2:'#fff',
            // c2:'收藏'
            
        }
    }
   
    
    render() {
        var path = {
            pathname:'/details',
                                state:{
                                    path1:'/message',
                                    // path2:'/collect'
                                }
          }
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#1c4678',color:'#fff'}}>
                        <Link to='/flower'>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <div className='message-jump'>
                        <div className='message-jumpl' style={{backgroundColor:this.state.backgroundColor1,color:this.state.color1}}><p>消息</p></div>
                        <Link to='/collect'>
                            <div className='message-jumpr' style={{backgroundColor:this.state.backgroundColor2,color:this.state.color2}} ><p>收藏</p></div>
                        </Link>
                    </div>
                    <Link to={path}><div className='message-div' style={{borderBottom:'1px solid #2b6bb9'}}>
                        <p>玫瑰 <span style={{fontSize:'12px',color:'rgba(32, 32, 185, 0.651)'}}>评论于  2019/12/03 19:34</span></p>
                        <p>对啊 马上就要四六级啦~</p>
                        <div className='message-diary'>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'rgba(32, 32, 185, 0.651)',textAlign:'center'}}>2019/12</p>
                            </div>
                            <div className='message-diaryr'>
                                <p>冬天的意义</p>
                                <p>冬天的意义，大概是修整和储积，以及必不可少的等...</p>
                            </div>
                        </div>
                    </div></Link>
                    <Link to={path}><div className='message-div'>
                        <p>玫瑰 <span style={{fontSize:'12px',color:'rgba(32, 32, 185, 0.651)'}}>评论于  2019/12/03 19:34</span></p>
                        <p>对啊 马上就要四六级啦~</p>
                        <div className='message-diary'>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>30</p>
                                <p style={{fontSize:'10px',color:'rgba(32, 32, 185, 0.651)',textAlign:'center'}}>2019/11</p>
                            </div>
                            <div className='message-diaryr'>
                                <p>你好啊</p>
                                <p>冬天啊，为什么还不下雪呢？实在是太期待啦</p>
                            </div>
                        </div>
                    </div></Link>
                    <p style={{color:'rgba(32, 32, 185, 0.651)',fontSize:'12px',marginTop:5,textAlign:'center'}}>已经到底啦，快去拾花呀</p>
                </div>
           
        )
    }
}
// hashHistory.push(path);
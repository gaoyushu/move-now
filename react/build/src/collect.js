import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Collect extends Component {
    constructor(){
        super();
        this.state={
            // i:0,
            // j:0,
            backgroundColor2:'white',
            color2:'#1C4678',
            // c1:'点赞',
            backgroundColor1:'#1C4678',
            color1:'#fff',
            // c2:'收藏'
        }
    }
    render() {
        var path = {
            pathname:'/petal',
                                state:{
                                    path1:'/collect',
                                    // path2:'/collect'
                                }
          }
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#1c4678',color:'#fff'}}>
                        <Link to='flower'>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <div className='message-jump'>
                        <Link to='/message'>
                            <div className='message-jumpl' style={{backgroundColor:this.state.backgroundColor1,color:this.state.color1}}><p>消息</p></div>
                        </Link>
                            <div className='message-jumpr' style={{backgroundColor:this.state.backgroundColor2,color:this.state.color2}}><p>收藏</p></div>
                        
                    </div>
                    <Link to={path}><div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:'1px'}}>
                        <div className='message-diary' style={{marginTop:5}}>
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
                    <Link to={path}><div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:'1px'}}>
                        <div className='message-diary' style={{marginTop:5}}>
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
                    <p style={{color:'rgba(32, 32, 185, 0.651)',fontSize:'12px',marginTop:20,textAlign:'center'}}>已经到底啦，快去拾花呀</p>
                </div>
           
        )
    }
}

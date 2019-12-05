import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Diary extends Component {
    render() {
        let date=moment().format('YYYY / MM / DD');
        var path = {
            pathname:'/details',
                                state:{
                                    // path2:'/message',
                                    path1:'/diarytab'
                                }
          }
        return (
            
                <div className='comment' style={{height:'auto',position:'relative'}}>
                    <div style={{width:'100%',height:'165px',backgroundColor:'#1c4678',color:'#fff'}}>
                        {/* <div className='diary-date'> */}
                            <p className='diary-date'>{date}</p>
                        {/* </div> */}
                        <div className='diary-word'>
                            <p style={{fontSize:'13px',textAlign:'center',marginTop:'12px'}}>"所有努力 是为了让自己也有光芒"</p>                            
                            <p style={{fontSize:'12px',textAlign:'center',marginTop:'8px'}}>@德卡先生的信箱</p>
                        </div>
                    </div>
                    <div className='diary-div'>
                        {/* <p style={{fontSize:'12px',textAlign:'center',color:'rgba(32, 32, 185, 0.651)'}}>2019 / 12</p> */}
                        <Link to='/edit'><div style={{width:'100%',height:'40px',backgroundColor:'#fff'}}>
                            <p style={{fontSize:'20px',textAlign:'center',color:'#1c4678',lineHeight:'40px'}}>02<span style={{fontSize:'12px',color:'rgba(32, 32, 185, 0.651)'}}> 2019/12 </span><span style={{fontSize:'13px',color:'#000',paddingLeft:'2px'}}> 待补</span></p>
                        </div></Link>
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
                    </div>
                    <div className='diary-div' style={{marginTop:5}}>
                        {/* <p style={{fontSize:'12px',textAlign:'center',color:'rgba(32, 32, 185, 0.651)'}}>2019 / 11</p> */}
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
                        <Link to='/edit'><div style={{width:'100%',height:'40x',backgroundColor:'#fff',marginTop:'8px'}}>
                            <p style={{fontSize:'20px',textAlign:'center',color:'#1c4678',lineHeight:'40px'}}>29<span style={{fontSize:'12px',color:'rgba(32, 32, 185, 0.651)'}}> 2019/11 </span><span style={{fontSize:'13px',color:'#000',paddingLeft:'2px'}}> 待补</span></p>
                        </div></Link>
                        <Link to={path}><div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:'1px'}}>
                            <div className='message-diary' style={{marginTop:5}}>
                                <div className='message-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>28</p>
                                    <p style={{fontSize:'10px',color:'rgba(32, 32, 185, 0.651)',textAlign:'center'}}>2019/11</p>
                                </div>
                                <div className='message-diaryr'>
                                    <p>人就是不停地彼此亏欠又彼此宽容，算不清谁是谁非，但总觉得自己委屈</p>
                                    {/* <p>冬天啊，为什么还不下雪呢？实在是太期待啦</p> */}
                                </div>
                            </div>
                        </div></Link>
                        <Link to={path}><div className='message-div' style={{width:'100%',height:'45%',marginLeft:0,marginTop:'1px'}}>
                            <div className='message-diary' style={{marginTop:5}}>
                                <div className='message-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>27</p>
                                    <p style={{fontSize:'10px',color:'rgba(32, 32, 185, 0.651)',textAlign:'center'}}>2019/11</p>
                                </div>
                                <div className='message-diaryr'>
                                    <p>今天注册了【朝花夕拾】，把今天的日记投入到花海吧，很开心啦</p>
                                    {/* <p>冬天啊，为什么还不下雪呢？实在是太期待啦</p> */}
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <p style={{color:'rgba(32, 32, 185, 0.651)',fontSize:'12px',marginTop:5,textAlign:'center'}}>已经到底啦</p>

                </div>
           
        )
    }
}

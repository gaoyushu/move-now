import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';
import { nonsense } from 'antd-mobile/lib/picker';
import {TabBar} from 'antd-mobile'

export default class Select extends Component {
    constructor(){
        super();
        this.state={
            opacity:2,
            display:'none',
            data:[],
            selectedTab: "/diary"
            // zIndex:1000
        }
    }
    render() {
        return (
            <div className='comment'>
                <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                <Link to='/exdiary'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>选择日记</p>
                    
                </div>
                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:'55px'}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            {/* <Link to='details'> */}
                                <div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>

                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:10}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div></Link>
                        </div>
                    </div>

                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:10}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div></Link>
                        </div>
                    </div>

                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:10}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div></Link>
                        </div>
                    </div>

                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:10}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div></Link>
                        </div>
                    </div>
                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:10}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div></Link>
                        </div>
                    </div>

                    <div className='message-div' style={{width:'100%',height:'70px',marginLeft:0,marginTop:10}}>
                        <div className='select-check'>
                            <input type="checkbox"/>
                        </div>
                        <div className='message-diary' style={{height:70,width:'92%',marginTop:5,float:'left'}}>
                            <div className='message-diaryl' style={{height:50,width:'18%'}}>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr' style={{width:'75%'}}>
                                <p>冬天的意义</p>
                            </div></Link>
                        </div>
                    </div>

                    <Link to='/exdiary'>
                        <button className='comment-but' style={{marginTop:10}}>确定</button>
                    </Link>
        </div>
        )
    }
}

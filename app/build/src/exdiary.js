import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Exdiary extends Component {
    constructor(){
        super();
        this.state={
            backgroundColor1:'#fff',
            color1:'#000',
            backgroundColor2:'#fff',
            color2:'#000',
            value1:'接受',
            value2:'婉拒',
        }
    }
    click1=()=>{
        this.setState({
            backgroundColor1:'#8bcca1',
            color1:'#fff',
            value1:'已接受',
        })
    }
    click2=()=>{
        this.setState({
            backgroundColor2:'#8bcca1',
            color2:'#fff',
            value2:'已婉拒',
        })
    }
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',backgroundColor:'#8bcca1',color:'#fff'}}>
                        <Link to='/anonymous'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <div className='exdiary-icon'>
                        <Link to='/select'><img src='src/images/加号.png'/></Link>
                        <Link to='miss'><img src='src/images/两个人.png'/></Link>
                        <Link to='/friend'><img src='src/images/加好友.png' style={{width:27,marginTop:7}}/></Link>
                    </div>
                    <div className='exdiary-div' style={{marginTop:10}}>
                    <div className='exdiary-divt'>
                        <div className='exchange-touxiang' style={{marginLeft:15}}>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exdiary-name'>
                            <p>快乐的代码机器</p>
                        </div>
                    </div>
                        <div className='exdiary-divb'>
                        <Link to='/detailsSimi'><div className='exdiary-divbl'>
                                <p>只要你主动，我们就会有故事</p>
                            </div></Link>
                            <div className='exdiary-divbr'>
                                <img src='src/images/锁.png'/>
                            </div>
                        </div>
                </div>

                <div className='friend-div'>
                    <div className='exdiary-divt'>
                        <div className='exchange-touxiang' style={{marginLeft:15}}>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exdiary-name'>
                            <p>快乐的代码机器</p>
                        </div>
                    </div>
                        <div className='friend-title'>
                                <p>向您发送了一个好友申请</p>
                            </div>
                            <div className='friend-content' style={{lineHeight:'20px',marginLeft:15}}>
                                <p>处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗，处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗，处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗，处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗</p>
                            </div>
                            <div className='friend-but'>
                                <input type='submit' value={this.state.value1} style={{borderTop:'2px solid #8bcca1',backgroundColor:this.state.backgroundColor1,color:this.state.color1,width:'50%',float:'left',height:40}} onClick={this.click1}/>
                                <input type='submit' value={this.state.value2} style={{borderTop:'2px solid #8bcca1',backgroundColor:this.state.backgroundColor2,color:this.state.color2,width:'50%',float:'left',height:40}} onClick={this.click2}/>
                            </div>
                    </div>

                    <div className='friend-div' style={{marginTop:10}}>
                    <div className='exdiary-divt'>
                        <div className='exchange-touxiang' style={{marginLeft:15}}>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exdiary-name'>
                            <p>快乐的代码机器</p>
                        </div>
                    </div>
                        <div className='friend-title'>
                                <p>您发送了一个好友申请</p>
                            </div>
                            <div className='friend-content' style={{paddingBottom:15,lineHeight:'20px',marginLeft:15}}>
                                <p>处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗，处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗，处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗处Q友吗</p>
                            </div>
                    </div>

                    <div className='friend-div' style={{marginTop:10}}>
                    <div className='exdiary-divt'>
                        <div className='exchange-touxiang' style={{marginLeft:15}}>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exdiary-name'>
                            <p>快乐的代码机器</p>
                        </div>
                    </div>
                        <div className='friend-title' style={{paddingBottom:5}}>
                                <p>对方接受了您的好友申请</p>
                            </div>
                    </div>

                    <div style={{paddingTop:40,width:'100%',height:30}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
                    </div>
                </div>
           
        )
    }
}

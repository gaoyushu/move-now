import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';
import { nonsense } from 'antd-mobile/lib/picker';
import {TabBar} from 'antd-mobile'

export default class Diary extends Component {
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
    tan=()=>{
        this.setState({
            opacity:0.2,
            display:'block',
        })
    }
    gongkai=()=>{
        this.setState({
            opacity:1,
            display:'none',
            display1:'block',
            display2:'none',
        })
    }
    simi=()=>{
        this.setState({
            opacity:1,
            display:'none',
            display2:'block',
            display1:'none',
        })
    }
    render() {
        let date=moment().format('YYYY / MM / DD');
        return (
                // <div style={{position:'relative',backgroundColor:'#707070',opacity:this.state.opacity2,display:this.state.display2,zIndex:this.state.zIndex2}}></div>
                <div className='comment' style={{position:'relative',zIndex:999}}>
                    <div style={{position:'relative',zIndex:999,opacity:this.state.opacity}}>
                    <div style={{position:'relative',width:'100%',height:'205px',backgroundColor:'#8bcca1',color:'#fff'}}>
                        
                        {/* <div className='diary-date'> */}
                            <p className='diary-date'>{date}</p>
                        {/* </div> */}
                        <div className='diary-word'>
                            <p style={{fontSize:'13px',textAlign:'center',marginTop:'12px'}}>"所有努力 是为了让自己也有光芒"</p>                            
                            <p style={{fontSize:'12px',textAlign:'center',marginTop:'12px'}}>@德卡先生的信箱</p>
                        </div>
                    </div>
                    <div style={{widows:'100%',height:40,backgroundColor:'#fff',position:'relative'}}>
                        <Link to='/edit1'><img src='src/images/加号.png' style={{float:'right',marginRight:10,marginTop:5}}/></Link>
                    </div>

                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5,position:'relative'}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'20px',textAlign:'center',paddingTop:5}}>01</p>
                                <p style={{fontSize:'11px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'>
                                <div className='message-diaryr'>
                                <p>冬天的意义哈哈哈哈哈哈哈哈哈哈或或或或或或</p>
                               
                            {/* </div> */}
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr'>
                                <p>冬天的意义唉唉唉唉唉</p>
                                
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr'>
                                <p>冬天的意义</p>
                                
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr'>
                                <p>冬天的意义</p>
                              
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr'>
                                <p>冬天的意义</p>
                               
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr'>
                                <p>冬天的意义</p>
                               
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className='message-div'> */}
                        <div className='message-diary' style={{marginTop:5}}>
                            <div className='message-diaryl'>
                                <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                            </div>
                            <Link to='details'><div className='message-diaryr'>
                                <p>冬天的意义</p>
                              
                            </div></Link>
                            <div id='message-diaryrr' onClick={this.tan}>
                                <img src='src/images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='src/images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/>
                            </div>
                        </div>
                    {/* </div> */}
                    
                    <div style={{paddingTop:40,paddingBottom:70,position:'relative',width:'100%'}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
                    </div>
                    </div>
                    <div id='tankuang' style={{display:this.state.display}}>
                        <button id='tankuang-but1' onClick={this.gongkai} >公开</button>
                        <button id='tankuang-but2' onClick={this.simi}>私密</button>
                    </div>
                    <div style={{
            position: "fixed",
            width: "100%",
            bottom:0,
            zIndex:'1001'
            }}
        >
            <TabBar
            unselectedTintColor="#707070"
            tintColor="#8bcca1"
            barTintColor="#fff"
            tabBarPosition='bottom'
            noRenderContent='true'
            >
            <TabBar.Item
                title="广场"
                key="广场"
                icon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/广场1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/广场.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selected={this.state.selectedTab ==="/square/follow"}
                onPress={() => {
                this.setState({
                    selectedTab: "/square/follow"
                });
                this.props.history.push('/square/follow');
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                icon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/交换1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/交换.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                title="交换"
                key="交换"
                selected={this.state.selectedTab === "/exchange"}
                onPress={() => {
                this.setState({
                    selectedTab: "/exchange"
                });
                this.props.history.push('/exchange');
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                icon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/日记1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/日记.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                title="日记"
                key="日记"
                selected={this.state.selectedTab === "/diary"}
                onPress={() => {
                this.setState({
                    selectedTab: "/diary"
                });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                icon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/我的1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(src/images/我的.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                title="我的"
                key="我的"
                selected={this.state.selectedTab === "/my"}
                onPress={() => {
                this.setState({
                    selectedTab: "/my"
                });
                this.props.history.push('/my');
                }}
            >
            </TabBar.Item>
            </TabBar>
        </div>

                </div>
                
           
        )
    }
}

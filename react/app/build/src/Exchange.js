import React, { Component } from 'react'
import {TabBar} from 'antd-mobile'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class Exchange extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/exchange"
        }
      }
    render() {
        return (
            <div>
                <div className='exchange-head'>
                    <Link to='/sentenceList'><img src='src/images/我的2.png'/></Link>
                    <Link to='/sentence'><img src='src/images/加号1.png'/></Link>
                    <img src='src/images/刷新1.png'/>
                    {/* <Link to='/exdiary'><img src='src/images/页面.png'/></Link> */}
                </div>
                <div className='exchange-div' style={{marginTop:50}}>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                            <p className='exchange-d'>2019/12/12 16:32</p>
                        </div>
                        
                    </div>
                    <Link to='/sentenceYou'><div className='exchange-divb'>
                        <p>只要你主动，我们就会有故事</p>
                    </div></Link>
                </div>

                <div className='exchange-div'>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                            <p className='exchange-d'>2019/12/12 16:32</p>
                        </div>
                    </div>
                    <div className='exchange-divb'>
                        <p>只要你主动，我们就会有故事</p>
                    </div>
                </div>

                <div className='exchange-div'>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                            <p className='exchange-d'>2019/12/12 16:32</p>
                        </div>
                    </div>
                    <div className='exchange-divb'>
                        <p>只要你主动，我们就会有故事</p>
                    </div>
                </div>

                <div className='exchange-div'>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                            <p className='exchange-d'>2019/12/12 16:32</p>
                        </div>
                    </div>
                    <div className='exchange-divb'>
                        <p>只要你主动，我们就会有故事</p>
                    </div>
                </div>

                <div className='exchange-div'>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                            <p className='exchange-d'>2019/12/12 16:32</p>
                        </div>
                    </div>
                    <div className='exchange-divb'>
                        <p>只要你主动，我们就会有故事</p>
                    </div>
                </div>

                <div className='exchange-div'>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                            <p className='exchange-d'>2019/12/12 16:32</p>
                        </div>
                    </div>
                    <div className='exchange-divb'>
                        <p>只要你主动，我们就会有故事</p>
                    </div>
                </div>

                <div style={{paddingTop:40,paddingBottom:70,position:'relative',width:'100%'}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
                    </div>

                <div
            style={{
            position: "fixed",
            width: "100%",
            bottom:0
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
                selected={this.state.selectedTab === "/square"}
                onPress={() => {
                this.setState({
                    selectedTab: "/square"
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
                this.props.history.push('/diary')
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

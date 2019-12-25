import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class My extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/my"
        }
    }
    render() {
        return (
            <div>
                <div className='my-head'>
                    <div className='my-headl'>
                        <div className='my-img'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                    </div>
                    <div className='my-headr'>
                        <p className='my-name'>快乐的代码机器</p>
                        <p className='my-sign'>我不是真正的快乐</p>
                    </div>
                </div>
                <div className='my-three'>
                    <div className='my-three1'>
                        <p className='my-p1'>10</p>
                        <p className='my-p2'>关注</p>
                    </div>
                    <div className='my-three1'>
                        <p className='my-p1'>10</p>
                        <p className='my-p2'>粉丝</p>
                    </div>
                    <Link to='anonymous'><div className='my-three1' style={{borderRight:'0px'}}>
                        <p className='my-p1'>5</p>
                        <p className='my-p2'>好友</p>
                    </div></Link>
                </div>
                <div className='my-two'>
                    <div className='my-twol'>
                        <div className='my-twol-img'>
                            <img src='src/images/消息.png'/>
                        </div>
                        <Link to='mailbox'><div className='my-twol-p'>
                            <p>消息信箱</p>
                        </div></Link>
                    </div>
                    <div className='my-twor'>
                    <div className='my-twol-img'>
                            <img src='src/images/个人信息.png'/>
                        </div>
                        <Link to='/person'><div className='my-twol-p'>
                            <p>个人信息</p>
                        </div></Link>
                    </div>
                </div>
                <Link to='/set'><div className='my-set'>
                    <p>我的设置</p>
                </div></Link>
                <div className='my-set'>
                    <p>用户反馈</p>
                </div>
                <Link to='/about'><div className='my-set'>
                    <p>关于我们</p>
                </div></Link>
                <Link to='/'><button className='my-but'>退出登录</button></Link>
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
                selected={this.state.selectedTab === "/square/follow"}
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
                }}
            >
            </TabBar.Item>
            </TabBar>
        </div>
      </div>
        )
    }
}

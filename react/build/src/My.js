import React, { Component } from 'react'
import {TabBar, Toast} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class My extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/my",
            data:[],
            guanzhu:'',
            fans:'',
            friend:''

        }
    }
      componentDidMount(){
        // console.log(this.props.location.pathname);
            fetch('http://116.62.14.0:8666/mine/1').then(res =>res.json())
                .then(res =>{
             console.log(res); 
             this.setState({
                 data:res.dataone,
                 guanzhu:res.datatwo,
                 fans:res.datathree,
                 friend:res.datafour

             })
            })
            
        }
        fun=()=>{
            fetch('http://116.62.14.0:8666/user/exit/1')
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res);
                if(res.data.status==-1){
                    Toast.fail(res.data,1)
                }else{
                    Toast.success(res.data,1)
                }
                setTimeout(()=>{
                    this.props.history.push('/')
                },1000)
            });

        }


    render() {
        return (
            <div>
                <div className='my-head'>
                    <div className='my-headl'>
                        <div className='my-img'>
                            <img src='http://116.62.14.0:8666/api/image/8'/>
                        </div>
                    </div>
                    <div className='my-headr'>
                        <p className='my-name'>{this.state.data.uname}</p>
                        <p className='my-sign'>{this.state.data.uintroduce}</p>
                    </div>
                </div>
                <div className='my-three'>
                    <div className='my-three1'>
                        <p className='my-p1'>{this.state.guanzhu}</p>
                        <p className='my-p2'>关注</p>
                    </div>
                    <div className='my-three1'>
                        <p className='my-p1'>{this.state.fans}</p>
                        <p className='my-p2'>粉丝</p>
                    </div>
                    <Link to='anonymous'><div className='my-three1' style={{borderRight:'0px'}}>
                        <p className='my-p1'>{this.state.friend}</p>
                        <p className='my-p2'>好友</p>
                    </div></Link>
                </div>
                <div className='my-two'>
                    <div className='my-twol'>
                        <div className='my-twol-img'>
                            <img src='http://116.62.14.0:8666/api/image/39'/>
                        </div>
                        <Link to='mailbox'><div className='my-twol-p'>
                            <p>消息信箱</p>
                        </div></Link>
                    </div>
                    <div className='my-twor'>
                    <div className='my-twol-img'>
                            <img src='http://116.62.14.0:8666/api/image/11'/>
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
                <button className='my-but' onClick={this.fun}>退出登录</button>
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
                        "url(http://116.62.14.0:8666/api/image/31) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(http://116.62.14.0:8666/api/image/32) center center /  21px 21px no-repeat"
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
                        "url(http://116.62.14.0:8666/api/image/16) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(http://116.62.14.0:8666/api/image/17) center center /  21px 21px no-repeat"
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
                        "url(http://116.62.14.0:8666/api/image/37) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(http://116.62.14.0:8666/api/image/38) center center /  21px 21px no-repeat"
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
                        "url(http://116.62.14.0:8666/api/image/34) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(http://116.62.14.0:8666/api/image/36) center center /  21px 21px no-repeat"
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

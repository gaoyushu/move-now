import React, { Component } from 'react'
import {TabBar} from 'antd-mobile'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class Exchange extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/exchange",
            data:[],
            ok:-1
        }
      }
      componentDidMount(){
        fetch('http://116.62.14.0:8666/change/list')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data

            })
        });

      }

    render() {
        // console.log(this.state.data.shortdes_id)
        // var path = {
        //     pathname:'/sentenceYou',
        //                         state:{
        //                             shortdes_id:this.state.data.shortdes_id
                                
        //                         }
        //   }
        return (
            <div>
                <div className='exchange-head'>
                    <Link to='/sentenceList'><img src='http://116.62.14.0:8666/api/image/35'/></Link>
                    <Link to={{
                        pathname:'/sentence',
                        state:{
                            ok:this.state.ok
                        }
                    }}><img src='http://116.62.14.0:8666/api/image/25'/></Link>
                    <img src='http://116.62.14.0:8666/api/image/23'/>
                    {/* <Link to='/exdiary'><img src='src/images/页面.png'/></Link> */}
                </div>
                {this.state.data.map((item,key)=>(
                    key==0?
                    <Link to={{
                        pathname:'/sentenceYou',
                        state:{
                            shortdes_id:item.shortdes_id
                        }
                    }}><div className='exchange-div' style={{marginTop:60}}>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='http://116.62.14.0:8666/api/image/5'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                <p className='exchange-d'>{item.dtime}</p>
                        </div>
                        
                    </div>
                    <div className='exchange-divb'>
                <p>{item.shortdes}</p>
                    </div>
                </div></Link>
                    :
                    <div className='exchange-div' style={{marginTop:10}}>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang'>
                            <img src='http://116.62.14.0:8666/api/image/5'/>
                        </div>
                        <div className='exchange-name'>
                            <p className='exchange-n'>朝花夕拾</p>
                <p className='exchange-d'>{item.dtime}</p>
                        </div>
                        
                    </div>
                    <Link to={{
                        pathname:'/sentenceYou',
                        state:{
                            shortdes_id:item.shortdes_id
                        }
                    }}><div className='exchange-divb'>
                <p>{item.shortdes}</p>
                    </div></Link>
                </div>
                
                ))}
                {/* <div className='exchange-div'>
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
                </div> */}

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

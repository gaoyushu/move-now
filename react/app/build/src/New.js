import React, { Component } from 'react'
import {TabBar,Tabs} from 'antd-mobile'
import {Link,Route} from 'react-router-dom';
import SquareBranch from './SquareBranch';
export default class New extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/square/new",
            selectNew:{
                color:'#8bcca1',
                borderBottom:'4px solid #ffdf41'
            },
            selectFollow:{
                color:'#000',
                borderBottom:'1px solid #fff'
            },
            selectHot:{
                color:'#000',
                borderBottom:'1px solid #fff'
            }
    
        }
      }
    render() {
        let url = this.props.match.url;
        return (
            <div>
                <div style={{height:'45px',width:'100%',float:'left'}}>

                </div>
                <div className='s-headers'>
                    <Link to={`/square/follow`} style={{color:this.state.selectFollow.color,borderBottom:this.state.selectFollow.borderBottom}}
                    // onClick={this.handleChangeFollow}
                    >关注</Link>
                    <Link to={`/square/new`} style={{color:this.state.selectNew.color,borderBottom:this.state.selectNew.borderBottom}}
                    // onClick={this.handleChangeNew}
                    >最新</Link>
                    <Link to={`/square/hot`} style={{color:this.state.selectHot.color,borderBottom:this.state.selectHot.borderBottom}}
                    // onClick={this.handleChangeHot}
                    >最热</Link>
                </div>
                <Route path={`/square/new`} component={SquareBranch}/>
                {/* <Route path={url+`/follow`} component={SquareBranch}/>
                <Route path={url+`/hot`} component={SquareBranch}/> */}
                {/* <Route path={`${url}`} component={SquareBranch} /> */}
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
                selected={this.state.selectedTab === "/square/new"}
                onPress={() => {
                this.setState({
                    selectedTab: "/square/new"
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

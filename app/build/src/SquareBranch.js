import React, { Component } from 'react'
import {TabBar,Tabs} from 'antd-mobile'
import {Link,Route} from 'react-router-dom';
export default class SquareBranch extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/square",
            likeImg:'src/images/喜欢.png',
            likeImg1:'src/images/喜欢1.png',
            likeC:0,
            data:[]
        }
      }
      componentDidMount(){
        console.log(this.props.location.pathname);
        let arr=this.props.location.pathname.split('/');
        var datas=arr.length===2?'follow':arr[2];
        if(datas==='follow'){
            fetch('http://116.62.14.0:8080/zhaohuaxishi/square/follow/1').then(res =>res.json())
                .then(res =>{
             console.log(res); 
             this.setState({
                 data:res.data

             })
            },[]);
        }else{
            fetch('http://116.62.14.0:8080/zhaohuaxishi/square/'+datas).then(res =>res.json())
        .then(res =>{
             console.log(res); 
             this.setState({
                 data:res.data

             })
            },[]);
        }

      }
      setLike=()=>{
        if(this.state.likeImg==='src/images/喜欢.png'){
            this.setState({
                likeImg:'src/images/喜欢1.png',
                likeC:this.state.likeC+1
            })
        }
        else{
            this.setState({
                likeImg:'src/images/喜欢.png',
                likeC:this.state.likeC-1
            })
        }
      }
    render() {
        let arr=this.props.location.pathname.split('/');
        var data=arr.length===2?'follow':arr[2];
        let url=data;
        return (
            <div>
                {
                    this.state.data.map((item,key)=>(
                        <div className='s-c'>
                    <div className='s-top' >
                        <Link to=''><div className='s-top-h'>
                            <img src="src/images/logo.png" />
                        </div></Link>
                        <div className='s-top-t'>
                            {item.uname}
                        </div>
                        <div className='s-top-time'>
                        {item.dtime}
                        </div>
                    </div>
                    <Link to='/home'><div className='s-center'>
                    <p style={{wordWrap:'break-word'}}>{item.dtitle}</p>
                    </div></Link>
                    <div className='s-bottom'>
                        <div className='s-comment'>
                            <img src='src/images/评论.png'/>
                            {item.comments}
                        </div>
                        <div class='s-like'>
                            <img src={this.state.likeImg} onClick={this.setLike} />
                            {item.dpraise}
                        </div>
                    </div>
                    
                </div>
                    ))
                }
                <div style={{width:'100%',height:'45px',float:'left'}} >

                </div>
                {/* <div className='s-c'>
                    <div className='s-top' >
                        <div className='s-top-h'>
                            <img src="/images/logo.png" />
                        </div>
                        <div className='s-top-t'>
                            {this.state.data.uname}
                        </div>
                        <div className='s-top-time'>
                        {this.state.data.dtime}
                        </div>
                    </div>
                    <div className='s-center'>
                    {this.state.data.dtitle}
                    </div>
                    <div className='s-bottom'>
                        <div className='s-comment'>
                            <img src='/images/评论.png'/>
                            0
                        </div>
                        <div class='s-like'>
                            <img src={this.state.likeImg} onClick={this.setLike} />
                            {this.state.likeC}
                        </div>
                    </div>
                    
                </div> */}
                {/* <div className='s-c'>
                    <div className='s-top' >
                        <div className='s-top-h'>
                            <img src="/images/logo.png" />
                        </div>
                        <div className='s-top-t'>
                            朝花夕拾
                        </div>
                        <div className='s-top-time'>
                            2019/12/10
                        </div>
                    </div>
                    <div className='s-center'>
                        我在用朝花夕拾
                    </div>
                    <div className='s-bottom'>
                        <div className='s-comment'>
                            <img src='/images/评论.png'/>
                            0
                        </div>
                        <div class='s-like'>
                            <img src={this.state.likeImg} onClick={this.setLike} />
                            {this.state.likeC}
                        </div>
                    </div>
                    
                </div> */}
                {/* <div
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
                        "url(images/广场1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(images/广场.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selected={this.state.selectedTab === "/square"}
                onPress={() => {
                this.setState({
                    selectedTab: "/square"
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
                        "url(images/交换1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(images/交换.png) center center /  21px 21px no-repeat"
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
                        "url(images/日记1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(images/日记.png) center center /  21px 21px no-repeat"
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
                        "url(images/我的1.png) center center /  21px 21px no-repeat"
                    }}
                />
                }
                selectedIcon={
                <div
                    style={{
                    width: "22px",
                    height: "22px",
                    background:
                        "url(images/我的.png) center center /  21px 21px no-repeat"
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
        </div> */}
            </div>
        )
    }
}

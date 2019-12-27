import React, { Component } from 'react'
import {TabBar,Carousel, WingBlank } from 'antd-mobile'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class Exchange extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/exchange",
            data:[],
            ok:-1,
            // data1: ['1', '2', '3'],
            // imgHeight: 176,
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

        setTimeout(() => {
            this.setState({
              data1: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
          }, 100);

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
                 {/* <WingBlank style={{margin:0,position:'relative',top:'45px'}}>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data1.map(val => (
            <a
              key={val}
            //   href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={'http://116.62.14.0:8666/api/image/8'}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank> */}
                <div className='exchange-head'>
                    <Link to='/sentenceList'><img src='http://116.62.14.0:8666/api/image/35'/></Link>
                    <Link to='/anonymous'><img src='http://116.62.14.0:8666/api/image/52'/></Link>
                    <img src='http://116.62.14.0:8666/api/image/23'/>
                    {/* <Link to='/exdiary'><img src='src/images/页面.png'/></Link> */}
                </div>
                {typeof(this.state.data)!=='string'?
                this.state.data.map((item,key)=>(
                    key==0?
                    <Link to={{
                        pathname:'/sentenceYou',
                        state:{
                            shortdes_id:item.shortdes_id
                        }
                    }} key={key}><div className='exchange-div' style={{marginTop:60}} key={key}>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang' style={{backgroundColor:'#000'}}>
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
                    <div className='exchange-div' style={{marginTop:10}} key={key}>
                    <div className='exchange-divt'>
                        <div className='exchange-touxiang' style={{backgroundColor:'#000'}}>
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
                
                )):<div> 没有一句话或获取最新一句话失败！" </div>}
                <Link to={{
                        pathname:'/sentence',
                        state:{
                            ok:this.state.ok
                        }
                    }}><img src='http://116.62.14.0:8666/api/image/26' style={{position:'fixed',zIndex:'1000',bottom:65,left:20,width:40,height:40}}/></Link>

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

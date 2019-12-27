import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
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
            selectedTab: "/diary",
            metto:{},
            mstatus:0,
            list:[],
            day:'',
            month:'',
            year:'',
            privateImg:'http://116.62.14.0:8666/api/image/40',
            publicImg:'http://116.62.14.0:8666/api/image/41'
            // zIndex:1000

        }
    }
    // tan=()=>{
    //     this.setState({
    //         opacity:0.2,
    //         display:'block',
    //     })
    // }
    // gongkai=()=>{
    //     this.setState({
    //         opacity:1,
    //         display:'none',
    //     })
    // }
    // simi=()=>{
    //     this.setState({
    //         opacity:1,
    //         display:'none',
    //     })
    // }
    componentDidMount(){
        
        fetch('http://116.62.14.0:8666/diary/metto').then(res =>{ return res.json() })
        .then(res =>{ 
            console.log(res)
            this.setState({
                metto:res.data,
                mstatus:res.status

            },()=>{
                if(this.state.mstatus===-1){
                    var s=this.state.metto;
                    s.mtext='一日一文获取失败！';
                    this.setState({
                        metto:s
                    })
                }
            })
         });
         fetch('http://116.62.14.0:8666/diary/list/'+localStorage.getItem('token')).then(res =>{ return res.json() })
         .then(res =>{ 
             console.log(res.data);
             if(res.data!=='获取日记列表失败！'){
             var ss=res.data;
             for(var i=0;i<ss.length;i++){
               var time =ss[i].dtime;
               var time1=time.split(' ')[0];
               var time2=time1.split('/');
               var year=time2[2];
               var month=time2[0];
               var day=time2[1];
               ss[i].year=year;
               ss[i].month=month;
               ss[i].day=day;
             }
            this.setState({
                list:ss
            })
        }else{
            Toast.info('开始你的日记之旅吧',1)
        }
          });


    }
    setChange=(idx)=>{
        console.log(this.state.list[idx].did)
        fetch('http://116.62.14.0:8666/diary/type/'+this.state.list[idx].did, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token:localStorage.getItem('token'), diaryid:`${this.state.list[idx].did}`})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res);
                if(res.status===0){
                    Toast.success(res.data,1)
                    
                }
             });

        if(this.state.list[idx].dtype==='private'){
            let arrs=this.state.list;
            arrs[idx].dtype='public';
            this.setState({
                list:arrs
                // likeImg:'/images/喜欢1.png',
                // likeC:this.state.likeC+1
            })
        }
        else{
            let arrs=this.state.list;
            arrs[idx].dtype='private';
            this.setState({
                list:arrs
                // likeImg:'/images/喜欢.png',
                // likeC:this.state.likeC-1
            })
        }
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
                            <p style={{fontSize:'13px',textAlign:'center',marginTop:'12px'}}>{this.state.metto.mtext}</p>                            
        <p style={{fontSize:'12px',textAlign:'center',marginTop:'12px'}}>{this.state.metto.author}</p>
                        </div>
                    </div>
                    {/* <div style={{widows:'100%',height:40,backgroundColor:'#fff',position:'relative'}}>
                        <Link to='/edit1'><img src='http://116.62.14.0:8666/api/image/26' style={{float:'right',marginRight:10,marginTop:5}}/></Link>
                    </div> */}
                    </div>

                    {this.state.list.map((item,idx)=>(
                        <div className='message-diary' style={{marginTop:5,position:'relative'}} key={idx} onChange={()=>this.setTime()}>
                            <div className='message-diaryl'>
                    <p style={{fontSize:'20px',textAlign:'center',paddingTop:5}}>{item.day}</p>
                    <p style={{fontSize:'11px',color:'#8bcca1',textAlign:'center'}}>{item.year}/{item.month}</p>
                            </div>
                            <Link to={{
                        pathname:'/details',
                        state:{
                            did:item.did
                        }
                    }}>
                                <div className='message-diaryr'>
                                <p>{item.dtitle}</p>
                               
                            {/* </div> */}
                            </div></Link>
                            <div id='message-diaryrr' style={{marginTop:15}} key={idx}>
                            <img src={item.dtype==='private'?this.state.privateImg:this.state.publicImg} style={{width:25,height:25}} onClick={()=>this.setChange(idx)} />
                                {/* <img src='./images/解锁.png' id='message-diaryrr-img1' style={{display:this.state.display1}}/>
                                <img src='./images/锁.png' id='message-diaryrr-img2' style={{display:this.state.display2}}/> */}
                            </div>
                        </div>
                    ))}
                    <Link to='/edit1'><img src='http://116.62.14.0:8666/api/image/26' style={{position:'fixed',zIndex:'1000',bottom:65,left:20,width:40,height:40}}/></Link>

                        {/* <div className='message-diary' style={{marginTop:5}}>
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
                        </div> */}
                     
{/* 

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
                        </div> */}
                 
                    
                    <div style={{paddingTop:40,paddingBottom:70,position:'relative',width:'100%'}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
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

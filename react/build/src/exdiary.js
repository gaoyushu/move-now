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
            data:[],
            reply:0,
            aid:-1,
            friend:[]
        }
    }
    
      componentDidMount(){
        fetch('http://116.62.14.0:8666/changed/detail/'+localStorage.getItem('token')+'/'+this.props.location.state.shortdes_id)
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             
             
             this.setState({
                data:res.data

            })
            // var arr=[];
            // for(var i=0;i<res.data.length;i++){
            //     if(res.data[i].type=='friend'){
            //         arr.push(res.data[i]);
            //         this.setState({
            //             friend:arr
            //         })
            //     }
            // }
            // console.log(this.state.friend);
        });
        
               
      }
    click1=(key)=>{
        // for(var i=0;i<this.state.data.length;i++){
            // console.log(this.state.data[i].isReply); 
            if(this.state.data[key].isReply==false){
                
                this.setState({
                    aid:this.state.data[key].aid
                },()=>{
                    this.setState({
                        backgroundColor1:'#8bcca1',
                        color1:'#fff',
                        value1:'已接受',
                        reply:1
                    },()=>{
                        console.log(this.state.reply);
                        console.log(this.state.aid);
                        fetch('http://116.62.14.0:8666/changed/repfri',{
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    
                    },
                    body: JSON.stringify({ token:localStorage.getItem('token'),aid:`${this.state.aid}`,reply:`${this.state.reply}`})})
                    .then(res =>{ return res.json() })
                    .then(res=>{ 
                        console.log(res);
                        // console.log(this.state.reply); 
                    });
                    })
                })
            }
        // }
          
    }
    click2=(key)=>{
        
        // for(var i=0;i<this.state.data.length;i++){
            console.log(this.state.data[key].isReply); 
            if(this.state.data[key].isReply==false){
                
                this.setState({
                    aid:this.state.data[key].aid
                },()=>{
                    this.setState({
                        backgroundColor2:'#8bcca1',
                        color2:'#fff',
                        value2:'已婉拒',
                        reply:-1
                    },()=>{
                        console.log(this.state.reply);
                        console.log(this.state.aid);
                        fetch('http://116.62.14.0:8666/changed/repfri',{
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    
                    },
                    body: JSON.stringify({ token:localStorage.getItem('token'),aid:`${this.state.aid}`,reply:`${this.state.reply}`})})
                    .then(res =>{ return res.json() })
                    .then(res=>{ 
                        console.log(res);
                        // console.log(this.state.reply); 
                    });
                    })
                })
            }
        // }
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
                        <Link to={{
                            pathname:'/select',
                            state:{
                                shortdes_id:this.props.location.state.shortdes_id
                            }
                        }}><img src='http://116.62.14.0:8666/api/image/26'/></Link>
                        <Link to={{
                            pathname:'/miss',
                            state:{
                                shortdes_id:this.props.location.state.shortdes_id
                            }
                        }}><img src='http://116.62.14.0:8666/api/image/10'/></Link>
                        <Link to={{
                            pathname:'/friend',
                            state:{
                                shortdes_id:this.props.location.state.shortdes_id
                            }
                        }}><img src='http://116.62.14.0:8666/api/image/27' style={{width:27,marginTop:7}}/></Link>
                    </div>
                    {this.state.data.map((item,key)=>(
                        item.type=='exchange'
                    ?   
                        item.isRead=='true'
                        ?
                                item.isMe=='true'
                                ?
                                <div className='exdiary-div' style={{marginTop:10}}>
                                    <div className='exdiary-divt'>
                                        <div className='exchange-touxiang' style={{marginLeft:15,backgroundColor:'#000'}}>
                                            <img src='http://116.62.14.0:8666/api/image/5'/>
                                        </div>
                                        <div className='exdiary-name'>
                                            <p>朝花夕拾</p>
                                        </div>
                                    </div>
                                    <div className='exdiary-divb'>
                                        <Link to={{
                                pathname:'/detailsSimi',
                                state:{
                                    did:item.diaryid,
                                    shortdes_id:this.props.location.state.shortdes_id
                                }
                            }}><div className='exdiary-divbl' style={{textAlign:'center'}}>
                                            <p>{item.title}</p>
                                        </div></Link>
                                        {/* <div className='exdiary-divbr'>
                                            <img src='src/images/锁.png'/>
                                        </div> */}
                                    </div>
                                </div>
                                :
                                <div className='exdiary-div' style={{marginTop:10}}>
                                    <div className='exdiary-divt'>
                                    <div className='miss-touxiang' style={{marginRight:10,backgroundColor:'#000'}}>
                                        <img src='http://116.62.14.0:8666/api/image/5'/>
                                    </div>
                                    <div className='miss-name' style={{fontSize:'16px',fontWeight:'bold'}}>
                                        <p>朝花夕拾</p>
                                    </div>
                                    </div>
                                    <div className='exdiary-divb'>
                                        <Link to={{
                                pathname:'/detailsSimi',
                                state:{
                                    did:item.diaryid,
                                    shortdes_id:this.props.location.state.shortdes_id
                                }
                            }}><div className='exdiary-divbl' style={{textAlign:'center'}}>
                                            <p>{item.title}</p>
                                        </div></Link>
                                        {/* <div className='exdiary-divbr'>
                                            <img src='src/images/锁.png'/>
                                        </div> */}
                                    </div>
                                </div>

                        :
                            item.isMe=='true'
                                    ?
                                    <div className='exdiary-div' style={{marginTop:10}}>
                                        <div className='exdiary-divt'>
                                            <div className='exchange-touxiang' style={{marginLeft:15,backgroundColor:'#000'}}>
                                                <img src='http://116.62.14.0:8666/api/image/5'/>
                                            </div>
                                            <div className='exdiary-name'>
                                                <p>朝花夕拾</p>
                                            </div>
                                        </div>
                                        <div className='exdiary-divb'>
                                            {/* <Link to={{
                                    pathname:'/detailsSimi',
                                    state:{
                                        did:item.diaryid
                                    }
                                }}> */}
                                    <div className='exdiary-divbl' style={{textAlign:'center'}}>
                                                <p>{item.title}</p>
                                            </div>
                                            {/* </Link> */}
                                            <div className='exdiary-divbr'>
                                                <img src='http://116.62.14.0:8666/api/image/49'/>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='exdiary-div' style={{marginTop:10}}>
                                        <div className='exdiary-divt'>
                                        <div className='miss-touxiang' style={{marginRight:10,backgroundColor:'#000'}}>
                                            <img src='http://116.62.14.0:8666/api/image/5'/>
                                        </div>
                                        <div className='miss-name' style={{fontSize:'16px',fontWeight:'bold'}}>
                                            <p>朝花夕拾</p>
                                        </div>
                                        </div>
                                        <div className='exdiary-divb'>
                                            {/* <Link to={{
                                    pathname:'/detailsSimi',
                                    state:{
                                        did:item.diaryid
                                    }
                                }}> */}
                                    <div className='exdiary-divbl' style={{textAlign:'center'}}>
                                                <p>{item.title}</p>
                                            </div>
                                            {/* </Link> */}
                                            <div className='exdiary-divbr'>
                                                <img src='http://116.62.14.0:8666/api/image/49'/>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                
                               
                    
                    :    
                        item.isMe=='false'
                        ?
                        
                        <div className='friend-div'>
                            <div className='exdiary-divt'>
                                <div className='exchange-touxiang' style={{float:"right",marginRight:15,backgroundColor:'#000'}}>
                                    <img src='http://116.62.14.0:8666/api/image/5'/>
                                </div>
                                <div className='exdiary-name' style={{float:"right",marginRight:15}}>
                                    <p>快乐的代码机器</p>
                                </div>
                            </div>
                            <div className='friend-title' style={{textAlign:'center',marginLeft:0}}>
                                <p>向您发送了一个好友申请</p>
                            </div>
                            <div className='friend-content' style={{lineHeight:'20px',marginLeft:15,marginTop:5}}>
                                <p>{item.content}</p>
                            </div>
                            {!item.isReply
                            ?<div className='friend-but'>
                                <input type='submit' value={this.state.value1} style={{borderTop:'2px solid #8bcca1',backgroundColor:this.state.backgroundColor1,color:this.state.color1,width:'50%',float:'left',height:40}} onClick={()=>this.click1(key)}/>
                                <input type='submit' value={this.state.value2} style={{borderTop:'2px solid #8bcca1',backgroundColor:this.state.backgroundColor2,color:this.state.color2,width:'50%',float:'left',height:40}} onClick={()=>this.click2(key)}/>
                                {/* <p>1111111111111</p> */}
                            </div>
                            :
                                !item.reply
                                ?<div className='friend-but'>
                                    <input type='submit' value='接受' style={{borderTop:'2px solid #8bcca1',backgroundColor:'#fff',color:'#8bcca1',width:'50%',float:'left',height:40}} />
                                    <input type='submit' value='已婉拒' style={{borderTop:'2px solid #8bcca1',backgroundColor:'#8bcca1',color:'#fff',width:'50%',float:'left',height:40}} />
                                </div>
                                :<div className='friend-but'>
                                    <input type='submit' value='已接受' style={{borderTop:'2px solid #8bcca1',backgroundColor:'#8bcca1',color:'#fff',width:'50%',float:'left',height:40}} />
                                    <input type='submit' value='婉拒' style={{borderTop:'2px solid #8bcca1',backgroundColor:'#fff',color:'#8bcca1',width:'50%',float:'left',height:40}} />
                                </div>
                           
                            }
                        </div>
                        : 
                        <div className='friend-div'>
                            <div className='exdiary-divt'>
                                <div className='exchange-touxiang' style={{marginLeft:15,backgroundColor:'#000'}}>
                                    <img src='http://116.62.14.0:8666/api/image/5'/>
                                </div>
                                <div className='exdiary-name'>
                                    <p>快乐的代码机器</p>
                                </div>
                            </div>
                                <div className='friend-title'>
                                        <p>您发送了一个好友申请</p>
                                    </div>
                                    <div className='friend-content' style={{lineHeight:'20px',marginLeft:15}}>
                                        <p>{item.content}</p>
                                    </div>
                                    {!item.isReply

                                    ?<div className='friend-but' style={{backgroundColor:'#8bcca1',paddingTop:0,marginTop:20,color:'#fff',textAlign:'center',lineHeight:'40px',height:40}}>
                                        请求已发送
                                    </div>
                                    :!item.reply
                                        ?<div className='friend-but' style={{backgroundColor:'#8bcca1',paddingTop:0,marginTop:20,color:'#fff',textAlign:'center',lineHeight:'40px',height:40}}>
                                            对方已婉拒
                                        </div>
                                        :<div className='friend-but' style={{backgroundColor:'#8bcca1',paddingTop:0,marginTop:20,color:'#fff',textAlign:'center',lineHeight:'40px',height:40}}>
                                            对方已同意
                                        </div>
                                    }       
                            </div>
                    ))}
                    
               

               

                    {/* <div className='friend-div' style={{marginTop:10}}>
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
                    </div> */}

                    <div style={{paddingTop:40,width:'100%',height:30}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
                    </div>
                </div>
           
        )
    }
}

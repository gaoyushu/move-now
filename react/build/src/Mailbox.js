import React, { Component } from 'react';
import { Accordion, List,Toast } from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Mailbox extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            data1:[],
            datap:[],
            dataz:[],
            reply:0,
            value1:[],
            value2:[]
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8666/news/exchange/1')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             var arr=[];
             var brr=[];
             for(var i=0;i<res.data.length;i++){
             if(res.data[i].astatus=='0'){
                 arr[i]='接受';
                 brr[i]='拒绝';
                 
             }
             else if(res.data[i].astatus=='1'){
               arr[i]='已接受';
               brr[i]='拒绝';
             }
             else{
                arr[i]='接受';
                brr[i]='已拒绝'
             }
            }
             this.setState({
                data:res.data,
                value1:arr,
                value2:brr
    
            })
        });
        fetch('http://116.62.14.0:8666/news/comment/1')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res);
             if(res.data!=='您没有评论消息！'){
             this.setState({
                datap:res.data
    
            },()=>{
                var datas=this.state.datap;
                for(var i=0;i<datas.length;i++){
                    if(datas[i].dtime){
                        var time=datas[i].dtime.split(' ')[0];
                        var time1=time.split('/');
                        var year=time1[0];
                        var month=time1[1];
                        var day=time1[2];
                        datas[i].year=year;
                        datas[i].month=month;
                        datas[i].day=day;
                        this.setState({
                            datap:datas
                        })
                    }
                    else{
                        datas[i].year='2019';
                        datas[i].month='12';
                        datas[i].day='1';
                        this.setState({
                            datap:datas
                        })
                    }
                }

            })}
        });
        fetch('http://116.62.14.0:8666/news/good/1')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             if(res.data!=='您没有点赞消息！'){
             this.setState({
                dataz:res.data
    
            },()=>{
                var datas=this.state.dataz;
                for(var i=0;i<datas.length;i++){
                    if(datas[i].dtime){
                        var time=datas[i].dtime.split(' ')[0];
                        var time1=time.split('/');
                        var year=time1[0];
                        var month=time1[1];
                        var day=time1[2];
                        datas[i].year=year;
                        datas[i].month=month;
                        datas[i].day=day;
                        this.setState({
                            dataz:datas
                        })
                    }
                    else{
                        datas[i].year='2019';
                        datas[i].month='12';
                        datas[i].day='1';
                        this.setState({
                            dataz:datas
                        })
                    }
                }

            })}
        });
        fetch('http://116.62.14.0:8666/news/myreq/1')
        .then(res =>{ return res.json() })
        .then(res =>{ 
            console.log(res); 
            this.setState({
                data1:res.data
            })
        });

        
      }
      click1=(key)=>{
          console.log(this.state.data[key].aid);
          var arr=[];
          for(var i=0;i<this.state.data.length;i++){
              arr[i]=this.state.value1[i]
          }
          arr[key]='已接受'
          this.setState({
              reply:1,
              value1:arr
          },()=>{
              console.log(this.state.reply)
              console.log(this.state.data[key].aid);
              if(this.state.data[key].astatus=='0'){
              fetch('http://116.62.14.0:8666/news/replyreq', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ aid:`${this.state.data[key].aid}`,reply:`${this.state.reply}`})})
                .then(res =>{ return res.json() })
                .then(res =>{ 
                    console.log(res); 
                    Toast.success(res.data,1)
                });}

                        })

      }  
      click2=(key)=>{
        console.log(this.state.data[key].aid);
        var arr=[];
        for(var i=0;i<this.state.data.length;i++){
            arr[i]=this.state.value2[i]
        }
        arr[key]='已拒绝'
        this.setState({
            reply:-1,
            value2:arr
        },()=>{
            console.log(this.state.reply)
            console.log(this.state.data[key].aid);
            if(this.state.data[key].astatus=='0'){
            fetch('http://116.62.14.0:8666/news/replyreq', {
              method: 'PUT',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ aid:`${this.state.data[key].aid}`,reply:`${this.state.reply}`})})
              .then(res =>{ return res.json() })
              .then(res =>{ 
                  console.log(res); 
                  Toast.success(res.data,1)
              });}

                      })

    }  
    render() {
        return (
            <div style={{whiteSpace: 'normal'}}>
                <div className='m-headers'>
                <Link to='/my'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>消息信箱</p>
                    
                </div>
                <div className='m-s'>
                <Accordion accordion openAnimation={{}} className="my-accordion">
                <Accordion.Panel header="评论">
                    <List className="my-list">
                    {
                    this.state.datap!=='您没有评论消息！'
                    ?this.state.datap.map((item,key)=>(
                        <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="http://116.62.14.0:8666/api/image/5" />
                                    </div>
                                    <div className='m-top-t'>
                                        {item.uname}
                                    </div>
                                    <div className='m-top-time'>
                                        评论于 {item.comtime}
                                    </div>
                                </div>
                                <div className='m-center'>
                                   <p>
                                        {item.comcontent}
                                   </p>
                                </div>   
                                <Link to={{
                        pathname:'/detailsM',
                        state:{
                            did:item.did
                        }
                    }}><div className='m-bottom'>
                                    <div className='m-b-t'>
                                        <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >{this.state.datap[key].day}</span>
                                        <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >{this.state.datap[key].year}/{this.state.datap[key].month}</span>
                                    </div>
                                    <div className='m-b-r'>
                                        {item.dtitle}
                                    </div>
                                </div></Link>             
                            </div>
                        </List.Item>
                    ))
                    :<div></div>
    }
                      
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="点赞">
                    <List className="my-list">
                    {
                    this.state.dataz!=='您没有点赞消息！'
                    ?this.state.dataz.map((item,key)=>(
                    <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="http://116.62.14.0:8666/api/image/5" />
                                    </div>
                                    <div className='m-top-t'>
                                    {item.uname}
                                    </div>
                                    <div className='m-top-time'>
                                        点赞了你
                                    </div>
                                </div>   
                                <Link to={{
                        pathname:'/detailsM',
                        state:{
                            did:item.did
                        }
                    }}><div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >{this.state.dataz[key].day}</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >{this.state.dataz[key].year}/{this.state.dataz[key].month}</span>
                                    </div>
                                    <div className='m-b-r'>
                                        {item.dtitle}
                                    </div>
                                </div></Link>             
                            </div>
                        </List.Item>
                    ))
                    :<div></div>
    }
                        
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="申请">
                    <List className="my-list">
                    {
                    this.state.data!=='您没有申请！'
                    ?this.state.data.map((item,key)=>(
                        <List.Item>
                            <div className='m-spply'>
                                <div className='m-spply-t'>
                    有一位用户向您的一句话<span style={{fontSize:'16px',textDecoration:'underline',color:'#57a099',textDecorationColor:'#8bcca1',fontWeight:'bolder'}}>{item.shortdes}</span>发送了交换日记的申请，
                                    申请理由如下：
                                </div>
                                <div className='m-spply-c'>
                                    {item.acontent}
                                </div>
                                <div className='m-spply-b'>
                                    <div className='b-but1' onClick={()=>this.click1(key)}>
                                        {this.state.value1[key]}
                                    </div>
                                    <div className='b-but2' onClick={()=>this.click2(key)}>
                                        {this.state.value2[key]}
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    ))
                    :<div></div>
            }
                        {/* <List.Item>
                            <div className='m-spply'>
                                <div className='m-spply-t'>
                                    有一位用户向您的一句话<span style={{fontSize:'16px',textDecoration:'underline',color:'#57a099',textDecorationColor:'#8bcca1',fontWeight:'bolder'}}>只要你主动，我们就会有故事</span>发送了交换日记的申请，
                                    申请理由如下：
                                </div>
                                <div className='m-spply-c'>
                                    emmmmmmmm，该写什么好呢，纠结……
                                </div>
                                <div className='m-spply-b'>
                                    <div className='b-but1'>
                                        接受
                                    </div>
                                    <div className='b-but2'>
                                        拒绝
                                    </div>
                                </div>
                            </div>
                        </List.Item> */}
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="我的申请">
                    <List className="my-list">
                    {
                    this.state.data1!=='暂无申请'
                    ?this.state.data1.map((item,key)=>(
                        <List.Item>
                            <div className='my-spply'>
                                <div className='my-s-t'>
                                    您的交换日记申请已被<span style={{fontWeight:'bolder',textDecoration:'underline',fontSize:'16px'}}> 接受</span>
                                </div>
                                <Link to={{
                        pathname:'/sentenceM',
                        state:{
                            shortdes_id:item.shortdes_id
                        }
                    }}><div className='my-s-b'>
                                {item.shortdes}
                                </div></Link>
                            </div>
                        </List.Item>
                         ))
                        :<div></div>
                       }
                        
                    </List>
                </Accordion.Panel>
                </Accordion>
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index1.css';
import {Link,Route} from 'react-router-dom';
//import WebSocket from 'react-websocket';


// var ws = new WebSocket("ws://116.62.14.0:8081/");
export default class Talk extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            data:[],
            me: [],
            you: [],
            content:''
        }
        
    }
    componentDidMount() {
        console.log(this.props.location.state.fuid)
        // this.WebSocketTest();
        fetch('http://116.62.14.0:8081/zhaohuaxishi/fetch/'+localStorage.getItem('token')+'/'+this.props.location.state.fuid)
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res);
            this.setState({
                me:res.retme,
                you:res.you
            })

         });
    }
    // WebSocketTest = () => { 
    //     // console.log('b'+this.state.me.uname);             //建立连接
    //     //if ('WebSocket' in window) {
    //     console.log("{from:'" + this.props.location.state.uid+ "',to:'"+this.props.location.state.fuid+"',sendNuber:'已经建立连接',token:'"+this.props.location.state.uid+"'}");
    //     console.log("您的浏览器支持 WebSocket!");
    //     ws.onopen = () => {
    //         //ws.send("{name:'"+this.state.me.uname+"',sendNuber:'已经建立连接'}");
    //         ws.send("{from:'" + this.props.location.state.uid+ "',to:'"+this.props.location.state.fuid+"',sendNuber:'已经建立连接',token:'"+localStorage.getItem('token')+"'}");
    //         console.log("数据发送中...");
    //     };
    //     ws.onmessage = (evt) => {
    //         var receive = evt.data;
    //         console.log(evt);
    //         this.setState({
    //             list: [...this.state.list, receive]
    //         })
    //         // console.log(this.state.list);
    //     }
    //     ws.onclose = function () {
    //         // 关闭 websocket
    //         // alert("连接已关闭...");
    //     };
    
    // }
    // send = (e) => {
    //     const inpVal = this.input.value;
    //     if (inpVal !== '') {
    //         //ws.send("{name:'"+this.state.me.uname+"',sendNuber:'" + inpVal + "'}");
    //         ws.send("{from:'"+this.props.location.state.uid+"',to:'"+this.props.location.state.fuid+"',sendNuber:'" + inpVal + "',token:'"+localStorage.getItem('token')+"'}");
    //         this.input.value = '';
    //     }
    // }
    // componentWillUnmount() {
    //     ws.onclose = function () {
    //         // 关闭 websocket
    //         // alert("连接已关闭...");
    //     };
    // }
    content=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    send=()=>{
        this.setState({
            content:''
        },()=>{
            fetch('http://116.62.14.0:8081/zhaohuaxishi/push/'+localStorage.getItem('token')+'/'+this.props.location.state.fuid, {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ token:`${localStorage.getItem('token')}`,ruid:`${this.props.location.state.fuid}`, rcontent:`${this.state.content}` })})
         .then(res =>{ return res.json() })
         .then(res=>{ 
             console.log(res); 
            //  if(res.status===0){
            //      Toast.success('编辑成功！',1)
                
            //  }
         });
         fetch('http://116.62.14.0:8081/zhaohuaxishi/fetch/'+localStorage.getItem('token')+'/'+this.props.location.state.fuid)
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res);
            this.setState({
                data:res.data
            })

         });
        })
     
       
    }
    render() {
        return (
            <div>
                <div style={{width:'99%',height:'100%',float:'left',position:'fixed',top:0,border:'1px solid black'}}>
                <div className='headers'>
                <Link to='/open'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        {/* <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}></p> */}
                    
                </div>
                {/* <ul style={{marginLeft:'5%',marginRight:'5%',float:'left', overflow: 'hidden'}}>{
                    this.state.list.map((item, idx) => <li key={idx} id='c'><div id='b'>{item}</div></li>)
                }
                </ul> */}
                <form style={{width:'99%',float:'left',position:'fixed',bottom:'0',left:'0',paddingTop:'2%',paddingBottom:'2%',zIndex:'9',backgroundColor:'#f5f6f8',marginLeft:'1px'}}>
                    <input type='text' style={{width:'70%',marginRight:'5%',marginLeft:'5%',bottom:'2%',paddingTop:'3%',paddingBottom:'3%',fontSize:'16px',borderRadius:'5px',float:'left',wordWrap:"break-word"}} value={this.state.content} onChange={this.content} />
                    {/* <button type="button" id="Bridge">建立连接</button> */}
                    <button type='button' style={{width:'15%',right:'5%',bottom:'2%',paddingTop:'3%',paddingBottom:'3%',backgroundColor:'#57a099',color:'#fff',fontWeight:'bolder',borderRadius:'5px',float:'left'}} onClick={this.send}>发送</button>
                </form>
            </div>

            </div>
        )
    }
}

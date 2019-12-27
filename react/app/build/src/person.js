import React, { Component } from 'react'
import {Toast} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Person extends Component {
    constructor(props){
        super(props);
        this.state={
           
            uname:'',
            uintroduce:'',
            uemail:'',
            uimage:0
        }
      }
      componentDidMount(){
        // console.log(this.props.location.pathname);
            fetch('http://116.62.14.0:8666/mine/mine/'+localStorage.getItem('token')).then(res =>res.json())
                .then(res =>{
            
             this.setState({
                 uname:res.dataone.uname,
                 uintroduce:res.dataone.uintroduce,
                 uemail:res.dataone.uemail,
                 uimage:res.dataone.uimage

             })
            })
            
            console.log(this.state.uintroduce); 
        }
        
        uname=(e)=>{
            this.setState({
                uname:e.target.value
            })
        }
        uintroduce=(e)=>{
            this.setState({
                uintroduce:e.target.value
            })
        }
        uemail=(e)=>{
            this.setState({
                uemail:e.target.value
            })
        }
        change=()=>{
            console.log(this.state.uname)
            console.log(localStorage.getItem('token'))
            console.log(this.state.uintroduce)
            fetch('http://116.62.14.0:8666/mine/name', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify({ uname:`${this.state.uname}`,token:localStorage.getItem('token'), uintroduce:`${this.state.uintroduce}`})})
                .then(res =>{ return res.json() })
                .then(res=>{ 
                    console.log(res); 
                    // if(res.status===0){
                        Toast.success('修改成功！',1)
                        setTimeout(()=>{
                            this.props.history.push('/my')
                        },1000)
                    // }
                });
      
        }
      
    render() {
        return (
            <div>
                <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to='/my'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <div className='person-div'>
                        <div className='person-head'>
                            <div className='person-img'>
                                <img src={'http://116.62.14.0:8666/api/image/'+this.state.uimage}/>
                            </div>
                        </div>
                        <div className='person-content'>
                            <div className='person-content1'>
                                <div className='content1l' style={{width:'25%'}}>
                                    <p style={{marginTop:8}}>昵称</p>
                                    
                                </div>
                                <div className='content1r'>
                                <input type='text'  style={{paddingLeft:15,width:'75%',height:30,float:'left',borderBottom:'1px solid #000'}} value={this.state.uname} onChange={this.uname} ></input>
                                </div>
                            </div>
                            <div className='person-content1'>
                                <div className='content1l' style={{width:'25%'}}>
                                    <p style={{marginTop:8}}>签名</p>
                                </div>
                                <div className='content1r'>
                                <input type='text'   style={{paddingLeft:15,width:'75%',height:30,float:'left',borderBottom:'1px solid #000'}} value={this.state.uintroduce} onChange={this.uintroduce} ></input>
                                </div>
                            </div>
                            <div className='person-content1'>
                                <div className='content1l' style={{width:'25%'}}>
                                    <p style={{marginTop:8}}>邮箱</p>
                                </div>
                                <div className='content1r' style={{width:'60%',borderBottom:'1px solid #000',height:30}}>
                                {/* <input type='text'  style={{paddingLeft:15,width:'65%',height:30,float:'left',borderBottom:'1px solid #000'}} value={this.state.uemail} onChange={this.uemail} ></input> */}
                                <p style={{paddingLeft:15,height:30,float:'left',paddingTop:5}}>{this.state.uemail}</p>
                                </div>
                            </div>
                        </div>
                        <button className='comment-but' style={{marginTop:10,backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}} onClick={this.change}>个性化信息修改</button>
          
                    </div>
                    

                  
                
            
      </div>
        )
    }
}

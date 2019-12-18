import React, { Component } from 'react'
import {Toast} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Friend extends Component {
   
    constructor(){
        super();
        this.state={
            value:'确认',
            // backgroundColor:'#fff',
            color:'#000',
            backgroundImage: 'linear-gradient(to right, #fff , #fff)',
            path:'/apply',
            data:{},
            text:'',
        }
    }
   
   text=(e)=>{
       this.setState({
           text:e.target.value
       })
    //    console.log(this.state.text);
   }
   friendApply=()=>{
    fetch('http://116.62.14.0:8666/changed/addfri',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        
        },
        body: JSON.stringify({ token:1,oneid:`${this.props.location.state.shortdes_id}`,text:`${this.state.text}`})})
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res); 
            if(res.status===0){
                Toast.success(res.data,1)
                setTimeout(()=>{
                    this.props.history.push({pathname:'/exdiary',state:{
                        shortdes_id:this.props.location.state.shortdes_id
                    }})
                },1000)
            }else{
                Toast.fail(res.data,1)
                setTimeout(()=>{
                    this.props.history.push({pathname:'/exdiary',state:{
                        shortdes_id:this.props.location.state.shortdes_id
                    }})
                },1000)
            }
        });
      console.log(this.props.location.state.shortdes_id);
   }
    render() {
        return (
            <div className='comment'>
                <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                <Link to={{
                            pathname:'/exdiary',
                            state:{
                                shortdes_id:this.props.location.state.shortdes_id
                            }
                        }}><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>好友申请理由</p>
                    
                </div>
                {/* <div style={{width:'100%',height:40,marginTop:50,backgroundColor:'#fff',textAlign:'center',lineHeight:'40px'}}><p>申请理由</p></div> */}
                <textarea rows="13" cols="30" className='comment-area' style={{marginTop:60}} value={this.state.text} onChange={this.text}></textarea>
                <input type='submit' value='申请' className='comment-but' style={{fontSize:'16px',backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}} onClick={this.friendApply}/>
            </div>   
        )
    }
}

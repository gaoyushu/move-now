import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Apply extends Component {
   
    constructor(){
        super();
        this.state={
            value:'确认',
            // backgroundColor:'#fff',
            color:'#000',
            backgroundImage: 'linear-gradient(to right, #fff , #fff)',
            path:'/apply',
            dcontent:''
        }
    }
    // click=()=>{
    //     this.setState({
    //         value:'申请成功',
    //         // backgroundColor:'#8bcca1',
    //         color:'#fff',
    //         backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)'
    //     },()=>{
    //         setTimeout(function(){
    //             window.location.href = "http://localhost:3000/sentenceYou";
    //         }, 1000)
    //     })
    // }
    content=(e)=>{
        this.setState({
            dcontent:e.target.value
        })
        console.log(this.state.dcontent);
        console.log(this.props.location.state.shortdes_id);
    }
    fun=()=>{
     console.log(this.props.location.state.did);
     console.log(this.state.dcontent);
     console.log(this.props.location.state.shortdes_id);
     if(this.props.location.state.ok==1){
         if(typeof(this.props.location.state.did)=='number'){
     fetch('http://116.62.14.0:8666/change/request', {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ token:localStorage.getItem('token'),oneid:`${this.props.location.state.shortdes_id}`,content:`${this.state.dcontent}`,diaryid:`${this.props.location.state.did}`,})})
         .then(res =>{ return res.json() })
         .then(res=>{ 
             console.log(res); 
             if(res.status===1){
                 Toast.success(res.data,1)
                 setTimeout(()=>{
                     this.props.history.push({
                        pathname:'/sentenceYou',
                        state:{
                            shortdes_id:this.props.location.state.shortdes_id
                        }
                    })
                 },1000)
             }
         });}else{
            Toast.fail('请选择日记！',1)
         }
        }else{
            Toast.fail('请选择日记！',1)
         }
       
    }
    render() {
        return (
            <div className='comment'>
                <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                <Link to={{
                        pathname:'/sentenceYou',
                        state:{
                            shortdes_id:this.props.location.state.shortdes_id
                        }
                    }}><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>申请理由</p>
                    
                </div>
                {/* <div style={{width:'100%',height:40,marginTop:50,backgroundColor:'#fff',textAlign:'center',lineHeight:'40px'}}><p>申请理由</p></div> */}
                <textarea rows="13" cols="30" className='comment-area' style={{marginTop:60}} value={this.state.dcontent} onChange={this.content}></textarea>
                <Link to={{
                        pathname:'/select1',
                        state:{
                            shortdes_id:this.props.location.state.shortdes_id
                        }
                    }}>
                        <button style={{marginTop:10,marginBottom:0,width:'100%',height:40,backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>选择日记</button></Link>
                <input type='submit' value='确认' className='comment-but' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}} onClick={this.fun}/>
            </div>   
        )
    }
}

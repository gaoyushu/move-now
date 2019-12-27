import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Excomment extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{},
            // dtitle:'',
            comcontent:''
        }
      }
    content=(e)=>{
        this.setState({
            comcontent:e.target.value
        })
        console.log(this.props.location.state.did)
        console.log(this.state.comcontent)
        // console.log(this.props.location.state.comstatus)
    }
    fun=()=>{
        
     fetch('http://116.62.14.0:8666/square/comments/'+localStorage.getItem('token'), {
         method: 'POST',
         mode:'cors',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'text/plain'
         },
         body: JSON.stringify({ did:`${this.props.location.state.did}`,comcontent:`${this.state.comcontent}`,comstatus:'true'})})
         .then(res =>{ return res.json() })
         .then(res=>{ 
             console.log(res); 
             if(res.status===0){
                 Toast.success('评论成功！',1)
                 setTimeout(()=>{
                     this.props.history.push({pathname:'/detailsSimi',state:{
                         did:this.props.location.state.did,                      
                        shortdes_id:this.props.location.state.shortdes_id
                     }})
                 },1000)
             }
         });
       
    }
    render() {
        
        return (
            
                <div className='comment'>
                    <div style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#8bcca1',color:'#fff'}}>
                        <Link to={{
                        pathname:'/detailsSimi',
                        state:{
                            did:this.props.location.state.did,
                            shortdes_id:this.props.location.state.shortdes_id
                        }
                    }}>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    {/* <input type='text' className='comment-name' placeholder='取个名字吧~'/> */}
                    <textarea rows="13" cols="30" className='comment-area' style={{marginTop:60}} value={this.state.comcontent} onChange={this.content}>评论一下</textarea>
                    {/* <Link to={{
                        pathname:'/detailsSimi',
                        state:{
                            did:this.props.location.state.did
                        }
                    }}> */}
                        <button className='comment-but' onClick={this.fun}>评论</button>
                    {/* </Link> */}
                </div>
           
        )
    }
}

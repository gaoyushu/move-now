import React, { Component } from 'react'
import {Toast } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class SentenceYou extends Component {
    constructor(props){
    super(props);
    this.state={
        data:[],
        value:'',
        ok:-1
    }
  }
componentDidMount(){
    // console.log(this.props.location.state.shortdes_id);
    // var url='http://116.62.14.0:8799/change/detail/'+this.props.location.state.shortdes_id+'/4';
    // console.log(url);
    // if(typeof(this.props.location.state.did)=='number'){
    fetch('http://116.62.14.0:8666/change/detail/'+this.props.location.state.shortdes_id+'/4')
    .then(res =>{ return res.json() })
    .then(res =>{
         console.log(res); 
         this.setState({
            data:res.data
            
        },()=>{
            if(res.data.isMe){
                if(res.data.dstatus=='true'){
                    this.setState({
                    value:'进行中'
                    })
                }else{
                    this.setState({
                    value:'已完成'
                    })
                }
            }else{
                if(res.data.isRequest){
                    this.setState({
                    value:'已申请'
                    })
                }else{
                    if(res.data.dstatus){
                        this.setState({
                        value:'申请'
                        })
                    }else{
                        this.setState({
                        value:'已关闭'
                        })
                    }
                }
            }
            // console.log(this.state.data.shortdes_id)
        
        })
    });

// }else{
    // Toast.fail('请选择日记！',1)
// }
   

  }

    render() {
        return (
            
                <div className='comment' style={{backgroundColor:'#fff'}}>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to='/exchange'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <div style={{marginTop:70,width:'100%',height:70,display:'table',position:'relative'}}>
                            <div className='exchange-touxiang' style={{transform:'translate(-50%)',position:'absolute',left:'50%',width:70,height:70}}>
                                <img src='http://116.62.14.0:8666/api/image/5' style={{width:70,height:70}}/>
                            </div>
                        </div>
                    <div style={{width:'100%',backgroundColor:'#fff',marginTop:0,paddingTop:5}}>
                        <div style={{fontWeight:600,width:'100%',paddingBottom:15,marginTop:10,fontSize:'17px',textAlign:'center'}}>
                            <p>{this.state.data.shortdes}</p>
                        </div>
        <div style={{width:'100%',textAlign:'center',fontSize:'14px',color:'#ccc'}}><p>{this.state.data.dtime}</p></div>
                    <div style={{width:'100%',marginTop:15}}>
                        {/* <div style={{width:'94%',marginLeft:'3%',backgroundColor:'#f5f6f8',borderRadius:'10%'}}> */}
        <p style={{lineHeight:'25px',paddingTop:0,paddingLeft:25,paddingRight:25,paddingBottom:10}}>{this.state.data.longdes}</p>
                        {/* </div> */}
                    </div>
                    </div>
                    {
                        this.state.data.isMe
                        ?<div style={{width:'100%'}}><p style={{color:'#ccc',float:'right',marginRight:30,fontSize:'14px'}}>{this.state.value}</p></div>
                        :this.state.data.isRequest 
                            ?
                            // <Link to={{
                            //     pathname:'/apply',
                            //     state:{
                            //         shortdes_id:this.props.location.state.shortdes_id,
                            //         ok:this.state.ok
                            //     }
                            // }}>
                                <input type='submit' value={this.state.value} className='comment-but' style={{backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',marginTop:30}}/>
                                // </Link>
                            :<Link to={{
                                pathname:'/apply',
                                state:{
                                    shortdes_id:this.props.location.state.shortdes_id,
                                    ok:this.state.ok
                                }
                            }}><input type='submit' value={this.state.value} className='comment-but' style={{backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',marginTop:30}}/></Link>
                    }
                     </div>
           
        )
    }
}

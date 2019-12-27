import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Miss extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8666/changed/meet/'+localStorage.getItem('token')+'/'+this.props.location.state.shortdes_id)
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data

            })
        });

      }
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                    <Link to={{
                            pathname:'/exdiary',
                            state:{
                                shortdes_id:this.props.location.state.shortdes_id
                            }
                        }}><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>相遇</p>
                    
                    </div>
                    <div className='friend-div'>
                        <div className='exchange-divt' style={{paddingTop:15,textAlign:'center',fontSize:'17px',fontWeight:'bold',height:30}}>
                            一句话详情
                        </div>
                        <div className='friend-title' style={{marginTop:10,marginBottom:5,textAlign:'center',marginLeft:0}}>
                            <p>{this.state.data.shortdes}</p>
                        </div>
                        <div className='friend-condiv'>
                            <div className='friend-content' style={{borderRadius:'10%',backgroundColor:'#f5f6f8',paddingBottom:10}}>
                                <p style={{lineHeight:'20px',paddingTop:15,paddingLeft:15,paddingRight:10}}>{this.state.data.longdes}</p>
                            </div>  
                        </div>    
                    </div>

                    <div className='friend-div'>
                        <div className='exchange-divt' style={{paddingTop:15,textAlign:'center',fontSize:'17px',fontWeight:'bold',height:30}}>
                            申请理由
                        </div>
                        <div className='friend-condiv'>
                            <div className='friend-content' style={{marginTop:5,borderRadius:'10%',backgroundColor:'#f5f6f8',paddingBottom:10}}>
                                <p style={{lineHeight:'20px',paddingTop:15,paddingLeft:15,paddingRight:10}}>{this.state.data.acontent}</p>
                            </div>   
                        </div>   
                    </div>

                </div>
           
        )
    }
}

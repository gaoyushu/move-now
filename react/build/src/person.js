import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Person extends Component {
    constructor(props){
        super(props);
        this.state={
           
            data:[]
        }
      }
      componentDidMount(){
        // console.log(this.props.location.pathname);
            fetch('http://116.62.14.0:8666/mine/1').then(res =>res.json())
                .then(res =>{
            
             this.setState({
                 data:res.dataone

             })
            })
            console.log(this.state.data); 
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
                                <img src='http://116.62.14.0:8666/api/image/8'/>
                            </div>
                        </div>
                        <div className='person-content'>
                            <div className='person-content1'>
                                <div className='content1l'>
                                    <p>昵称</p>
                                </div>
                                <div className='content1r'>
                                    <p>{this.state.data.uname}</p>
                                </div>
                            </div>
                            <div className='person-content1'>
                                <div className='content1l'>
                                    <p>签名</p>
                                </div>
                                <div className='content1r'>
                                    <p>{this.state.data.uintroduce}</p>
                                </div>
                            </div>
                            <div className='person-content1'>
                                <div className='content1l'>
                                    <p>邮箱</p>
                                </div>
                                <div className='content1r'>
                                    <p>{this.state.data.uemail}</p>
                                </div>
                            </div>
                        </div>
                        <button className='comment-but' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>个性化信息修改</button>
          
                    </div>
                    

                  
                
            
      </div>
        )
    }
}

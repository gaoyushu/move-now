import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Miss extends Component {
    render() {
        // var path = {
        //     pathname:'/petal',
        //                         state:{
        //                             // path2:'/message',
        //                             path1:this.props.location.state.path2
        //                         }
        //   }
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                    <Link to='/exdiary'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>相遇</p>
                    
                    </div>
                    <div className='friend-div'>
                        <div className='exchange-divt' style={{paddingTop:15}}>
                            <div className='exchange-touxiang' style={{marginLeft:0}}>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <div className='exchange-name' style={{marginLeft:10,fontSize:'16px',fontWeight:'bold'}}>
                                <p style={{paddingTop:10}}>快乐的代码机器</p>
                            </div>
                        </div>
                        <div className='friend-title' style={{marginTop:10,marginBottom:5}}>
                            <p>只要你主动，我们就会有故事</p>
                        </div>
                        <div className='friend-condiv'>
                            <div className='friend-content' style={{borderRadius:'10%',backgroundColor:'#f5f6f8',paddingBottom:10}}>
                                <p style={{lineHeight:'20px',paddingTop:15,paddingLeft:15,paddingRight:10}}>瞎说的瞎说的瞎说的瞎说的，瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的瞎说的，瞎说的瞎说的别当真别当真别当真别当真别当真别当真别当真别当真别当真别当真别当真，别当真别当真别当真别当真别当真别当真别当真，别当真别当真别当真别当真</p>
                            </div>  
                        </div>    
                    </div>

                    <div className='friend-div'>
                        <div className='exchange-divt' style={{paddingTop:15}}>
                            <div className='miss-touxiang' style={{marginRight:0}}>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <div className='miss-name' style={{fontSize:'16px',fontWeight:'bold'}}>
                                <p>快乐个锤子</p>
                            </div>
                        </div>
                        <div className='friend-condiv'>
                            <div className='friend-content' style={{marginTop:5,borderRadius:'10%',backgroundColor:'#f5f6f8',paddingBottom:10}}>
                                <p style={{lineHeight:'20px',paddingTop:15,paddingLeft:15,paddingRight:10}}>我来了我来了我来了，我来了我来了我来了我来了我来了我来了我来了我来了我来了我来了我来了我来了我来了，我来了我来了我来了我来了我来了我来了我来了我来了我来了我来了，我来了我来了我来了我来了我来了我来了我来了我来了我来了</p>
                            </div>   
                        </div>   
                    </div>

                </div>
           
        )
    }
}

import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Content';


export default class DetailsSimi extends Component {
    constructor(){
        super();
        this.state={
            i:0,
            j:0,
            // backgroundColor1:'white',
            // color1:'#1C4678',
            // c1:'公开',
            backgroundColor2:'white',
            color2:'#1C4678',
            c2:'点赞',
            data:[],
            comments:[]
        }
    }
    componentDidMount(){
        // console.log(this.props.location.state.did);
        // var url='http://116.62.14.0:8799/change/detail/'+this.props.location.state.did+'/3';
        // console.log(url);
        // fetch('http://116.62.14.0:8799/change/detail/'+this.props.location.state.shortdes_id+'/3')
        fetch('http://116.62.14.0:8666/diary/detail/'+this.props.location.state.did+'/1')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data,
                comments:res.data.comments

            })
        });

      }
    handleclick2=()=>{
        this.setState({
            j:this.state.j+1
        },()=>{
          if(this.state.j%2==0){
            this.setState(
                {
                    backgroundColor2:'white',
                    color2:'#000',
                    c2:'点赞'
                }
            )
            // console.log(this.props.location.state.path1);
        }else{
            this.setState(
                {
                    backgroundColor2:'#8bcca1',
                    color2:'white',
                    c2:'已赞'
            }
            )
        }   
        })
       
    }
    render() {
        // var path = {
        //     pathname:'/edit',
        //                         state:{
        //                             path2:this.props.location.state.path1,
                                
        //                         }
        //   }
        return (
            <div>
                <div className='headerss' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)'}}>
                    {/* 跳到日记 */}
                    <Link to={{
                        pathname:'/exdiary',
                        state:{
                            shortdes_id:this.props.location.state.shortdes_id
                        }
                    }}>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                    </Link> 
                        <span style={{float:"left",paddingLeft:'30%'}}>{this.state.data.dtime}</span>
                </div>
                <div className='temp'>

                </div>
                    <div style={{backgroundColor:'#fff',float:'left',width:'100%'}}>
                        <div className='mains'>
                            <span style={{fontSize:'18px',fontWeight:'bolder',width:'100%',float:'left',marginTop:'5%',marginBottom:'5%'}} >{this.state.data.dtitle}</span>
                            <p>· {this.state.data.dcontent}</p>
                        </div>
                    </div>
                <div className='buttons'>
                    <Link to={{
                        pathname:'/excomment',
                        state:{
                            did:this.props.location.state.did,
                            shortdes_id:this.props.location.state.shortdes_id,
                        }
                    }}><button className='comment-but' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>评论</button></Link>
                </div>
                <div className='comments' style={{border:0}}>
                    {
                        // console.log(this.state.data.comments),
                        this.state.comments=='暂无评论'?<div></div>
                        :this.state.comments.map((item,key)=>(
                            <div className='comm'>
                                <div className='simi-tou'>
                                    <div className='simi-touxiang'>
                                        <img src='http://116.62.14.0:8666/api/image/5'/>
                                    </div>
                                    <span className='c-user' >{item.uname}:</span>
                                </div>
                                <p className='c-content'>{item.comcontent}</p>
                                <span className='c-time' >{item.comtime}</span>
                            </div>
                        ))
    }
                  
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Content';


export default class DetailsYou extends Component {
    constructor(){
        super();
        this.state={
            color1:'white',
            backgroundColor1:'#8bcca1',
            backgroundColor2:'white',
            color2:'#000',
            unlike:'点赞',
            like:'已点赞',
            data:{},
            com:[],
            path:'',
            pathe:'',
            pathc:'',
            pathh:''
        }
    }
    componentDidMount(){
        console.log(this.props.location.pathname);
        let arr=this.props.location.pathname.split('/');
        if(this.props.location.pathname.indexOf('open')!==-1){
            let did=this.props.match.params.did;
                fetch('http://116.62.14.0:8666/diary/detail/'+did+'/1')
                .then(res =>{ return res.json() })
                .then(res =>{
                    console.log(res); 

                    this.setState({
                        data:res.data,
                        com:res.data.comments,
                        
                    },()=>{
                        this.setState({
                            path:'/open/home/'+this.state.data.uid
                        })
                    })
                    
                });
                if(this.props.location.pathname.indexOf('comments')!==-1){
                    this.setState({
                        pathc:this.props.location.pathname
                    })
                    
                }
        }
        
           else {if(this.props.location.pathname.indexOf('home')===-1){
                let did=this.props.match.params.did;
                fetch('http://116.62.14.0:8666/diary/detail/'+did+'/1')
                .then(res =>{ return res.json() })
                .then(res =>{
                    console.log(res); 

                    this.setState({
                        data:res.data,
                        com:res.data.comments,
                        path:'/'+arr[1]+'/'+arr[2] 
                    })
                    
                });
                if(this.props.location.pathname.indexOf('edit')!==-1){
                    this.setState({
                        pathe:this.location.pathname
                    })
                }
                if(this.props.location.pathname.indexOf('comments')!==-1){
                    this.setState({
                        pathc:this.props.location.pathname
                    })
                }
            }else{
            let didss=this.props.match.params.didss;
            fetch('http://116.62.14.0:8666/diary/detail/'+didss+'/1')
            .then(res =>{ return res.json() })
            .then(res =>{
                console.log(res); 

                this.setState({
                    data:res.data,
                    com:res.data.comments
                },()=>{
                    this.setState({
                        path:'/'+arr[1]+'/'+arr[2]+'/'+arr[3]+'/'+this.state.data.uid
                    })
                })
                if(this.props.location.pathname.indexOf('edit')!==-1){
                    this.setState({
                        pathe:this.location.pathname
                    })
                }
                if(this.props.location.pathname.indexOf('comments')!==-1){
                    this.setState({
                        pathc:this.props.location.pathname
                    })
                }
                
            });
        }
    }

    }
    handleclick1=()=>{
        fetch('http://116.62.14.0:8666/square/praise/1'+'/'+`${this.state.data.did}`,{
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }, 
            }).then(res =>{ return res.json() }).then(d =>{ console.log(d); }
              ,[]);
        if(this.state.data.isGood==='true'){
            var ddd=this.state.data;
            ddd.isGood='false'
            this.setState({
                data:ddd
            })
        }
        else{
            var ddd=this.state.data;
            ddd.isGood='true'
            this.setState({
                data:ddd
            })
        }
       
    }
    render() {

        return (
            <div>
                <div className='headerss' >
                    <Link to={this.state.path}>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                    </Link> 
                        <span style={{float:"left",paddingLeft:'30%'}}>2019/12/02</span>
                </div>
                <div className='temp'>

                </div>
                <div style={{backgroundColor:'#fff',float:'left',width:'100%'}}>
                    <div className='topbar'>
                        <div className='tb-l'>
                           <div className='tb-h'>
                                <img src='http://116.62.14.0:8666/api/image/8' />
                            </div> 
                        </div>
                            
                        <div className='tb-r'>
                            <div className='tb-n'>
                                {this.state.data.uname}
                            </div>
                            <div className='tb-i'>
                                {this.state.data.uintroduce}
                            </div>
                        </div>    
                    </div>
                    
                    <div className='mains'>
                        <div className='mains-ti' >
                            {this.state.data.dtitle}
                        </div>
                        <div className='mains-c'>
                            {this.state.data.dcontent}
                        </div>
                    </div>
                    {this.state.data.isMe? 
                        <div className='buttons'>
                            <ul>
                                <Link to={this.state.pathe===''?this.props.location.pathname+'/edit':this.state.pathe}><li style={{backgroundColor:'#fff',color:'#000'}} >编辑</li></Link>
                                <li onClick={this.handleclick1}  style={this.state.data.isGood==='true'?{backgroundColor:this.state.backgroundColor1,color:this.state.color1}:{backgroundColor:this.state.backgroundColor2,color:this.state.color2}}>
                                    {this.state.data.isGood==='true'?this.state.like:this.state.unlike}
                                </li>
                            </ul>
                        </div>
                    : 
                        <div className='buttons'>
                            <ul>
                                <Link to={this.state.pathc===''?this.props.location.pathname+'/comments':this.state.pathc}><li style={{backgroundColor:'#fff',color:'#000'}} >评论</li></Link>
                                <li onClick={this.handleclick1}  style={this.state.data.isGood==='true'?{backgroundColor:this.state.backgroundColor1,color:this.state.color1}:{backgroundColor:this.state.backgroundColor2,color:this.state.color2}}>
                                    {this.state.data.isGood==='true'?this.state.like:this.state.unlike}
                                </li>
                            </ul>
                        </div>
                    }
                    {this.state.com==='暂无评论'?<div></div>:
                        <div className='comments'>
                            {
                                this.state.com.map((item,idx)=>(
                                    <div className='comm' key={idx} >
                                        <div className='simi-tou'>
                                            <div className='simi-touxiang'>
                                                <img src='http://116.62.14.0:8666/api/image/8'/>
                                            </div>
                                            <span className='c-user' >{item.uname}</span>
                                        </div>
                                        <p className='c-content'>{item.comcontent}</p>
                                        <span className='c-time' >{item.comtime}</span>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    </div>
            </div>
        )
    }
}

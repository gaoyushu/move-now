import React, { Component } from 'react'
import {Toast} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class CommentsW extends Component {
    constructor(){
        super();
        this.state={
            path:'',
            data:{},
            vt:'',
            vc:''
        }
    }
    componentDidMount(){
        var arr=this.props.location.pathname.split('/');
        if(this.props.location.pathname.indexOf('open')!==-1){
            fetch('http://116.62.14.0:8666/diary/detail/'+arr[4]+'/'+localStorage.getItem('token'))
            .then(res =>{ return res.json() })
            .then(res =>{
                console.log(res); 
                this.setState({
                    data:res.data,
                    path:'/open/home/details/'+arr[4]
                })
                
            });
        }
        else{if(this.props.location.pathname.indexOf('home')===-1){
             let did=this.props.match.params.did;
             fetch('http://116.62.14.0:8666/diary/detail/'+arr[4]+'/'+localStorage.getItem('token'))
             .then(res =>{ return res.json() })
             .then(res =>{
                 console.log(res); 
 
                 this.setState({
                     data:res.data,
                     path:'/'+arr[1]+'/'+arr[2]+'/'+arr[3]+'/'+arr[4],
                 })
                 
             });
         }else{
             let did=this.props.match.params.didss;
             fetch('http://116.62.14.0:8666/diary/detail/'+arr[5]+'/'+localStorage.getItem('token'))
             .then(res =>{ return res.json() })
             .then(res =>{
                 console.log(res); 
 
                 this.setState({
                     data:res.data,
                     path:'/'+arr[1]+'/'+arr[2]+'/'+arr[3]+'/'+arr[4]+'/'+arr[5],

                 })
                 
             });
         }
        }
    }
    ct=(e)=>{
        this.setState({
            vt:e.target.value
        })
    }
    cc=(e)=>{
        this.setState({
            vc:e.target.value
        })
    }
    pv=()=>{
        if(this.state.vc==''){
            Toast.fail('请填写评论！')
        }else{
        var brr=this.props.location.pathname.split('/');
        if(this.props.location.pathname.indexOf('open')!==-1){
            fetch('http://116.62.14.0:8666/square/comments', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
            },
            body: JSON.stringify({token:localStorage.getItem('token'), did:parseInt( this.props.location.pathname.split('/')[4]),comcontent:`${this.state.vc}`, comstatus:"true"})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res); 
                if(res.data==='ok'){
                    Toast.success('评论日记成功！',1);
                    setTimeout(() => {
                        this.props.history.push(`${this.state.path}`);
                    }, 1000);
                }
            });
        }
        else{
        if(this.props.location.pathname.indexOf('home')===-1){
            console.log(brr[4]);
        fetch('http://116.62.14.0:8666/square/comments', {
            method: 'POST',
            mode:"cors",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
            },
            body: JSON.stringify({token:localStorage.getItem('token'), did:parseInt( this.props.location.pathname.split('/')[4]),comcontent:`${this.state.vc}`, comstatus:"true"})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res); 
                if(res.data==='ok'){
                    Toast.success('评论日记成功！',1);
                    setTimeout(() => {
                        this.props.history.push(`${this.state.path}`);
                    }, 1000);
                }
            });
        }else{
            fetch('http://116.62.14.0:8666/square/comments', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
            },
            body: JSON.stringify({token:localStorage.getItem('token'), did:brr[5],comcontent:`${this.state.vc}`, comstatus:"true"})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res); 
                if(res.data==='ok'){
                    Toast.success('评论日记成功！',1);
                    setTimeout(() => {
                        this.props.history.push(`${this.state.path}`);
                    }, 1000);
                }
            });
        }
    }
    }
        
        }
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to={this.state.path}>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    {/* <input type='text' className='comment-name' placeholder='取个名字吧~' value={this.state.vt} onChange={this.ct} /> */}
                    <textarea rows="13" cols="30" className='comment-area' placeholder='评论一下吧~' value={this.state.vc} onChange={this.cc} style={{marginTop:60}}></textarea>
                    <button className='comment-but' onClick={this.pv}>评论</button>
                </div>
           
        )
    }
}

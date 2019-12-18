import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
// import Register from './register';
import Pubsub from 'pubsub-js'
import {Toast} from 'antd-mobile';
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            mail:'',
            password:'',
            token:''
        }
    }
    getEmail=(e)=>{
        this.setState({
            mail:e.target.value
        })
    }
    getPwd=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    toLogin=()=>{
        if(this.state.mail===''){
            Toast.fail('请输入邮箱！')
        }else{
            if(this.state.password===''){
                Toast.fail('请输入密码！')
            }else{
                fetch('http://116.62.14.0:8666/user/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mail:`${this.state.mail}`,password:`${this.state.password}`})})
                    .then(res =>{ return res.json() })
                    .then(res =>{ 
                        console.log(res) 
                        if(res.status===-1){
                            Toast.fail(`${res.data}`,1)
                        }
                        if(res.status===0){
                            Pubsub.publish('token', res.token)
                            this.setState({
                                token:res.token
                            },()=>{
                                Toast.success(`${res.data}`,1)
                                setTimeout(() => {
                                    this.props.history.push({pathname:'/square/hot',state:this.state.token});
                                }, 1000);
                            })
                            
                            
                        }
                    });

            }
        }
    }
    render() {
        return (
            <div>
                <div className='headers'>
                <Link to='/register'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>登录</p>
                    
                </div>
                <div className='logos'>
                    <img src='http://116.62.14.0:8666/api/image/4' alt='朝花夕拾' style={{width:'100%',height:'auto'}} />
                </div>
                <form className='table'>
                    <input type='email' placeholder='邮箱' className='login' value={this.state.mail} onChange={this.getEmail} />
                    <input type='password' placeholder='密码' className='login1'value={this.state.password} onChange={this.getPwd} />
                    {/* <input type='submit' value='登录' className='login2' onClick={this.toLogin} /> */}
                    <button className='login2' onClick={this.toLogin}>登录</button>
                </form>
                <div className='zhuce'>
                    {/* <Link to='/register'>立即注册</Link> */}
                </div>
            </div>
            
        )
    }
}

import React, { Component } from 'react'
import pubsub from 'pubsub-js'
import { message} from 'antd';
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }

    changeUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleClick(event){
        let that=this;
        event.preventDefault();
        fetch('http://116.62.14.0:8677/login', {
            method: 'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },body: JSON.stringify({ username:this.state.username,password:this.state.password})}).then(res =>{ return res.json() }).then(res =>{ 
                console.log(res);
                pubsub.publish('token','nihao');
                if(res.status===0){
                    message.success('登陆成功！');
                  setTimeout(()=>{
                      that.props.history.push("/enter");  
                  },1000);
                
                }
                if(res.status===-1){
                    message.error('登陆失败！用户名或密码错误！请重新登陆！',1)
                }
                
            });
    }

    render() {
        
        return (
            <div className='login'>
                <div>
                <form className='l-b'>
                    <div className='l-b-t'>
                    朝花夕拾后台管理系统
                    </div>
                    <div className='l-b-u'>
                        <div className='k1'>
                            <input type='text' placeholder='请输入用户名' value={this.state.username} onChange={this.changeUsername} />
                        </div>
                    </div> 
                    <div className='l-b-p'>
                        <div className='k2'>
                            <input type='password' placeholder='请输入密码' value={this.state.password} onChange={this.changePassword} />
                        </div>
                    </div>
                    <div className='l-b-l'>
                        <button  onClick={this.handleClick.bind(this)}>登录 </button>
                    </div>
                </form>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

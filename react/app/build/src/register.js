import React, { Component } from 'react'
import {Toast} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            value:'',
            code:'',
            pwd:'',
            repwd:'',
            tips:'',
            checked:false,
            display:'none',
            // new:0
        }
    }
    // componentDidMount(){

    // }
    getEmail=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    getCode1=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    getPwd=(e)=>{
        this.setState({
            pwd:e.target.value
        })
    }
    getRepwd=(e)=>{
        this.setState({
            repwd:e.target.value
        })
    }
    getCode=(e)=>{
        e.preventDefault()
        fetch('http://116.62.14.0:8666/user/sendcode', {
            method: 'POST',
            mode:"cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail:`${this.state.value}`})}).then(res =>{ return res.json() })
            .then(res =>{
                 console.log(res) 
                 if(res.status===-1){
                     Toast.fail(`${res.data}`,1);
                 }
                 if(res.status===0){
                     Toast.success(`${res.data}`,1)
                 }
                });

    }
    toRegister=(e)=>{
        e.preventDefault()
        // if(this.state.checked===true){
            if(this.state.value===''){
                Toast.fail('请先填写邮箱！',1)
            }
            else{
                if(this.state.code==''){
                    Toast.fail('请先填写验证码！',1)
                }else{
                    if(this.state.pwd===''){
                        Toast.fail('请先填写密码！',1)
                    }else{
                        if(this.state.repwd===''){
                            Toast.fail('请再次输入密码！',1);
                        }else{
                            if(this.state.checked===true){
                                fetch('http://116.62.14.0:8666/user/register', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ mail:`${this.state.value}`,code:`${this.state.code}`, password:`${this.state.pwd}`,repassword:`${this.state.repwd}`})})
                                .then(res =>{ return res.json() })
                                .then(res=>{ 
                                    console.log(res) 
                                    if(res.status===-1){
                                        Toast.fail(`${res.data}`,1);
                                    }
                                    if(res.status===0){
                                        Toast.success(`${res.data}`,1)
                                        setTimeout(() => {
                                            
                                            this.props.history.push('/login');
                                        }, 1000);                
                                    }
                                });
                            }else{
                                Toast.fail('请先阅读用户协议',1);
                            }
                        }
                    }
                }
            }
            // }else{
            //     Toast.fail('请先阅读用户协议',1);
            // }

    }
    getChecked=(e)=>{
        this.setState({
            checked:e.target.checked
        })
    }
    show=()=>{
        this.setState({
            display:'block'
        })
    }
    unShow=()=>{
        this.setState({
            display:'none'
        })
    }
    render() {
        return (
          
                <div>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',color:'#fff'}} className='register-top'>
                    <Link to='/'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>注册</p>
                    </div>
                    <img src='http://116.62.14.0:8666/api/image/4' style={{width:'56%',marginTop:'25%',marginLeft:'22%'}}/>
                    {/* <div style={{height:'40%'}}> */}
                    <form>
                        <input type='text' className='register-name' placeholder='邮箱' value={this.state.value} onChange={this.getEmail} />
                        <div className='register-tel'>
                            <input type='tel' className='register-tell' placeholder='验证码' value={this.state.code} onChange={this.getCode1} />
                            {/* <input type='submit' value='获取验证码' className='register-telr' onClick={this.getCode} /> */}
                            <button className='register-telr' onClick={this.getCode}>获取验证码</button>
                        </div>
                        <input type='password' className='register-pswd' placeholder='设置密码' value={this.state.pwd} onChange={this.getPwd} onFocus={this.show} onBlur={this.unShow}  />
                        <div style={{color:'gray',display:`${this.state.display}`,width:'70%',textAlign:'center',marginLeft:'15%',marginTop:'1%',fontSize:'12px'}}>*密码不能小于6个字符，英文和数字混合</div>
                        <input type='password' className='register-pswd' placeholder='确认密码' value={this.state.repwd} onChange={this.getRepwd}/>
                        <div style={{height:40}}>
                            <input type='checkbox' className='register-check' checked={this.state.checked}  onChange={this.getChecked} />
                            <p style={{color:'#000',float:'left',fontSize:'13px',marginTop:'15px'}}>同意用户协议</p>
                        </div>
                        {/* <Link to='/login'> */}
                            <input type='submit' className='register-but' value='注册' onClick={this.toRegister} />
                        {/* </Link> */}
                        <Link to={{
                                pathname:'/login',
                                state:{
                                    new:this.state.new
                                }
                            }} style={{color:'#000',fontSize:'13px',float:'right',marginRight:'13%',marginTop:'5px',textDecoration:'none'}}>已经注册，点击登录</Link>
                    {/* </div> */}
                    </form>
                </div>
         
        )
    }
}

import React, { Component } from 'react'
export default class Headers extends Component {
    constructor(){
        super();
        this.state={
            visible:false,
            display:'none',
            i:0
        }
    }
    show=()=>{
        if(this.state.i%2===0){
            this.setState({
                display:'block',
                i:this.state.i+1
            })
        }else{
            this.setState({
                display:'none',
                i:this.state.i+1
            })
        }
    }
    
    handleClick(event){
        this.props.history.push("/enter");
      }
    render() {
        return (
            <div>
                <div className='h-t-l'>
                    <div className='h-t-i'>
                        <img src='http://116.62.14.0:8666/api/image/97' style={{width:'75%',height:'auto',paddingRight:'25%'}} />
                    </div> 
                    <input type='text' placeholder='请输入要查找的内容' />
                </div>    
                <div className='h-t-r'>
                    <div className='rh'>
                        <img src='http://116.62.14.0:8666/api/image/100' />
                    </div>
                    <div className='rn'>
                        <div style={{float:'left',position:'relative',paddingLeft:'5%',zIndex:'999',color:'#fff'}} onClick={this.show}>admin ▼
                            <ul style={{position:"absolute",top:'110%',zIndex:'999!important'}} display={this.state.display}>
                                <li style={{zIndex:999,width:'200%',background:'#fff',listStyle:'none',fontSize:'13px',textAlign:'center',paddingTop:'6%',paddingBottom:'6%',boxShadow:'0 0 1px 1px #8bcca1',display:`${this.state.display}`}}>
                                    <a style={{color:'#57a099'}}>修改密码</a></li>
                                <li style={{zIndex:'999!important',width:'200%',background:'#fff',listStyle:'none',fontSize:'13px',textAlign:'center',paddingTop:'6%',paddingBottom:'6%',boxShadow:'0 0 1px 1px #8bcca1',display:`${this.state.display}`}}>
                                <a target="_self" rel="noopener noreferrer" href="/" 
                                style={{color:'#57a099'}}
                                >
                                退出登录
                                </a></li>
                            </ul>    
                        </div>
                    </div>
                    <div className='ri'>
                        <img src='http://116.62.14.0:8666/api/image/105' />
                        <img src='http://116.62.14.0:8666/api/image/104' />
                        <img src='http://116.62.14.0:8666/api/image/102' />
                    </div>
                </div>
            </div>
        )
    }
}

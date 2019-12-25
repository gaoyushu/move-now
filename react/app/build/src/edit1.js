import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Edit1 extends Component {
   
   
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'100px',position:'fixed',zIndex:'1000',color:'#fff'}}>
                        <div style={{width:'100%',height:'50px',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)'}}>
                        <Link to='/diary'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link></div>
                        <div className='edit-imgdiv' style={{}}>
                        <img src='src/images/bold.png' className='edit-imgl'/>
                        <img src='src/images/倾斜.png' className='edit-imgl' style={{left:'15%'}}/>
                        <img src='src/images/下划线.png' className='edit-imgl' style={{left:'25%'}}/>
                        <img src='src/images/删除线.png' className='edit-imgl' style={{left:'35%',width:'24px'}}/>
                        <img src='src/images/链接.png' className='edit-imgl' style={{left:'45%',width:'24px'}}/>
                        <Link to='/details'><img src='src/images/save.png' className='edit-img'/></Link>
                    </div>
                    </div>
                    
                    <input type='text' placeholder='写个标题吧~' className='edit-input' style={{position:'relative',marginTop:100}}></input>
                    <textarea rows="13" cols="30" className='edit-area'>多行输入</textarea>
                   
                </div>
           
        )
    }
}

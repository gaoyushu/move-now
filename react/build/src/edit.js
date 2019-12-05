import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Edit extends Component {
   
   
    render() {
        let date=moment().format('YYYY/MM/DD');
        var path = {
            pathname:'/details',
                                state:{
                                    // path2:'/message',
                                    path1:this.props.location.state.path2
                                }
          }
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#1c4678',color:'#fff'}}>
                        <Link to='diarytab'>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                        <p className='edit-p'>{date}</p>
                    </div>
                    <div className='edit-imgdiv'>
                        <img src='images/bold.png' className='edit-imgl'/>
                        <img src='images/倾斜.png' className='edit-imgl' style={{left:'15%'}}/>
                        <img src='images/下划线.png' className='edit-imgl' style={{left:'25%'}}/>
                        <img src='images/删除线.png' className='edit-imgl' style={{left:'35%',width:'24px'}}/>
                        <img src='images/链接.png' className='edit-imgl' style={{left:'45%',width:'24px'}}/>
                        <Link to={path}><img src='images/save.png' className='edit-img'/></Link>
                    </div>
                    <input type='text' placeholder='写个标题吧~' className='edit-input'></input>
                    <textarea rows="13" cols="30" className='edit-area'>多行输入</textarea>
                   
                </div>
           
        )
    }
}

import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Comment extends Component {
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to='/detailsYou'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <input type='text' className='comment-name' placeholder='取个名字吧~'/>
                    <textarea rows="13" cols="30" className='comment-area'>评论一下</textarea>
                    <Link to='/detailsYou'>
                        <button className='comment-but'>评论</button>
                    </Link>
                </div>
           
        )
    }
}

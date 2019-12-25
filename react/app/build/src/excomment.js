import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Excomment extends Component {
    render() {
        // var path = {
        //     pathname:'/petal',
        //                         state:{
        //                             // path2:'/message',
        //                             path1:this.props.location.state.path2
        //                         }
        //   }
        return (
            
                <div className='comment'>
                    <div style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#8bcca1',color:'#fff'}}>
                        <Link to='/detailsSimi'>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <input type='text' className='comment-name' placeholder='取个名字吧~'/>
                    <textarea rows="13" cols="30" className='comment-area'>评论一下</textarea>
                    <Link to='/detailsSimi'>
                        <button className='comment-but'>评论</button>
                    </Link>
                </div>
           
        )
    }
}

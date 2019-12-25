import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Sentence extends Component {
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
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to='/exchange'>
                            <span style={{lineHeight:'45px',marginLeft:10,textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <input type='text' className='comment-name' placeholder='一句话介绍~' style={{marginTop:60}}/>
                    <textarea rows="13" cols="30" className='comment-area' style={{marginTop:10}}>补充一下~</textarea>
                    <div style={{width:'100%',height:40}}>
                    <Link to='/select2'><button style={{marginTop:10,marginBottom:0,width:'100%',height:40,backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>选择日记</button></Link>
                    <Link to='/exchange'>
                        <input type='submit' value='确定' className='comment-but'/>
                    </Link>
                    </div>
                </div>
           
        )
    }
}

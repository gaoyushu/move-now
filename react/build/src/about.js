import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
                <div className='about'>
                    <div style={{borderBottom:'1px solid #2b6bb9',width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundColor:'#1c4678',color:'#fff'}}>
                        <Link to='/set'>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <p>高予蜀 周弘 牛玉欣 孙童</p>
                </div>
        )
    }
}

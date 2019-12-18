import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
                <div className='about'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',color:'#fff'}}>
                        <Link to='/my'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <img src='http://116.62.14.0:8666/api/image/5' className='about-img'/>
                    <p>高予蜀 周弘 牛玉欣 孙童</p>
                </div>
        )
    }
}

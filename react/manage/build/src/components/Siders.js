import React, { Component } from 'react'
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import { MenuItem } from 'rc-menu';
const { SubMenu } = Menu;

export default class Siders extends Component {
  constructor(props){
    super(props);
    this.state={
      currentIndex:0
    }

  }
  setCurrentIndex=(e)=>{
    this.setState({
      currentIndex:parseInt(e.currentTarget.getAttribute('index'),10)
    })
  }
  handleClick=(e)=>{
    console.log(e);
  }
    render() {
      let arr=[{value:'主页',pathname: `/enter/home`},{value:'系统管理', pathname: `/enter/system`},
      {value:'用户管理',pathname: `/enter/user`},{value:'日记管理',pathname: `/enter/diary` },
      {value:'评论管理',pathname: `/enter/comments`}]
      let list=[];
      arr.map((item,key)=>(list.push(<Link to={{ pathname:`${item.pathname}` }} key={key}><li key={key} onClick={this.setCurrentIndex} index={key} className={this.state.currentIndex===key?'active':'' }>{item.value}</li></Link>)))
        
      
        return (
            <div>
                {/* <div className='h-t'>
                    <img src='/images/logo.png' alt='logo' />
                </div> */}
                <div className='h-b'>
                  <ul>
                    {list}
                    {/* <Link to={{ pathname: `/enter/home` }}><li key="/home">主页</li></Link>
                    <Link to={{ pathname: `/enter/system` }}><li key="/system">系统管理</li></Link>
                    <Link to={{ pathname: `/enter/user` }}><li key="/user">用户管理</li></Link>
                    <Link to={{ pathname: `/enter/diary` }}><li key='/diary'>日记管理</li></Link>
                    <Link to={{ pathname: `/enter/comments` }}><li>评论管理</li></Link>
                    <Link to={{ pathname: `/enter/picture` }}><li key='/picture'>图片管理</li></Link> */}
                  </ul>
                </div>
                <div className='h-t'>
                    <img src='http://116.62.14.0:8666/api/image/92' alt='logo' />
                </div>
            </div>
        )
    }
}

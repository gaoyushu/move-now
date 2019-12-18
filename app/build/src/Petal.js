import React, { Component } from 'react';
import Content from './Content';
import {Link,Route} from 'react-router-dom';

export default class Petal extends Component {
    constructor(){
        super();
        this.state={
            i:0,
            j:0,
            backgroundColor1:'white',
            color1:'#1C4678',
            c1:'点赞',
            backgroundColor2:'white',
            color2:'#1C4678',
            c2:'收藏'
        }
    }
    handleclick1=()=>{
        this.setState({
            i:this.state.i+1
        },()=>{
          if(this.state.i%2==0){
            this.setState(
                {
                    backgroundColor1:'white',
                    color1:'#000',
                    c1:'点赞'
                }
            )
        }else{
            this.setState(
                {
                    backgroundColor1:'#8bcca1',
                    color1:'white',
                    c1:'已点赞'
            }
            )
        }   
        })
       
    }
    handleclick2=()=>{
        this.setState({
            j:this.state.j+1
        },()=>{
          if(this.state.j%2==0){
            this.setState(
                {
                    backgroundColor2:'white',
                    color2:'#000',
                    c2:'收藏'
                }
            )
        }else{
            this.setState(
                {
                    backgroundColor2:'#8bcca1',
                    color2:'white',
                    c2:'已收藏'
            }
            )
        }   
        })
       
    }
    render() {
        // var path = {
        //     pathname:'/comment',
        //                         state:{
        //                             path2:this.props.location.state.path1,
                                
        //                         }
        //   }
        return (
            <div>
                <div className='headerss' >
                    {/* 跳到花海 */}
                    <Link to='/home'>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                    </Link> 
                        <span style={{float:"left",paddingLeft:'30%'}}>2019/12/02</span>
                </div>
                <div className='temp'>

                </div>
                <Content/>
                <div className='buttons'>
                    <ul>
                        <Link to='/comment'><li >评论</li></Link>
        <li onClick={this.handleclick1}  style={{backgroundColor:this.state.backgroundColor1,color:this.state.color1}} >{this.state.c1}</li>
        {/* <li onClick={this.handleclick2}  style={{backgroundColor:this.state.backgroundColor2,color:this.state.color2}} >{this.state.c2}</li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

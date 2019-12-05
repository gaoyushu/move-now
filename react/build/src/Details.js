import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Content';


export default class Details extends Component {
    constructor(){
        super();
        this.state={
            i:0,
            j:0,
            backgroundColor1:'white',
            color1:'#1C4678',
            c1:'公开',
            backgroundColor2:'white',
            color2:'#1C4678',
            c2:'花海'
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
                    color1:'#1C4678',
                    c1:'公开'
                }
            )
        }else{
            this.setState(
                {
                    backgroundColor1:'#1C4678',
                    color1:'white',
                    c1:'锁住'
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
                    color2:'#1C4678',
                    c2:'花海'
                }
            )
            // console.log(this.props.location.state.path1);
        }else{
            this.setState(
                {
                    backgroundColor2:'#1C4678',
                    color2:'white',
                    c2:'已投'
            }
            )
        }   
        })
       
    }
    render() {
        var path = {
            pathname:'/edit',
                                state:{
                                    path2:this.props.location.state.path1,
                                
                                }
          }
        return (
            <div>
                <div className='headerss' >
                    {/* 跳到日记 */}
                    <Link to={this.props.location.state.path1}>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                    </Link> 
                        <span style={{float:"left",paddingLeft:'30%'}}>2019/12/02</span>
                </div>
                <div className='temp'>

                </div>
                <Content/>
                <div className='buttons'>
                    <ul>
        <li onClick={this.handleclick1}  style={{backgroundColor:this.state.backgroundColor1,color:this.state.color1}}>{this.state.c1}</li>
                        <Link to={path}><li style={{backgroundColor:'#1C4678',color:'white'}} >编辑</li></Link>
                        <li onClick={this.handleclick2}  style={{backgroundColor:this.state.backgroundColor2,color:this.state.color2}}>{this.state.c2}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

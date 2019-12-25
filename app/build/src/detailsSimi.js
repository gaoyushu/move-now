import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Content';


export default class DetailsSimi extends Component {
    constructor(){
        super();
        this.state={
            i:0,
            j:0,
            // backgroundColor1:'white',
            // color1:'#1C4678',
            // c1:'公开',
            backgroundColor2:'white',
            color2:'#1C4678',
            c2:'点赞'
        }
    }
    // handleclick1=()=>{
    //     this.setState({
    //         i:this.state.i+1
    //     },()=>{
    //       if(this.state.i%2==0){
    //         this.setState(
    //             {
    //                 backgroundColor1:'white',
    //                 color1:'#1C4678',
    //                 c1:'公开'
    //             }
    //         )
    //     }else{
    //         this.setState(
    //             {
    //                 backgroundColor1:'#1C4678',
    //                 color1:'white',
    //                 c1:'锁住'
    //         }
    //         )
    //     }   
    //     })
       
    // }
    handleclick2=()=>{
        this.setState({
            j:this.state.j+1
        },()=>{
          if(this.state.j%2==0){
            this.setState(
                {
                    backgroundColor2:'white',
                    color2:'#000',
                    c2:'点赞'
                }
            )
            // console.log(this.props.location.state.path1);
        }else{
            this.setState(
                {
                    backgroundColor2:'#8bcca1',
                    color2:'white',
                    c2:'已赞'
            }
            )
        }   
        })
       
    }
    render() {
        // var path = {
        //     pathname:'/edit',
        //                         state:{
        //                             path2:this.props.location.state.path1,
                                
        //                         }
        //   }
        return (
            <div>
                <div className='headerss' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)'}}>
                    {/* 跳到日记 */}
                    <Link to='/exdiary'>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                    </Link> 
                        <span style={{float:"left",paddingLeft:'30%'}}>2019/12/02</span>
                </div>
                <div className='temp'>

                </div>
                    <div style={{backgroundColor:'#fff',float:'left',width:'100%'}}>
                        <div className='mains'>
                        <span style={{fontSize:'18px',fontWeight:'bolder',width:'100%',float:'left',marginTop:'5%',marginBottom:'5%'}} >今天小记</span>
                        <p>· 前几天刷微博看到有人说 成年人突然下定决心想要改变生活时 会不约而同做两件事：健身&学英语</p>
                        <p>· 怀疑网友在我的生活里安了监控 现在办了健身卡也开始重拾英语 / 每天在cambly上跟native speaker练口语 不试不知道 自己已经垃圾成这样了[泪]</p>
                        <p>· 买了两箱全麦面包 吃不完了 悔恨 不该囤货！只能再买个三明治机 帮助吃完了 哎！（其实心动已久） </p>
                        <p>· 前几天刷微博看到有人说 成年人突然下定决心想要改变生活时 会不约而同做两件事：健身&学英语</p>
                        <p>· 怀疑网友在我的生活里安了监控 现在办了健身卡也开始重拾英语 / 每天在cambly上跟native speaker练口语 不试不知道 自己已经垃圾成这样了[泪]</p>
                        <p>· 买了两箱全麦面包 吃不完了 悔恨 不该囤货！只能再买个三明治机 帮助吃完了 哎！（其实心动已久） </p> ​​​​​​​​
                        </div>
                    </div>
                <div className='buttons'>
                    <Link to='/excomment'><button className='comment-but' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>评论</button></Link>
                </div>
                <div className='comments' style={{border:'0px'}}>
                    <div className='comm'>
                        <div className='simi-tou'>
                            <div className='simi-touxiang'>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <span className='c-user' >牵牛花:</span>
                        </div>
                        <p className='c-content'>{`我也开始健身和学习英语啦，感觉学习真的不容耽搁，活到老学到老啦><`}</p>
                        <span className='c-time' >2019/12/3 10:29</span>
                    </div>
                    <div className='comm'>
                    <div className='simi-tou'>
                            <div className='simi-touxiang'>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <span className='c-user' >玫瑰:</span>
                        </div>
                        <p className='c-content'>{`对啊，12月底还有英语四六级！`}</p>
                        <span className='c-time' >2019/12/3 10:29</span>
                    </div>
                </div>
            </div>
        )
    }
}

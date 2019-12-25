import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/my",
            display1:'block',
            display2:'none',
            display3:'block',
            display4:'none'
        }
    }
    zan=()=>{
        this.setState({
            display1:'none',
            display2:'block',
        })
    }
    zan1=()=>{
        this.setState({
            display2:'none',
            display1:'block',
        })
    }
    collect=()=>{
        this.setState({
            display3:'none',
            display4:'block',
        })
    }
    collect1=()=>{
        this.setState({
            display4:'none',
            display3:'block',
        })
    }
    render() {
        return (
            <div>
                <div className='home-head'>
                    <Link to='/follow'>
                        <span style={{marginLeft:10,textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                    </Link>
                    <img src='src/images/关注.png' style={{display:this.state.display3,width:30,height:30,float:'right',marginTop:10,marginRight:5}} onClick={this.collect}/>
                    <img src='src/images/关注1.png' style={{display:this.state.display4,width:30,height:30,float:'right',marginTop:10,marginRight:5}} onClick={this.collect1}/>
                    <div className='home-headt'>
                        <div className='home-img'>
                            <img src='src/images/touxiang.jpg'/>
                        </div>
                        <div className='home-name'> 
                            <p>快乐的代码机器</p>
                        </div>
                    </div>
                    <div className='home-headb'>
                        
                        
                        <div className='home-two1'>
                            <p className='home-p1'>关注 10</p>
                            {/* <p className='home-p2'>10</p> */}
                        </div>
                        <div className='home-two2'>
                            <p className='home-p1'>粉丝 10</p>
                            {/* <p className='home-p2'>10</p> */}
                        </div>
                    </div>
                    <div className='home-sign'>
                        <p>我不是真正的快乐</p>
                    </div>
                </div>
                        <div className='home-div' style={{backgroundColor:'#fff',width:'100%',marginLeft:0,marginTop:'1px'}}>
                            <div className='home-diary' style={{marginTop:5}}>
                                <div className='home-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                    <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                                </div>
                                <div className='home-diaryr'>
                                <Link to='/detailsYou'><div className='home-diaryrt'>
                                        <p>冬天的意义啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿</p>
                                    </div></Link>
                                    <div className='home-diaryrb'>
                                        <p>8</p>
                                        <img src='src/images/喜欢.png' style={{display:this.state.display1}} onClick={this.zan}/>
                                        
                                        <img src='src/images/喜欢1.png' style={{display:this.state.display2}} onClick={this.zan1}/>
                                        <p>10</p>
                                        <Link to='/detailsYou'><img src='src/images/评论.png'/></Link>
                                    </div>  
                                    
                                </div>
                            </div>
                        </div>

                        <div className='home-div' style={{backgroundColor:'#fff',width:'100%',marginLeft:0,marginTop:'1px'}}>
                            <div className='home-diary' style={{marginTop:5}}>
                                <div className='home-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                    <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                                </div>
                                <Link to='/detailsYou'><div className='home-diaryr'>
                                    <div className='home-diaryrt'>
                                        <p>好想吃咖喱鸡块饭哦</p>
                                    </div>
                                    <div className='home-diaryrb'>
                                        <p>8</p>
                                        <img src='src/images/喜欢.png' style={{display:this.state.display1}} onClick={this.zan}/>
                                        
                                        <img src='src/images/喜欢1.png' style={{display:this.state.display2}} onClick={this.zan1}/>
                                        <p>10</p>
                                        <Link to='/detailsYou'><img src='src/images/评论.png'/></Link>
                                    </div>  
                                    
                                </div></Link>
                            </div>
                        </div>

                        <div className='home-div' style={{backgroundColor:'#fff',width:'100%',marginLeft:0,marginTop:'1px'}}>
                            <div className='home-diary' style={{marginTop:5}}>
                                <div className='home-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                    <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                                </div>
                                <Link to='/detailsYou'><div className='home-diaryr'>
                                    <div className='home-diaryrt'>
                                        <p>今天也要加班写实训</p>
                                    </div>
                                    <div className='home-diaryrb'>
                                        <p>8</p>
                                        <img src='src/images/喜欢.png' style={{display:this.state.display1}} onClick={this.zan}/>
                                        
                                        <img src='src/images/喜欢1.png' style={{display:this.state.display2}} onClick={this.zan1}/>
                                        <p>10</p>
                                        <Link to='/detailsYou'><img src='src/images/评论.png'/></Link>
                                    </div>  
                                    
                                </div></Link>
                            </div>
                        </div>
                        <div className='home-div' style={{backgroundColor:'#fff',width:'100%',marginLeft:0,marginTop:'1px'}}>
                            <div className='home-diary' style={{marginTop:5}}>
                                <div className='home-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                    <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                                </div>
                                <Link to='/detailsYou'><div className='home-diaryr'>
                                    <div className='home-diaryrt'>
                                        <p>嘻嘻嘻嘻</p>
                                    </div>
                                    <div className='home-diaryrb'>
                                        <p>8</p>
                                        <img src='src/images/喜欢.png' style={{display:this.state.display1}} onClick={this.zan}/>
                                        
                                        <img src='src/images/喜欢1.png' style={{display:this.state.display2}} onClick={this.zan1}/>
                                        <p>10</p>
                                        <Link to='/detailsYou'><img src='src/images/评论.png'/></Link>
                                    </div>  
                                    
                                </div></Link>
                            </div>
                        </div>
                        <div className='home-div' style={{backgroundColor:'#fff',width:'100%',marginLeft:0,marginTop:'1px'}}>
                            <div className='home-diary' style={{marginTop:5}}>
                                <div className='home-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>01</p>
                                    <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>2019/12</p>
                                </div>
                                <Link to='/detailsYou'><div className='home-diaryr'>
                                    <div className='home-diaryrt'>
                                        <p>眼睛要瞎了</p>
                                    </div>
                                    <div className='home-diaryrb'>
                                        <p>8</p>
                                        <img src='src/images/喜欢.png' style={{display:this.state.display1}} onClick={this.zan}/>
                                        
                                        <img src='src/images/喜欢1.png' style={{display:this.state.display2}} onClick={this.zan1}/>
                                        <p>10</p>
                                        <Link to='/detailsYou'><img src='src/images/评论.png'/></Link>
                                    </div>  
                                    
                                </div></Link>
                            </div>
                        </div>
                        <div style={{paddingTop:40,paddingBottom:20,position:'relative',width:'100%'}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
                    </div>

                    
                 
                
                
            
      </div>
        )
    }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Toast } from 'antd-mobile';
export default class Details extends Component {
    constructor(){
        super();
        this.state={
            i:0,
            j:0,
            backgroundColor2:'white',
            color2:'#1C4678',
            c2:'公开',
            data:{},
            comments:[],
            value:''
        }
    }
  
      componentDidMount(){
        console.log(this.props.location.state.did);
        fetch('http://116.62.14.0:8666/diary/detail/'+this.props.location.state.did+'/'+localStorage.getItem('token'))
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             if(res.data.dimage===-1){
                 var a=res.data;
                 a.dimage=null;
                this.setState({
                    data:a,
                    comments:a.comments
    
                });
             }
             else{
                 this.setState({
                data:res.data,
                comments:res.data.comments

            });}
            if(res.data.dtype=='private'){
                this.setState({
                    value:'公开'
                })
            }else{
                this.setState({
                    value:'锁住'
                })
            }
        });

      }
    
    changeState=()=>{
       
        console.log(this.props.location.state.did)
            fetch('http://116.62.14.0:8666/diary/type/'+this.props.location.state.did, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token:localStorage.getItem('token'), diaryid:`${this.props.location.state.did}`})})
                .then(res =>{ return res.json() })
                .then(res =>{ 
                    console.log(res);
                    if(res.status===0){
                        Toast.success(res.data,1)
                        
                    }
                 });
                if(this.state.data.dtype=='public'){
                    var arr=this.state.data;
                    arr.dtype='private';
                    this.setState({
                        value:'公开',
                        data:arr
                    })
                }else{
                    var arr=this.state.data;
                    arr.dtype='public';
                    this.setState({
                        value:'锁住'
                    })
                }        
                        
                    }
    render() {
        return (
            <div>
                <div className='headerss' >
                    {/* 跳到日记 */}
                    <Link to='/diary'>
                        <span style={{textDecoration:'none',color:'#fff',fontWeight:'bolder',width:'10%',fontSize:'25px',float:'left'}}>{`<`}</span>
                    </Link> 
        <span style={{float:"left",paddingLeft:'25%'}}>{this.state.data.dtime}</span>
                </div>
                <div className='temp'>

                </div>
                {/* <Content/> */}


            <div style={{backgroundColor:'#fff',float:'left',width:'100%'}}>
                <div className='topbar'>
                        <div className='tb-l'>
                           <div className='tb-h'>
                           <img src={'http://116.62.14.0:8666/api/image/'+this.state.data.uimage} style={{height:'100%'}}  />
                            </div> 
                        </div>
                            
                        <div className='tb-r'>
                            <div className='tb-n'>
                                {this.state.data.uname}
                            </div>
                            <div className='tb-i'>
                                {this.state.data.uintroduce}
                            </div>
                        </div>    
                    </div>
                <div className='mains'>
        {/* <span style={{fontSize:'18px',fontWeight:'bolder',width:'100%',float:'left',marginTop:'5%',marginBottom:'5%'}} >{this.state.data.dtitle}</span>
        <p>· {this.state.data.dcontent}</p>
                 */}
                        <div className='mains-ti' >
                            {this.state.data.dtitle}
                        </div>
                        <div className='mains-c'>
                            {this.state.data.dcontent}
                        </div>
                        {this.state.data.dimage?
                        <div className='mains-img'>
                            <img src={"http://116.62.14.0:8666/api/image/"+this.state.data.dimage} />
                        </div>
                        :<div></div>}
                </div>
                <div className='buttons'>
                    <ul>
        {/* <li onClick={this.handleclick1}  style={{backgroundColor:this.state.backgroundColor1,color:this.state.color1}}>{this.state.c1}</li> */}
                        <Link to={{
                        pathname:'/edit',
                        state:{
                            did:this.props.location.state.did
                        }
                    }}><li style={{backgroundColor:'#ff',color:'#000'}} >编辑</li></Link>
                        <li   style={{backgroundColor:this.state.backgroundColor2,color:this.state.color2}} onClick={this.changeState}>{this.state.value}</li>
                    </ul>
                </div>
                <div className='comments'>
                    {
                        // console.log(this.state.data.comments),
                        this.state.comments=='暂无评论'?<div></div>
                        :this.state.comments.map((item,key)=>(
                    <div className='comm' key={key}>
                        <div className='simi-tou'>
                            <div className='simi-touxiang'>
                            <img src={'http://116.62.14.0:8666/api/image/'+item.uimage}  />
                            </div>
                            <span className='c-user' >{item.uname}:</span>
                        </div>
                        <p className='c-content'>{item.comcontent}</p>
                        <span className='c-time' >{item.comtime}</span>
                    </div>
                        ))
    }
                  
                </div>
                </div>


                {/* <div className='buttons'>
                    <ul> */}
        {/* <li onClick={this.handleclick1}  style={{backgroundColor:this.state.backgroundColor1,color:this.state.color1}}>{this.state.c1}</li> */}
                        {/* <Link to={{
                        pathname:'/edit',
                        state:{
                            did:this.props.location.state.did
                        }
                    }}><li style={{backgroundColor:'#ff',color:'#000'}} >编辑</li></Link>
                        <li   style={{backgroundColor:this.state.backgroundColor2,color:this.state.color2}} onClick={this.changeState}>{this.state.value}</li>
                    </ul>
                </div> */}
            </div>
        )
    }
}

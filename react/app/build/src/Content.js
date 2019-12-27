import React, { Component } from 'react';


export default class Content extends Component {
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
            c2:'公开',
            data:[]
        }
    }
  
    //   componentDidMount(){
    //     console.log(this.props.location.state.did);
    //     var url='http://116.62.14.0:8799/change/detail/'+this.props.location.state.did+'/3';
    //     console.log(url);
    //     // fetch('http://116.62.14.0:8799/change/detail/'+this.props.location.state.shortdes_id+'/3')
    //     fetch('http://116.62.14.0:8710/diary/detail/'+this.props.location.state.did+'/1')
    //     .then(res =>{ return res.json() })
    //     .then(res =>{
    //          console.log(res); 
    //          this.setState({
    //             data:res.data

    //         })
    //     });

    //   }
    render() {
        return (
            <div>
                <div style={{backgroundColor:'#fff',float:'left',width:'100%'}}>
                <div className='mains'>
                <span style={{fontSize:'18px',fontWeight:'bolder',width:'100%',float:'left',marginTop:'5%',marginBottom:'5%'}} >今天小记</span>
        <p>· {this.state.data.dcontent}</p>
                
                </div>
                <div className='comments'>
                    {/* {
                        this.state.data.comments=='暂无评论'?<div></div>
                        :this.state.data.map((item,key)=>( */}
                    <div className='comm'>
                        <div className='simi-tou'>
                            <div className='simi-touxiang'>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <span className='c-user' >{this.state.data.uname}:</span>
                        </div>
                        <p className='c-content'>{this.state.data.comcontent}</p>
    <span className='c-time' >{this.state.data.comtime}</span>
                    </div>
                        {/* ))
    } */}
                  
                </div>
                </div>
            </div>
        )
    }
}

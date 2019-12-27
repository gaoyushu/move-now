import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
export default class Open extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            status:0
        }
      }
    componentDidMount(){
        // if(this.props.location.state.new){

        // }
        fetch('http://116.62.14.0:8666/chat/friends/'+localStorage.getItem('token'))
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data,
                status:res.status

            })
        });

      }
    render() {
        return (
            <div>
                <div className='f-headers'>
                <Link to='/my'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>好友列表</p>
                    
                </div>
                {/* <div className='f-choise'>
                    <Link to='/anonymous'>
                        <div className='f-but11'>
                            匿名
                        </div>
                    </Link>                     
                    <div className='f-but21'>
                        公开
                    </div>
                </div> */}
                {
                this.state.status!==-1
                ?this.state.data.map((item,key)=>(
                <div className='f-p' key={key} >
                    <Link to={'/open/home/'+item.fuid}><div className='f-p-h' style={{backgroundColor:'#fff'}}>
                        <img src={'http://116.62.14.0:8666/api/image/'+this.state.data[key].uimage} />
                    </div></Link>
                    <Link to={{
                        pathname: '/talk',
                        state: {
                            uid:item.uid,
                            fuid:item.fuid
                        }
                    }}>
                        <div className='f-p-t'>
                            {item.uname}
                        </div>
                        <div className='f-p-y'>
                            {item.uintroduce}
                        </div>
                    </Link>
                </div>
                ))
                :<div></div>
            }
                {/* <div className='f-p'>
                    <div className='f-p-h'>
                        <img src='src/images/logo.png' />
                    </div>
                    <div className='f-p-t'>
                        朝花夕拾
                    </div>
                    <div className='f-p-y'>
                        这里是一条没什么用的签名……
                    </div>
                </div>
                <div className='f-p'>
                    <div className='f-p-h'>
                        <img src='src/images/logo.png' />
                    </div>
                    <div className='f-p-t'>
                        朝花夕拾
                    </div>
                    <div className='f-p-y'>
                        这里是一条没什么用的签名……
                    </div>
                </div> */}
            </div>
        )
    }
}
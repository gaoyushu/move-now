import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
export default class Open extends Component {
    render() {
        return (
            <div>
                <div className='f-headers'>
                <Link to='/my'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>好友列表</p>
                    
                </div>
                <div className='f-choise'>
                    <Link to='/anonymous'>
                        <div className='f-but11'>
                            匿名
                        </div>
                    </Link>                     
                    <div className='f-but21'>
                        公开
                    </div>
                </div>
                <div className='f-p'>
                    <Link to='/homeF'><div className='f-p-h'>
                        <img src='src/images/logo.png' />
                    </div></Link>
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
                </div>
            </div>
        )
    }
}

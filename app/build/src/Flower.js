import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Flower extends Component {
    
    render() {
        var path = {
            pathname:'/petal',
                                state:{
                                    path1:'/flower',
                                    // path2:'/collect'
                                }
          }
        return (
            <div>
                <div className='flowers' >
                    <div className='headersss'>
                        <span style={{float:'left',paddingLeft:'42%'}} >花海</span>
                        <Link to='/set'><span style={{float:'right',width:'15%',height:'auto',paddingRight:'5%',paddingLeft:'5%'}} ><img src='./images/设置.png' alt='设置' style={{width:'100%',height:'auto'}} /></span></Link>
                    </div>
                    <div className='mainss'>
                        <img src='./images/主.png' style={{paddingRight:'10%',paddingLeft:'10%',width:'100%',height:'auto',marginTop:'16%',position:"absolute",float:'left'}} />
                        <img src='./images/广.png' style={{width:'50%',height:'auto',position:'absolute',marginTop:'16%',zIndex:'10'}} />
                        <Link to='message'><img src='./images/信.png' style={{width:'30%',height:'auto',position:'absolute',marginTop:'90%',zIndex:'10'}} /></Link>
                        <Link to={path}><img src='./images/p1.png' style={{width:'40%',height:'auto',position:'absolute',marginRight:'10%',right:0,marginTop:'80%',zIndex:'10'}} /></Link>
                    </div>
                </div>                
            </div>
        )
    }
}

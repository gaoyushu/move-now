import React, { Component } from 'react'
import {Toast} from 'antd-mobile';
import {TabBar,Carousel, WingBlank } from 'antd-mobile'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Guide extends Component {
    constructor(props){
        super(props);
        this.state={
            // selectedTab: "/exchange",
            // data:[],
            // ok:-1,
            data1: ['73', '71', '72','74'],
            imgHeight: 176,
        }
      }
    
    render() {
        return (
            <div className='comment'>
                <WingBlank style={{margin:0,position:'relative'}}>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data1.map(val => (
            <a
              key={val}
            //   href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={'http://116.62.14.0:8666/api/image/'+val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <Link to='/start'>
      <button style={{width:'50%',height:40,marginLeft:'25%',position:'absolute',zIndex:'1000',bottom:'5%',backgroundColor:'#8bcca1',color:'#fff',border:'3px solid #fff',borderRadius:5}}>我知道了</button></Link>
                   </div>   
        )
    }
}

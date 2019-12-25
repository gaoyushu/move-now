import React, { Component } from 'react'
import Headers from '../Headers';
import Contents from '../Contents';
import { Slider } from 'antd';
import Siders from '../Siders';
import System from './System';
import User from './User';
import Diary from './Diary';
import Comments from './Comments';
import Picture from './Picture';
import { HashRouter as Router,Route,Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            dataone:'',
            datatwo:'',
            datathree:'',
            datafour:'',
            datafive:''
            // status:0
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8677/all')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                dataone:res.dataone,
                datatwo:res.datatwo,
                datathree:res.datathree,
                datafour:res.datafour,
                datafive:res.datafive
                // status:res.status

            })
        });

      }
    render() {
        return (
            // <div style={{width:'100%',height:'100%',position:'fixed',background:'ghostwhite'}}>
            <div>
                {/* <div className='contents'> */}
                    {/* <Contents /> */}
                    <div className='h-b1'>
                        <div className='b1-s'>
                            <div className='s-t'>
                                {this.state.dataone}
                            </div>
                            <div className='s-c'>
                                今日用户上线量
                            </div>
                            <div  className='s-b'>
                                <img src='http://116.62.14.0:8666/api/image/99' />
                            </div>
                        </div>
                        <div className='b1-s'>
                            <div className='s-t'>
                            {this.state.datatwo}
                            </div>
                            <div className='s-c'>
                                总用户量
                            </div>
                            <div  className='s-b'>
                                <img src='http://116.62.14.0:8666/api/image/98' />
                            </div>
                        </div>
                        <div className='b1-s'>
                            <div className='s-t'>
                            {this.state.datathree}
                            </div>
                            <div className='s-c'>
                                日记量
                            </div>
                            <div  className='s-b'>
                                <img src='http://116.62.14.0:8666/api/image/101' />
                            </div>
                        </div>
                        <div className='b1-s'>
                            <div className='s-t'>
                            {this.state.datafour}
                            </div>
                            <div className='s-c'>
                                一句话量
                            </div>
                            <div  className='s-b'>
                                <img src='http://116.62.14.0:8666/api/image/103' />
                            </div>
                        </div>
                        <div className='b1-s'>
                            <div className='s-t'>
                            {this.state.datafive}
                            </div>
                            <div className='s-c'>
                                交换日记量
                            </div>
                            <div  className='s-b'>
                                <img src='http://116.62.14.0:8666/api/image/93' />
                            </div>
                        </div>
                    </div>
                    <div className='h-b2'>
                        <div className='b2-i'>
                            <img src='http://116.62.14.0:8666/api/image/96'/>
                        </div>
                        
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

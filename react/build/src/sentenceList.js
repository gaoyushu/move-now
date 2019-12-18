import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class SentenceList extends Component {
    constructor(props){
        super(props);
        this.state={
            open:[],
            close:[]
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8666/change/mine/1')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res);
             var opend=res.data.open;
             var closed=res.data.close;
             for(var i=0;i<opend.length;i++){
                var time =opend[i].dtime;
                if(time){
                var time1=time.split(',')[0];
                opend[i].time=time1;
                }
             }
             for(var i=0;i<closed.length;i++){
                var time =closed[i].dtime;
                if(time){
                var time1=time.split(',')[0];
                closed[i].time=time1;
                }
             }
             this.setState({
                open:opend,
                close:closed

            })
        });

      }
    render() {
        return (
            <div>
                <div className='sl-headers'>
                <Link to='/exchange'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>我的一句话列表</p>
                    
                </div>
                <div className='sl-s'>
                    <Accordion accordion openAnimation={{}} className="my-accordion">
                        <Accordion.Panel header="正在进行">
                            <List className="my-list">
                                {this.state.open
                ?this.state.open.map((item,key)=>(
                                <List.Item>
                                    <Link to={{
                        pathname:'/sentenceMy',
                        state:{
                            shortdes_id:item.shortdes_id
                        }
                    }}><div className='sl' >
                                        <div className='sl-t'>
                                            {item.shortdes}
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                            <span style={{fontWeight:'bolder'}}>{item.dnum}</span>
                                            </div>
                                            <div className='sl-b-r'>
                                                {item.time}
                                            </div>
                                        </div>
                                    </div></Link>

                                </List.Item>
                                ))
                            :<div></div>
                            }
                                
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="已完成">
                            <List className="my-list">
                            {this.state.close
                                ?this.state.close.map((item,key)=>(
                                <List.Item>
                                    <Link to={{
                        pathname:'/sentenceMy',
                        state:{
                            shortdes_id:item.shortdes_id
                        }
                    }}><div className='sl' >
                                        <div className='sl-t'>
                                        {item.shortdes}
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                                <span style={{fontWeight:'bolder'}}>{item.dnum}</span>
                                            </div>
                                            <div className='sl-b-r'>
                                            {item.time}
                                            </div>
                                        </div>
                                    </div></Link>
                                </List.Item>
                                ))
                                :<div></div>    
                            }
                                
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div>
        )
    }
}

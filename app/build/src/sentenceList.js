import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class SentenceList extends Component {
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
                                <List.Item>
                                    <Link to='sentenceMy'><div className='sl' >
                                        <div className='sl-t'>
                                            只要你主动，我们就会有故事
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                                <span style={{fontWeight:'bolder'}}>1</span>
                                            </div>
                                            <div className='sl-b-r'>
                                                2019/12/11 19:03
                                            </div>
                                        </div>
                                    </div></Link>

                                </List.Item>
                                <List.Item>
                                    <div className='sl' >
                                        <div className='sl-t'>
                                            只要你主动，我们就会有故事
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                                <span style={{fontWeight:'bolder'}}>1</span>
                                            </div>
                                            <div className='sl-b-r'>
                                                2019/12/11 19:03
                                            </div>
                                        </div>
                                    </div>

                                </List.Item>
                                <List.Item>
                                    <div className='sl' >
                                        <div className='sl-t'>
                                            只要你主动，我们就会有故事
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                                <span style={{fontWeight:'bolder'}}>1</span>
                                            </div>
                                            <div className='sl-b-r'>
                                                2019/12/11 19:03
                                            </div>
                                        </div>
                                    </div>

                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="已完成">
                            <List className="my-list">
                                <List.Item>
                                    <Link to='sentenceMy'><div className='sl' >
                                        <div className='sl-t'>
                                            只要你主动，我们就会有故事
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                                <span style={{fontWeight:'bolder'}}>1</span>
                                            </div>
                                            <div className='sl-b-r'>
                                                2019/12/11 19:03
                                            </div>
                                        </div>
                                    </div></Link>
                                </List.Item>
                                <List.Item>
                                    <div className='sl' >
                                        <div className='sl-t'>
                                            只要你主动，我们就会有故事
                                        </div>
                                        <div className='sl-b'>
                                            <div className='sl-b-r'>
                                                申请人数：
                                                <span style={{fontWeight:'bolder'}}>1</span>
                                            </div>
                                            <div className='sl-b-r'>
                                                2019/12/11 19:03
                                            </div>
                                        </div>
                                    </div>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Mailbox extends Component {
    render() {
        return (
            <div style={{whiteSpace: 'normal'}}>
                <div className='m-headers'>
                <Link to='/my'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>消息信箱</p>
                    
                </div>
                <div className='m-s'>
                <Accordion accordion openAnimation={{}} className="my-accordion">
                <Accordion.Panel header="评论">
                    <List className="my-list">
                        <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="src/images/logo.png" />
                                    </div>
                                    <div className='m-top-t'>
                                        朝花夕拾123
                                    </div>
                                    <div className='m-top-time'>
                                        评论于 2019/12/10 22:22
                                    </div>
                                </div>
                                <div className='m-center'>
                                   <p>
                                    2333333333，我觉得很好，为你打call！！！！！！！
                                   </p>
                                </div>   
                                <Link to='detailsM'><div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >01</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >2019/12</span>
                                    </div>
                                    <div className='m-b-r'>
                                        冬天的意义
                                    </div>
                                </div></Link>             
                            </div>
                        </List.Item>
                        <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="src/images/logo.png" />
                                    </div>
                                    <div className='m-top-t'>
                                        朝花夕拾456
                                    </div>
                                    <div className='m-top-time'>
                                        评论于 2019/12/10 21:21
                                    </div>
                                </div>
                                <div className='m-center'>
                                   <p>
                                    好想看到春天啊,冻死了……
                                   </p>
                                </div>   
                                <div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >01</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >2019/12</span>
                                    </div>
                                    <div className='m-b-r'>
                                        冬天到了，春天还会远吗，对吗
                                    </div>
                                </div>             
                            </div>
                        </List.Item>
                        <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="src/images/logo.png" />
                                    </div>
                                    <div className='m-top-t'>
                                        朝花夕拾555
                                    </div>
                                    <div className='m-top-time'>
                                        评论于 2019/12/10 20:02
                                    </div>
                                </div>
                                <div className='m-center'>
                                   <p>
                                    太可怕了
                                   </p>
                                </div>   
                                <div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >01</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >2019/12</span>
                                    </div>
                                    <div className='m-b-r'>
                                        又要考试了，心慌
                                    </div>
                                </div>             
                            </div>
                        </List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="点赞">
                    <List className="my-list">
                    <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="src/images/logo.png" />
                                    </div>
                                    <div className='m-top-t'>
                                        朝花夕拾123
                                    </div>
                                    <div className='m-top-time'>
                                        点赞了你
                                    </div>
                                </div>   
                                <Link to='detailsM'><div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >01</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >2019/12</span>
                                    </div>
                                    <div className='m-b-r'>
                                        冬天的意义
                                    </div>
                                </div></Link>             
                            </div>
                        </List.Item>
                        <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="src/images/logo.png" />
                                    </div>
                                    <div className='m-top-t'>
                                        朝花夕拾456
                                    </div>
                                    <div className='m-top-time'>
                                        点赞了你
                                    </div>
                                </div>   
                                <div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >01</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >2019/12</span>
                                    </div>
                                    <div className='m-b-r'>
                                        冬天到了，春天还会远吗，对吗
                                    </div>
                                </div>             
                            </div>
                        </List.Item>
                        <List.Item>
                            <div className='m-c'>
                                <div className='m-top' >
                                    <div className='m-top-h'>
                                        <img src="src/images/logo.png" />
                                    </div>
                                    <div className='m-top-t'>
                                        朝花夕拾555
                                    </div>
                                    <div className='m-top-time'>
                                        点赞了你
                                    </div>
                                </div>   
                                <div className='m-bottom'>
                                    <div className='m-b-t'>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'22px'}} >01</span>
                                       <span style={{float:'left',width:'100%',textAlign:'center',fontSize:'12px'}} >2019/12</span>
                                    </div>
                                    <div className='m-b-r'>
                                        又要考试了，心慌
                                    </div>
                                </div>             
                            </div>
                        </List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="申请">
                    <List className="my-list">
                        <List.Item>
                            <div className='m-spply'>
                                <div className='m-spply-t'>
                                    有一位用户向您的一句话<span style={{fontSize:'16px',textDecoration:'underline',color:'#57a099',textDecorationColor:'#8bcca1',fontWeight:'bolder'}}>只要你主动，我们就会有故事</span>发送了交换日记的申请，
                                    申请理由如下：
                                </div>
                                <div className='m-spply-c'>
                                    你好有趣啊，交个朋友吧
                                </div>
                                <div className='m-spply-b'>
                                    <div className='b-but1'>
                                        同意
                                    </div>
                                    <div className='b-but2'>
                                        拒绝
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                        <List.Item>
                            <div className='m-spply'>
                                <div className='m-spply-t'>
                                    有一位用户向您的一句话<span style={{fontSize:'16px',textDecoration:'underline',color:'#57a099',textDecorationColor:'#8bcca1',fontWeight:'bolder'}}>只要你主动，我们就会有故事</span>发送了交换日记的申请，
                                    申请理由如下：
                                </div>
                                <div className='m-spply-c'>
                                    emmmmmmmm，该写什么好呢，纠结……
                                </div>
                                <div className='m-spply-b'>
                                    <div className='b-but1'>
                                        接受
                                    </div>
                                    <div className='b-but2'>
                                        拒绝
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="我的申请">
                    <List className="my-list">
                        <List.Item>
                            <div className='my-spply'>
                                <div className='my-s-t'>
                                    您的交换日记申请已被<span style={{fontWeight:'bolder',textDecoration:'underline',fontSize:'16px'}}> 接受</span>
                                </div>
                                <Link to='/sentenceM'><div className='my-s-b'>
                                只要你主动，我们有故事,hahaha
                                </div></Link>
                            </div>
                        </List.Item>
                        <List.Item>
                            <div className='my-spply'>
                                <div className='my-s-t'>
                                    您的交换日记申请已被<span style={{fontWeight:'bolder',textDecoration:'underline',fontSize:'16px'}}> 接受</span>
                                </div>
                                <div className='my-s-b'>
                                你不主动，那没故事
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

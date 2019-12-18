import React, { Component } from 'react';


export default class Content extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor:'#fff',float:'left',width:'100%'}}>
                <div className='mains'>
                <span style={{fontSize:'18px',fontWeight:'bolder',width:'100%',float:'left',marginTop:'5%',marginBottom:'5%'}} >今天小记</span>
                <p>· 前几天刷微博看到有人说 成年人突然下定决心想要改变生活时 会不约而同做两件事：健身&学英语</p>
                <p>· 怀疑网友在我的生活里安了监控 现在办了健身卡也开始重拾英语 / 每天在cambly上跟native speaker练口语 不试不知道 自己已经垃圾成这样了[泪]</p>
                <p>· 买了两箱全麦面包 吃不完了 悔恨 不该囤货！只能再买个三明治机 帮助吃完了 哎！（其实心动已久） </p>
                <p>· 前几天刷微博看到有人说 成年人突然下定决心想要改变生活时 会不约而同做两件事：健身&学英语</p>
                <p>· 怀疑网友在我的生活里安了监控 现在办了健身卡也开始重拾英语 / 每天在cambly上跟native speaker练口语 不试不知道 自己已经垃圾成这样了[泪]</p>
                <p>· 买了两箱全麦面包 吃不完了 悔恨 不该囤货！只能再买个三明治机 帮助吃完了 哎！（其实心动已久） </p> ​​​​​​​​
                </div>
                <div className='comments'>
                    <div className='comm'>
                        <div className='simi-tou'>
                            <div className='simi-touxiang'>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <span className='c-user' >牵牛花:</span>
                        </div>
                        <p className='c-content'>{`我也开始健身和学习英语啦，感觉学习真的不容耽搁，活到老学到老啦><`}</p>
                        <span className='c-time' >2019/12/3 10:29</span>
                    </div>
                    <div className='comm'>
                        <div className='simi-tou'>
                            <div className='simi-touxiang'>
                                <img src='src/images/touxiang.jpg'/>
                            </div>
                            <span className='c-user' >玫瑰:</span>
                        </div>
                        <p className='c-content'>{`对啊，12月底还有英语四六级！`}</p>
                        <span className='c-time' >2019/12/3 10:29</span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

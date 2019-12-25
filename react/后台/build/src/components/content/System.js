import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Headers from '../Headers';
export default class System extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
            // status:0
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8677/administrator')
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data,
                
            })
        });

      }
    render() {
        return (
            <div>
                    {/* <div className='contents'> */}
                        <div className='sy-h'>
                            系统管理
                        </div>
                        <div className='sy-c'>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>管理员ID</th>
                                        <th>管理员姓名</th>
                                        <th>管理员邮箱</th>
                                        <th>管理员手机号</th>
                                        <th>管理员职位</th>
                                        <th>操作</th>
                                    </tr>
                                    {this.state.data.map((item,idx)=>(
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.aname}</td>
                                        <td>{item.aemail}</td>
                                        <td>{item.anumber}</td>
                                        <td>{item.aposition}</td>
                                        <td>
                                            <button>修改</button>
                                            <button>删除</button>
                                        </td>
                                    </tr>
                                    ))}
                                    {/* <tr>
                                        <td>2</td>
                                        <td>周xx</td>
                                        <td>888888@qq.com</td>
                                        <td>88888888</td>
                                        <td>开发</td>
                                        <td>
                                            <button>修改</button>
                                            <button>删除</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>牛xx</td>
                                        <td>888888@qq.com</td>
                                        <td>88888888</td>
                                        <td>开发</td>
                                        <td>
                                            <button>修改</button>
                                            <button>删除</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>孙xx</td>
                                        <td>888888@qq.com</td>
                                        <td>88888888</td>
                                        <td>开发</td>
                                        <td>
                                            <button>修改</button>
                                            <button>删除</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>高xx</td>
                                        <td>888888@qq.com</td>
                                        <td>88888888</td>
                                        <td>测试</td>
                                        <td>
                                            <button>修改</button>
                                            <button>删除</button>
                                        </td>
                                    </tr> */}
                                    {/* <tr></tr>
                                    <tr></tr> */}
                                </tbody>    
                            </table>
                        </div>
                        <div className='sy-b'>

                        </div>
                    {/* </div> */}
            </div>
        )
    }
}

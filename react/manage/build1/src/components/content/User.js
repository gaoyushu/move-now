import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Headers from '../Headers';
export default class User extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
            // status:0
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8677/users')
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
                    <div className='u-h'>
                        用户管理
                    </div>
                    <div className='u-c'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>用户ID</th>
                                    <th>用户名</th>
                                    <th>用户头像</th>
                                    <th>用户邮箱</th>
                                    <th>用户签名</th>
                                    <th>用户密码</th>
                                    <th>用户状态</th>
                                    <th>操作</th>
                                </tr>
                                {this.state.data.map((item,idx)=>(
                                <tr key={idx}>
                                    <td>{item.uid}</td>
                                    <td>{item.uname}</td>
                                    <td className='temp'><img src={'http://116.62.14.0:8666/api/image/'+item.uimage} /></td>
                                    <td>{item.uemail}</td>
                                    <td>{item.uintroduce}</td>
                                    <td>{item.upassword}</td>
                                    <td>{item.ustatus}</td>
                                    <td>
                                        <button>修改</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                ))}
                                {/* <tr>
                                    <td>2</td>
                                    <td>bbb</td>
                                    <td><img src='images/图片.png'/></td>
                                    <td>888888@qq.com</td>
                                    <td>222222</td>
                                    <td>222222</td>
                                    <td>1</td>
                                    <td>
                                        <button>修改</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>ccc</td>
                                    <td><img src='images/图片.png'/></td>
                                    <td>888888@qq.com</td>
                                    <td>333333</td>
                                    <td>333333</td>
                                    <td>1</td>
                                    <td>
                                        <button>修改</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>ddd</td>
                                    <td><img src='images/图片.png'/></td>
                                    <td>888888@qq.com</td>
                                    <td>444444</td>
                                    <td>444444</td>
                                    <td>1</td>
                                    <td>
                                        <button>修改</button>
                                        <button>删除</button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

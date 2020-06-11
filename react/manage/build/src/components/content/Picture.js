import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Headers from '../Headers';
export default class Picture extends Component {
    constructor(){
        super();
        this.state={
          data:[],
        }
      }
      componentDidMount(){
        fetch('http://116.62.14.0:8678/check/image/list')
        .then(res =>{ return res.json() })
        .then(res=>{
          var img1=res.nocheck;
          var img2=res.trueimage;
          var img3=res.falseimage;
        //   res.nocheck.map((item,idx)=>{
        //       img1[idx].imgtype=''
        //   })
        var s=img1.concat(img3);
        var ss=s.concat(img2);
          this.setState({
            data:ss
          })
        })
      }
    render() {
        return (
            <div>
               <div className='d-h'>
                        图片审核
                    </div>

                    <div className='d-c'>
                        <table>
                            <tbody>
                                <tr>
                                <th>图片ID</th>
                                    <th>图片路径</th>
                                    <th>图片状态</th>
                                    <th>图片格式</th>
                                    <th>操作</th>
                                </tr>
                                {/* <div className='diary'> */}
                                {this.state.data.map((item,key)=>(
                                <tr key={key}>
                                    <td>{item.iid}</td>
                                    {/* <td style={{color:'#fff'}}>111</td> */}
                                    <td className='imgsrc'>{item.isrc}</td>
                                    <td>{item.istatus}</td>
                                    <td>{item.itype}</td>
                                  
                                    <td>
                                    <Link to={{ pathname: `${'/enter/pictureexamine/'+item.iid}` }} key={key}>
                                        <button>审核</button>
                                    </Link>
                                        {/* <button onClick={()=>this.fun(key)}>删除</button> */}
                                    </td> 
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>      
                    
                
            </div>
        )
    }
}

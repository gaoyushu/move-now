import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Table } from 'antd';
import Headers from '../Headers';

export default class Diary extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            dedata:''
            // status:0
        }
      }
    componentDidMount(){
        fetch('http://116.62.14.0:8678/check/diary/list')
        .then(res=>res.json())
        .then(res=>{
            var diary1=res.nocheck;
            var diary2=res.truediary;
            var diary3=res.bandiary;
            var temps=diary1.concat(diary3);
            var ss=temps.concat(diary2);
            for(var i=0;i<ss.length;i++){
                var time =ss[i].dtime;
                var time1=time.split(' ');
                ss[i].time=time1[1];
                var time2=time1[0].split('/');
                var year=time2[2];
                var month=time2[0];
                var day=time2[1];
                ss[i].year=year;
                ss[i].month=month;
                ss[i].day=day;
            }
            this.setState({
                data:ss
            })
        })
        // fetch('http://116.62.14.0:8677/diary')
        // .then(res =>{ return res.json() })
        // .then(res =>{
        //      console.log(res);  
        //      var ss=res.data;
        //      for(var i=0;i<ss.length;i++){
        //          var time =ss[i].dtime;
        //          var time1=time.split(' ');
        //          ss[i].time=time1[1];
        //          var time2=time1[0].split('/');
        //          var year=time2[2];
        //          var month=time2[0];
        //          var day=time2[1];
        //          ss[i].year=year;
        //          ss[i].month=month;
        //          ss[i].day=day;
        //      }
        //      this.setState({
        //          data:ss
        //      })
        // });

      }
      fun=(key)=>{
          console.log('aaaa')
          var arr=this.state.data;

        fetch('http://116.62.14.0:8677/diary', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({ did:`${this.state.data[key].did}`})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res);
                if(res.status===0){
                    fetch('http://116.62.14.0:8677/diary')
                    .then(res =>{ return res.json() })
                    .then(res =>{
                        console.log(res);  
                        var ss=res.data;
                        for(var i=0;i<ss.length;i++){
                            var time =ss[i].dtime;
                            var time1=time.split(' ');
                            ss[i].time=time1[1];
                            var time2=time1[0].split('/');
                            var year=time2[2];
                            var month=time2[0];
                            var day=time2[1];
                            ss[i].year=year;
                            ss[i].month=month;
                            ss[i].day=day;
                        }
                        this.setState({
                            data:ss
                        })
                    });
                    // Toast.success(res.data,1)       
                }
             });

      }
      details=(item)=>{
        console.log(item)
        var temp=document.getElementById('modaldiary');
        var temp1=document.getElementById('modaldiarydetail');
        // console.log(temp.style)
        // if(temp.style){
            temp.style.display='block'
            temp1.style.display='block'
        // }
        this.setState({
            dedata:item
        })
      }
      outs=()=>{
        var temp=document.getElementById('modaldiary');
        var temp1=document.getElementById('modaldiarydetail');
        // console.log(temp.style)
        // if(temp.style){
            temp.style.display='none'
            temp1.style.display='none'
        // } 
      }
    render() {
        return (
            <div>
                {/* <div className='contents'> */}
                {/* <iframe> */}
                    <div className='d-h'>
                        日记管理
                    </div>

                    <div className='d-c'>
                        <table>
                            <tbody>
                                <tr>
                                <th>日记ID</th>
                                    <th>用户ID</th>
                                    <th>日记标题</th>
                                    <th>时间</th>
                                    <th>日记状态</th>
                                    <th>点赞数</th>
                                    <th>评论数</th>
                                    <th>是否交换中</th>
                                    <th>操作</th>
                                {/* <tr className='laji'> */}
                                    {/* <td>日记ID</td>
                                    <td s>用户ID</td>
                                    <td style={{paddingLeft:100}}>日记标题</td>
                                    <td style={{paddingLeft:270}}>时间</td>
                                    <td style={{paddingLeft:200}}>日记状态</td>
                                    <td>点赞数</td>
                                    <td>评论数</td>
                                    <td>是否交换中</td>
                                    <td>操作</td> */}
                                </tr>
                                {/* <div className='diary'> */}
                                {this.state.data.map((item,key)=>(
                                <tr key={key}>
                                    <td>{item.did}</td>
                                    {/* <td style={{color:'#fff'}}>111</td> */}
                                    <td>{item.uid}</td>
                                    <td className='tempsss'>{item.dtitle}</td>
                                    <td>{item.year}/{item.month}/{item.day} {item.time}</td>
                                    <td>{item.dtype}</td>
                                    <td>{item.dpraise}</td>
                                    <td>{item.comments}</td>
                                    <td>{item.exchange}</td>
                                    <td className='tempssss'>
                                        <button onClick={()=>{this.details(item)}}>查看</button>
                                        <Link to={{ pathname: `${'/enter/diaryexamine/'+item.did}` }} key={key}>
                                            <button>审核</button>
                                        </Link>
                                        <button onClick={()=>this.fun(key)}>删除</button>
                                    </td> 
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                {/* </div> */}
                {/* </iframe> */}
                <div className='modaldiary' id='modaldiary' onClick={()=>{this.outs()}}>
                    {/* <div className='modaldiarydetail'>
                        
                    </div> */}
                </div>
                <div className='modaldiarydetail' id='modaldiarydetail'>
                    <div className='out' onClick={()=>{this.outs()}}>
                     X
                    </div>
                    <div className='detailheader'>
                        <div className='detailheadertitle'>
                            {this.state.dedata.dtitle}
                        </div>
                        <div className='detailheadertime'>
                            {this.state.dedata.dtime}
                        </div>
                    </div>
                    <div className='detailcontent'>
                        <div className='detailcontenttext'>
                            {this.state.dedata.dcontent}
                        </div>
                        {
                            this.state.dedata.dimage!==-1?
                             <div className='detailimg'>
                                <img src={'http://116.62.14.0:8666/api/image/'+this.state.dedata.dimage} alt='image' />
                            </div>
                            :
                            <></>
                        }
                        
                    </div>
                    <div className='detailbottom'>
                        &nbsp; &nbsp;
                        浏览量：{this.state.dedata.diary_visit} 
                         &nbsp; &nbsp;
                        收藏量：{this.state.dedata.dcollect} 
                        &nbsp; &nbsp;
                        点赞量: {this.state.dedata.dpraise}
                        &nbsp; &nbsp;
                        交换状态：{this.state.dedata.exchange}
                    </div>
                   
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Tooltip,message } from "antd";
export default class DiaryExamine extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      // county:0,
      // countn:0,
      count:0,
      itemdata:{}
    }
  }
  componentDidMount(){
    fetch('http://116.62.14.0:8678/check/diary/list')
    .then(res =>{ return res.json() })
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
      },()=>{
        this.state.data.map((item,idx)=>{
          if(item.did==this.props.match.params.id){
              this.setState({
                  itemdata:item,
                  count:idx
              })
          }
      })
      })
    })
  }
  godown=()=>{

    this.setState({
        itemdata:this.state.data[this.state.count+1],
        count:this.state.count+1
    })
  }
  goup=()=>{
    this.setState({
      count:this.state.count-1,
      itemdata:this.state.data[this.state.count-1],
    })
  }
  unin=()=>{
    fetch('http://116.62.14.0:8678/check/diary/ban/'+this.state.data[this.state.count].did)
    .then(res =>{ return res.json() })
    .then(res=>{
      console.log(res)
      if(res.status==0){
        message.success('该日记已审核不通过！')
      }
    })
  }
  in=()=>{
    fetch('http://116.62.14.0:8678/check/diary/pass/'+this.state.data[this.state.count].did)
    .then(res =>{ return res.json() })
    .then(res=>{
      console.log(res)
      if(res.status==0){
        message.success('该日记已审核通过！')
      }
    })
  }
  render() {
    return (
      <div>
      {
        this.state.data.length!==0?
        <div className='examine'>
        <div className='examineheader'>
              <div className='examinetitle'>
                  {this.state.itemdata.dtitle}
              </div>
              <div className='examinetime'>
              {this.state.itemdata.dtime}
              </div>
        </div>
        <div className='examinecontent'>
          <div className='examinecontents'>
              <div className='tempss'>

              </div>
              {this.state.itemdata.dcontent}
          </div>
          <button className='examineleft' onClick={()=>{this.in()}}>
                通过
            </button>
            <button className='examineright' onClick={()=>{this.unin()}}>
                不通过
            </button>
        </div>
        <div className='examinebottom'>
          <div className='goup'>
              上一篇:
              {
                this.state.count==0?
                <></>
                :
                <Link className='examinebottomtext' to={{ pathname: `${'/enter/diaryexamine/'+this.state.data[this.state.count-1].did}` }} onClick={()=>{this.goup()}}>
                {this.state.data[this.state.count-1].did}
                </Link>
              }
          </div>
          <div className='godown'>
              下一篇:
              {
                this.state.count==this.state.data.length-1?
                <></>
                :
                <Link className='examinebottomtext' to={{ pathname: `${'/enter/diaryexamine/'+this.state.data[this.state.count+1].did}` }} onClick={()=>{this.godown()}}>
                {this.state.data[this.state.count+1].did}
                </Link>
              }
          </div>
        </div>
    </div>
        :
        
        <></>
      }
      </div>
    )
  }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Tooltip,message } from "antd";
export default class Commentexamine extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            count:0,
            itemdata:{}
            
        }
    }
    componentDidMount(){
          fetch('http://116.62.14.0:8678/check/comment/list')
        .then(res =>{ return res.json() })
        .then(res=>{
          var commentun=res.nocheck;
          for(var i=0;i<res.nocheck.length;i++){
            commentun[i].comtype='未审查';
        }
          var commenty=res.truecom;
          for(var i=0;i<res.truecom.length;i++){
              commenty[i].comtype='审查通过';
          }
          var commentn=res.bancom;
          for(var i=0;i<res.bancom.length;i++){
              commentn[i].comtype='未通过审查';
          }
          var temp=commentun.concat(commentn)
          var ss=temp.concat(commenty);
            for(var i=0;i<ss.length;i++){
                var time =ss[i].comtime;
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
                console.log(this.state.data)
                this.state.data.map((item,idx)=>{
                    if(item.comid==this.props.match.params.id){
                        this.setState({
                            itemdata:item,
                            count:idx
                        })
                    }
                })
            })
        })
        console.log(this.props.match.params.id)
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
        fetch('http://116.62.14.0:8678/check/comment/ban/'+this.state.data[this.state.count].comid)
        .then(res =>{ return res.json() })
        .then(res=>{
          console.log(res)
          if(res.status==0){
            message.success('该评论已审核不通过！')
          }
        })
      }
      in=()=>{
        fetch('http://116.62.14.0:8678/check/comment/pass/'+this.state.data[this.state.count].comid)
        .then(res =>{ return res.json() })
        .then(res=>{
          console.log(res)
          if(res.status==0){
            message.success('该评论已审核通过！')
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
                    {/* {this.state.data[this.state.count].dtitle} */}
                    评论id: &nbsp;{this.state.itemdata.comid}
                </div>
                <div className='examinetime'>
                {/* {this.state.data[this.state.count].dtime} */}
                发表时间:&nbsp;{this.state.itemdata.comtime}
                </div>
          </div>
          <div className='examinecontent'>
            <div className='examinecontents'>
                <div className='tempss'>
  
                </div>
                {this.state.itemdata.comcontent}
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
                <Link className='examinebottomtext' to={{ pathname: `${'/enter/commentexamine/'+this.state.data[this.state.count-1].comid}` }} onClick={()=>{this.goup()}}>
                {this.state.data[this.state.count-1].comid}
                </Link>
              }
            </div>
            <div className='godown'>
                下一篇:
                {
                this.state.count==this.state.data.length-1?
                <></>
                :
                <Link className='examinebottomtext' to={{ pathname: `${'/enter/commentexamine/'+this.state.data[this.state.count+1].comid}` }} onClick={()=>{this.godown()}}>
                {this.state.data[this.state.count+1].comid}
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

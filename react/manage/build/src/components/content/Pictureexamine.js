import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Tooltip,message } from "antd";
export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      // county:0,
      // countn:0,
      // label:'yes',
      count:0,
      itemdata:''
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
          },()=>{
            this.state.data.map((item,idx)=>{
              if(item.iid==this.props.match.params.id){
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
      count:this.state.count+1,
      itemdata:this.state.data[this.state.count+1],
    })
  }
  goup=()=>{
    this.setState({
      count:this.state.count-1,
      itemdata:this.state.data[this.state.count-1],
    })
  }
  yes=()=>{
    fetch('http://116.62.14.0:8678/check/image/list')
    .then(res =>{ return res.json() })
    .then(res=>{
      console.log(res.trueimage)
      this.setState({
        data:res.trueimage,
        // label:'yes',
        // count:0
      })
    })
  }
  no=()=>{
    // var yes=document.getElementById('yes')
    // var no=document.getElementById('no')
    // yes
    fetch('http://116.62.14.0:8678/check/image/list')
    .then(res =>{ return res.json() })
    .then(res=>{
      console.log(res.falseimage)
      this.setState({
        data:res.falseimage,
        count:0,
        // label:'no'
      })
    })
  }
  unin=()=>{
    fetch('http://116.62.14.0:8678/check/image/ban/'+this.state.data[this.state.count].iid)
    .then(res =>{ return res.json() })
    .then(res=>{
      console.log(res)
      if(res.status==0){
        message.success('该图片已审核不通过！')
        var temp=this.state.itemdata;
        temp.istatus='未通过审查';
        this.setState({
          itemdata:temp
        })
      }
    })

    // fetch('http://116.62.14.0:8678/check/image/list')
    // .then(res =>{ return res.json() })
    // .then(res=>{
    //   var img1=res.nocheck;
    //       var img2=res.trueimage;
    //       var img3=res.falseimage;
    //     //   res.nocheck.map((item,idx)=>{
    //     //       img1[idx].imgtype=''
    //     //   })
    //     var s=img1.concat(img3);
    //     var ss=s.concat(img2);
    //       this.setState({
    //         data:ss
    //       },()=>{
    //         this.state.data.map((item,idx)=>{
    //           if(item.iid==this.props.match.params.id){
    //               this.setState({
    //                   itemdata:item,
    //                   count:idx
    //               })
    //           }
    //       })
    //       })
    // })
  }
  in=()=>{
    fetch('http://116.62.14.0:8678/check/image/pass/'+this.state.data[this.state.count].iid)
    .then(res =>{ return res.json() })
    .then(res=>{
      console.log(res)
      if(res.status==0){
        message.success({
          content:'该图片已审核通过！',
          duration:3

        })
        var temp=this.state.itemdata;
        temp.istatus='审查通过';
        this.setState({
          itemdata:temp
        })
        
      }
    })

    // fetch('http://116.62.14.0:8678/check/image/list')
    // .then(res =>{ return res.json() })
    // .then(res=>{
    //   var img1=res.nocheck;
    //       var img2=res.trueimage;
    //       var img3=res.falseimage;
    //     //   res.nocheck.map((item,idx)=>{
    //     //       img1[idx].imgtype=''
    //     //   })
    //     var s=img1.concat(img3);
    //     var ss=s.concat(img2);
    //       this.setState({
    //         data:ss
    //       },()=>{
    //         this.state.data.map((item,idx)=>{
    //           if(item.iid==this.props.match.params.id){
    //               this.setState({
    //                   itemdata:item,
    //                   count:idx
    //               })
    //           }
    //       })
    //       })
    // })
  }
  render() {
    return (
        <div className='examine'>
        <div className='examineheader'>
              <div className='examinetitle'>
                  {this.state.itemdata.iid}
              </div>
              <div className='examinetime'>
                  {/* 2020/6/2 12:12:12 */}
                  日记状态:&nbsp;&nbsp;{this.state.itemdata.istatus}
              </div>
              {/* {
                this.state.label=='yes'?
                <div>
                <div className='yes' onClick={()=>{this.yes()}} id='yes'>
                已通过
              </div>
              <div className='no' onClick={()=>{this.no()}} id='no'>
                未通过
              </div>
              </div>
                :
                <div>
                <div className='no' onClick={()=>{this.yes()}} id='yes'>
                已通过
              </div>
              <div className='yes' onClick={()=>{this.no()}} id='no'>
                未通过
              </div>
              </div>

              } */}
              {/* <div className='yes' onClick={()=>{this.yes()}} id='yes'>
                已通过
              </div>
              <div className='no' onClick={()=>{this.no()}} id='no'>
                未通过
              </div> */}
        </div>
        <div className='examinecontent'>
          <div className='examinecontents'>
              <div className='examineimgauto'>
                 {/* <img src='http://116.62.14.0:8666/api/image/220'  className='examineimg' />  */}
                 {
                   this.state.data.length!==0?
                   <img src={'http://116.62.14.0:8666/api/image/'+this.state.data[this.state.count].iid}  className='examineimg' /> 
                   :
                   <></>
                 }
                 
              </div>
            
          </div>
          <button className='examineleft' onClick={()=>{this.in()}}>
              通过
          </button>
          <button className='examineright' onClick={()=>{this.unin()}}>
              不通过
          </button>
          {/* {
            this.state.label=='yes'?
            <button className='examinebutton' onClick={()=>{this.unin()}}>
              不通过
            </button>
            // <div>
            //   <button className='examineleft'>
            //     通过
            //   </button>
            //   <button className='examineright'>
            //     不通过
            //   </button> 
            // </div>
            :
            <button className='examinebutton' onClick={()=>{this.in()}}>
              通过
            </button>
          //   <div>
          //   <button className='examineleft'>
          //     通过
          //   </button>
          //   <button className='examineright'>
          //     不通过
          //   </button> 
          // </div>
          } */}
        </div>
        <div className='examinebottom'>
          <div className='goup'>
              上一篇:
              {
                this.state.data.length!==0?
                this.state.count==0?
                <></>
                :
                <Link className='examinebottomtext' to={{ pathname: `${'/enter/pictureexamine/'+this.state.data[this.state.count-1].iid}` }} onClick={()=>{this.goup()}}>
                {this.state.data[this.state.count-1].iid}
                </Link>
                :
                <></>
              }
          </div>
          <div className='godown'>
              下一篇:
              {
                this.state.data.length!==0?
                this.state.count==this.state.data.length-1?
                <></>
                :
                <Link className='examinebottomtext' to={{ pathname: `${'/enter/pictureexamine/'+this.state.data[this.state.count+1].iid}` }} onClick={()=>{this.godown()}}>
                {this.state.data[this.state.count+1].iid}
                </Link>
                :
                <></>
              }
              
          </div>
        </div>
    </div>
    )
  }
}

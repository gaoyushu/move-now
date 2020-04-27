import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage} from 'react-native'
import home from '../../css/square/Home';
import {myFetch} from '../utils'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment'
const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      uid:props.uid,
      like:{uri:'http://116.62.14.0:8666/api/image/28'},
      unlike:{uri:'http://116.62.14.0:8666/api/image/29'},
      follow:{uri:'http://116.62.14.0:8666/api/image/19'},
      unfollow:{uri:'http://116.62.14.0:8666/api/image/20'},
      data:{},
      diary:[],
      token:''
    }
  }
  //初始化
  componentDidMount(){
    AsyncStorage.getItem('token').then((res)=>{
      this.setState({
        token:res
      },()=>{
        myFetch.get('/square/userhome/'+this.state.token+'/'+this.state.uid)
        .then(res=>{
          var datas=res.data;
          if(datas.diary!=='当前用户没有日记！'){
              for(var i=0;i<datas.diary.length;i++){
                  var times=datas.diary[i].dtime;
                  var times1=times.split(' ')[0];
                  var times2=times1.split('/');
                  var month=times2[0];
                  var day=times2[1];
                  var year=times2[2];
                  // datas.diary[i].month=month;
                  // datas.diary[i].day=day;
                  // datas.diary[i].year=year;
                  datas.diary[i].time=times1;
                  if(month<10){
                    datas.diary[i].time1=year+'-'+'0'+month+'-'+day;
                  }else{
                    datas.diary[i].time1=year+'-'+month+'-'+day;
                  }
                  
              }
              this.setState({
                  data:datas,
                  diary:datas.diary
              })
          }else{
            this.setState({
                data:datas,
                diary:null
            })
          }
        })
      })
    })
    // myFetch.get('/square/userhome/1586768446984/'+this.state.uid)
    // .then(res=>{
    //   var datas=res.data;
    //   if(datas.diary!=='当前用户没有日记！'){
    //       for(var i=0;i<datas.diary.length;i++){
    //           var times=datas.diary[i].dtime;
    //           var times1=times.split(' ')[0];
    //           var times2=times1.split('/');
    //           var month=times2[0];
    //           var day=times2[1];
    //           var year=times2[2];
    //           // datas.diary[i].month=month;
    //           // datas.diary[i].day=day;
    //           // datas.diary[i].year=year;
    //           datas.diary[i].time=times1;
    //           if(month<10){
    //             datas.diary[i].time1=year+'-'+'0'+month+'-'+day;
    //           }else{
    //             datas.diary[i].time1=year+'-'+month+'-'+day;
    //           }
              
    //       }
    //       this.setState({
    //           data:datas,
    //           diary:datas.diary
    //       })
    //   }else{
    //     this.setState({
    //         data:datas,
    //         diary:null
    //     })
    //   }
    // })
  }

  //关注
  setFollow=()=>{
    let url='/square/concerns/'+this.state.token;
    myFetch.put(url,{
      cuid:`${this.state.data.uid}`
    })
    if(this.state.data.isFollow==='true'){
      var dds=this.state.data;
      dds.isFollow='false';
      dds.ufans=dds.ufans-1;
      this.setState({
          data:dds
      })
    }
    else{
        var dds=this.state.data;
        dds.isFollow='true';
        dds.ufans=dds.ufans+1;
        this.setState({
            data:dds
        })
    }
  }
  //点赞
  setLike=(idx)=>{
    let url='/square/praise/'+this.state.token+'/'+`${this.state.diary[idx].did}`;
    myFetch.put(url)
    if(this.state.diary[idx].pstatus==='true'){
      let arrs=this.state.diary;
      arrs[idx].pstatus='false'
      arrs[idx].dpraise=arrs[idx].dpraise-1;
      this.setState({
          diary:arrs
      })
    }
    else{
        let arrs=this.state.diary;
        arrs[idx].pstatus='true';
        arrs[idx].dpraise=arrs[idx].dpraise+1;
        this.setState({
            diary:arrs
        })
    }
  }
  //返回
  pops=()=>{
    var arr=[];
    arr=this.state.diary;
    // Actions.refresh({data:arr,isRefresh:true})
    // Actions.pop({refresh:{data:arr,isRefresh:true}});
    Actions.pop(this.props.refresh());
  }

  render() {
    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    return (
      <View flex={1}>
        <ScrollView>
            <View style={home.headers}>
                <ImageBackground style={home.headerbackground} 
                   source={{uri:"http://116.62.14.0:8666/api/image/111"}} 
                   resizeMode='stretch'
                >
                  <Icon onPress={()=>{this.pops()}} name="chevron-left" size={40}  color='white' style={home.pops} />
                  {
                    this.state.data.isFollow!=='myself'? 
                    <TouchableOpacity style={home.follower1} onPress={()=>{this.setFollow()}}>
                      <Image source={this.state.data.isFollow==='true'?this.state.follow:this.state.unfollow} style={home.follower} />
                    </TouchableOpacity>
                    :
                    <View></View>
                  }
                  <View style={home.users}>
                    <Image source={{uri:"http://116.62.14.0:8666/api/image/"+this.state.data.uimage}} style={home.userheader} />
                  </View>
                  <Text style={home.username}>{this.state.data.uname}</Text>
                  <View style={home.message}>
                    <Text style={home.left}>关注 {this.state.data.ufriend}</Text>
                    <Text style={home.right}>粉丝 {this.state.data.ufans}</Text>
                  </View>
                </ImageBackground>
            </View>
            <View>
              {
                this.state.diary===null?
                <View>
                  <Text>此用户没有日记！</Text>
                </View>
                :
                this.state.diary.map((item,idx)=>(
                  <View style={home.content}> 
                    <View style={home.leftbox}>
                      <TouchableOpacity onPress={()=>{Actions.details1({'did':item.did,'page':'square'})}}>
                        <View style={home.lefttop}>
                          <Text style={home.leftTopText0}>{item.time}</Text>
                          <Text style={home.leftTopText}>{weekday[new Date(item.time1).getDay()]}</Text>
                          <Text style={home.leftTopText}>多云</Text>
                        </View>
                        <View style={home.leftcenter}>
                        <Text numberOfLines={1} style={home.leftMiddleText}>{item.dtitle}</Text>
                        </View>
                        <View style={home.leftbottom}>
                          <Text style={home.leftBottomText}>心情:充实</Text>
                          <TouchableOpacity style={home.button1}>
                            <Image source={{uri:'http://116.62.14.0:8666/api/image/46'}} style={home.comments} />
                            <Text style={home.bottomtext}>{item.comments}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={home.button} onPress={()=>this.setLike(idx)}>
                            <Image source={item.pstatus==='true'?this.state.like:this.state.unlike} style={home.like} />
                            <Text style={home.bottomtext}>{item.dpraise}</Text>
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={home.rightbox}>
                    {
                      item.dimage==-1?
                      <ImageBackground
                        style={{width:'100%',height:'100%'}} 
                        source={{uri:'http://116.62.14.0:8666/api/image/116'}}
                      ></ImageBackground>
                      :
                      <Image source={{uri:'http://116.62.14.0:8666/api/image/'+item.dimage}} 
                      style={{width:'100%',height:'100%'}}
                      />
                    }     
                      {/* <View style={home.contenttext}>
                        <Text style={home.context}>{item.dtitle}</Text>
                      </View>
                      <View style={home.rightbottom}>
                      <TouchableOpacity style={home.button1}>
                        <Image source={{uri:'http://116.62.14.0:8666/api/image/46'}} style={home.comments} />
                        <Text style={home.bottomtext}>{item.comments}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={home.button} onPress={()=>this.setLike(idx)}>
                        <Image source={item.pstatus==='true'?this.state.like:this.state.unlike} style={home.like} />
                        <Text style={home.bottomtext}>{item.dpraise}</Text>
                      </TouchableOpacity>
                      </View> */}
                    </View>
                  </View>
                ))
              }
            </View>
            <View style={home.bottombox}>
              <Text style={home.bottomboxtext}>已经到底了！</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}
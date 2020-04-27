import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity,TextInput,Image, AsyncStorage} from 'react-native'
import  Icon  from 'react-native-vector-icons/Feather';

import square from '../../css/square/Square';
import {myFetch} from '../utils'
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class Square extends Component {
    constructor(){
        super();
        this.state={
            isActive1:false,
            isActive2:true,
            isActive3:false,
            data:[],
            imgh:[],
            unlike:{uri:"http://116.62.14.0:8666/api/image/29"},
            like:{uri:"http://116.62.14.0:8666/api/image/28"},
            token:''
        }
    }
    //初始化
    componentDidMount(){
      AsyncStorage.getItem('token')
      .then(res=>{
        this.setState({
          token:res
        },()=>{
          myFetch.get('/square/new/'+this.state.token)
          .then(res=>{
            // console.log(res.data)
            this.setState({
              data:res.data
            })
          })
        })
      })
      // myFetch.get('/square/new/1586768446984')
      // .then(res=>{
      //   // console.log(res.data)
      //   this.setState({
      //     data:res.data
      //   })
      // })
    }
    //pop回来刷新数据
    // UNSAFE_componentWillReceiveProps(nextProps){
    //   console.log(nextProps)
    //   console.log(nextProps.isRefresh)
    //   console.log(nextProps.data)
    //   if(nextProps.isRefresh){
    //      if(this.state.isActive1){
    //       myFetch.get('/square/follow/1586768446984')
    //       .then(res=>{
    //         this.setState({
    //           data:res.data
    //         })
    //       })
    //     }else if(this.state.isActive2){
    //       myFetch.get('/square/new/1586768446984')
    //       .then(res=>{
    //         this.setState({
    //           data:res.data
    //         })
    //       })
    //     }else{
    //       myFetch.get('/square/hot/1586768446984')
    //       .then(res=>{
    //         this.setState({
    //           data:res.data
    //         })
    //       })
    //     }
    //   }
     
    // }
    //点击关注
    onpress1=()=>{
      this.setState({
        isActive2:false,
        isActive1:true,
        isActive3:false,
      })
      myFetch.get('/square/follow/'+this.state.token)
      .then(res=>{
        // console.log(res.data)
        this.setState({
          data:res.data
        })
      })
      this.myScrollView.scrollTo({x:0,y:0,animated:false})
    }
    //点击最新
    onpress2=()=>{
      this.setState({
        isActive1:false,
        isActive2:true,
        isActive3:false,
      })
      myFetch.get('/square/new/'+this.state.token)
      .then(res=>{
        this.setState({
          data:res.data
        })
      })
      this.myScrollView.scrollTo({x:0,y:0,animated:false})
    }
    //点击最热
    onpress3=()=>{
      this.setState({
        isActive2:false,
        isActive3:true,
        isActive1:false,
      })
      myFetch.get('/square/hot/'+this.state.token)
      .then(res=>{
        this.setState({
          data:res.data
        })
      })
      this.myScrollView.scrollTo({x:0,y:0,animated:false})
    }
    //获得图片宽高，使图片自适应大小
    getsize=(i,idx)=>{
      var arr=this.state.imgh
      Image.getSize("http://116.62.14.0:8666/api/image/"+i,(w,h)=>{
        arr[idx]=h*width/w; 
        this.setState({
          imgh:arr
        })
      })
    }
    //点赞
    setLike=(idx)=>{
      let url='/square/praise/'+this.state.token+'/'+`${this.state.data[idx].did}`;
      myFetch.put(url)
      if(this.state.data[idx].pstatus==='true'){
        let arrs=this.state.data;
        arrs[idx].pstatus='false'
        arrs[idx].dpraise=arrs[idx].dpraise-1;
        this.setState({
            data:arrs
        })
      }
      else{
          let arrs=this.state.data;
          arrs[idx].pstatus='true';
          arrs[idx].dpraise=arrs[idx].dpraise+1;
          this.setState({
              data:arrs
          })
      }
    }
  render() {
    return (
      <View flex={1} style> 
        <View style={square.tabbox}>
          <TouchableOpacity style={this.state.isActive1?[square.slide,square.slideactive]:square.slide} onPress={()=>this.onpress1()}>
            <View>
                <Text style={square.slidetext}>关注</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity style={this.state.isActive2?[square.slide,square.slideactive]:square.slide} onPress={()=>this.onpress2()}>
            <View>
                <Text style={square.slidetext}>最新</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity style={this.state.isActive3?[square.slide,square.slideactive]:square.slide} onPress={()=>this.onpress3()}>
            <View>
                <Text style={square.slidetext}>最热</Text>
            </View>
          </TouchableOpacity> 
        </View>
        <ScrollView ref={(view) => { this.myScrollView = view; }}>
          <View style={square.searchbox}>
            <View style={square.search}>
            <Icon name='search' color='#000' size={25} />
            <TextInput 
                placeholder='请输入您要搜索的关键字'
                style={{
                  width:440*s,
                  height:50*s,
                  marginLeft:20*s,
                  padding:0
                }}
              />
            </View>
          </View>
          <View style={square.content}>
          {
          this.state.data?
          this.state.data.map((item,idx)=>(
            <View style={square.box}>
              <View style={square.contenttop}>
                <TouchableOpacity onPress={()=>{Actions.home({uid:item.uid})}}>
                  <View style={square.contenthead}>
                    <Image source={{uri:"http://116.62.14.0:8666/api/image/"+item.uimage}} style={square.header} />
                  </View>
                </TouchableOpacity>
                <View style={square.contenttopright}>
                  <View style={square.contenttopright1}>
                    <Text style={square.uname}>{item.uname}</Text>
                  </View>
                  <View>
                    <Text style={square.dtime}>{item.dtime}</Text>
                  </View>
                </View>
              </View>
              <View style={square.contentcenter}>
                <TouchableOpacity onPress={()=>{Actions.details1({'did':item.did,'page':'square'})}}>
                <View style={square.contenttext}>
                  <Text style={square.contenttexts}>{item.dtitle}</Text>
                </View>
                {item.dimage===-1?
                  <View></View>
                  :
                  <Image onLoadStart={()=>{this.getsize(item.dimage,idx)}} source={{uri:"http://116.62.14.0:8666/api/image/"+item.dimage}} style={{width:width*0.84,height:this.state.imgh[idx],resizeMode:'cover'}} />
                }
                </TouchableOpacity>
              </View>
              <View style={square.contentbottom}>
                <TouchableOpacity style={square.button}>
                  <Image source={{uri:"http://116.62.14.0:8666/api/image/46"}} style={square.comment} />
                  <Text style={square.bottomtext}>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={square.button} onPress={()=>this.setLike(idx)}>
                  <Image source={item.pstatus==='false'?this.state.unlike:this.state.like} style={square.like} />
                  <Text style={square.bottomtext}>{item.dpraise}</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          ))
                :
                <View style={square.bottombox}>
                  <Text style={square.bottomboxtext}>您还未关注用户！</Text>
                </View>
        }
          </View>
        </ScrollView>
      </View>
    )
  }
}
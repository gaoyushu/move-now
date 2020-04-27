import React, {Component} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import {BVLinearGradient} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import edlist from '../../css/exchange/Edlist';
import {myFetch} from '../utils'
const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/exchange/'; // 请求路径
const token = 1586768446984; // 假设用户token 后期从内存中获取


export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      data: [],
      token:''
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(res=>{
      this.setState({
        token:res
      },()=>{
        myFetch.get('/chat/exchange/'+this.state.token)
        .then(res=>{
          this.setState({
            data:res.data
          })
        })
      })
    })
    // myFetch.get('/chat/exchange/1586768446984')
    // .then(res=>{
    //   this.setState({
    //     data:res.data
    //   })
    // })
  }
  //返回
  pops=()=>{
    Actions.pop()
  }
  render() {
    return (
      <View>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 1}}
          colors={['#8bcca1' , '#57a099']}
          style={edlist.header}>
            <Icon onPress={()=>{this.pops()}} name="chevron-left" size={40}  color='white' style={edlist.back} />
            <Text style={edlist.headertext}>匿名交换列表</Text>
        </LinearGradient>
        <ScrollView>
          {
            this.state.data=="匿名列表为空或获取好友失败，后端错误，请联系管理员！"?
            <View style={edlist.ems}>
              <Text style={edlist.empty}>匿名列表为空或获取好友失败，后端错误，请联系管理员!</Text>
            </View>
            :
            this.state.data.map((item,idx)=>(
              <TouchableOpacity style={edlist.box} onPress={()=>{Actions.exchat({shortdes_id:item.shortdes_id})}}>
                <View style={edlist.box1}>
                  <View style={edlist.boxleft}>
                    <View style={edlist.headerimage}>
                    <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={edlist.images} />
                    </View>
                  </View>
                  <View style={edlist.boxright}>
                    <Text style={edlist.text1}>朝花夕拾</Text>
                    <Text style={edlist.text2}>{item.shortdes}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

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
    // var url = datapath+token;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       status: res.status,
    //       data: res.data,
    //     });
    //   });
    AsyncStorage.getItem('token')
    .then(res=>{
       this.setState({
         token:res
       },()=>{
         //初始化
       })
    })
  }
  render() {
    return (
      <View>
      <Button title='详情页' onPress={()=>{Actions.exdetail()}}/>
        <Text>申请交换好友</Text>
        <Text>跳转 回到详情页</Text>
      </View>
    );
  }
}

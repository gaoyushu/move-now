import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/mine/'; // 请求路径
const token = 1586768446984; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      data: [],
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
  }
  render() {
    return (
      <View>
        <Button title='详情页' onPress={()=>{Actions.exdetail()}}/>
        <Button title='交换页' onPress={()=>{Actions.exchat()}}/>
        <Text>我的一句话 从内存中取token</Text>
        <Text>跳转 详情页 交换页面</Text>
      </View>
    );
  }
}

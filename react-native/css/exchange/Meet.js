import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/exchange/'; // 请求路径
const token = 1587997685612; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      data: [],
    };
  }
  render() {
    return (
      <View>
      <Button title='返回' onPress={()=>{Actions.pop()}}/>
        <Text>相遇信息</Text>
        <Text>返回</Text>
      </View>
    );
  }
}

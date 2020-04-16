import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/detail/'; // 请求路径
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
    var url = datapath+this.props.oneid+'/'+token;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          status: res.status,
          data: res.data,
        });
      });
  }
  render() {
    return (
      <View>
      <Button title='相遇信息' onPress={()=>{Actions.exmeet()}}/>
      <Button title='选择日记' onPress={()=>{Actions.exchoice()}}/>
      <Button title='日记详情' onPress={()=>{Actions.exdetail()}}/>
        <Text>双人交换页面 token oneid 加好友post并显示在当前页面</Text>
        <Text>跳转 相遇信息 选择日记 日记详情</Text>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Scene} from 'react-native-router-flux';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/list'; // 请求路径

export default class Detail extends Component {
  componentDidMount() {}
  render() {
    return (
      <Scene key='exchange-detail'>
        <View>
          <Text>this.props.id</Text>
        </View>
      </Scene>
    );
  }
}

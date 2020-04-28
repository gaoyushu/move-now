import React, {Component} from 'react';
import {ScrollView, Text, Button, View, TouchableOpacity, Image} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

import styles from '../../css/exchange/Index'

import Tools from './Tools';
import List from './List';
import Detail from './Detail';
import Publish from './Publish';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      reload: 0, // tools里点击刷新时 更改这个值重新render 达到刷新界面的功能
    };
  }

  changeReload = () => {
    var num = ++this.state.reload;
    this.setState({
      reload: num,
    });
  };

  jumpPublish = () =>{
    Actions.expublish();
  }

  render() {
    return (
      <View>
        <Tools changeReload={() => this.changeReload()} />
        <TouchableOpacity onPress={this.jumpPublish}><Image style={styles.btn} source={{uri: imgpath + 26}} resizeMode="contain" /></TouchableOpacity>
        <List type='list'/>
        <Scene key="test" component={Detail} />
      </View>
    );
  }
}

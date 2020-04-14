import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, ToastAndroid} from 'react-native';

import styles from '../../css/exchange/List';
import Card from './Card';

// 请求路径
const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/list'; // 请求路径

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      status: -1,
      data: [],
    };
  }

  componentDidMount() {
    fetch(datapath)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          status: res.status,
          data: res.data,
        });
      });
  }

  componentWillUpdate() {
    // if (this.state.oldpage != this.state.newpage) {
    // fetch(datapath)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //         status:res.status,
    //       data: res.data,
    //     });
    //     console.log(res)
    //   },[]);
    // }
  }

  render() {
    // 后端错误 status=-1
    var show1 = <Text>ERROR!code=500</Text>;

    // 列表为空 data为报错信息
    var show2 = <Text>empty list</Text>;
    
    // 有信息
    var show3 =<View>{this.state.data.map((item) => {return <Card data={item} />})}</View>

    return (
      <View style={styles.div}>
          {this.state.status != 0 ? show1 : (typeof(this.state.data)=='string'?show2:show3)}
      </View>
    );
  }
}

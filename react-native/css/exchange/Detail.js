import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

import color from '../../css/color'
import styles from '../../css/exchange/Detail';

import Back from './Back';
import List from './List';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/detail/'; // 请求路径
const token = 1587997685612; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      status: -1,
      time: 'time',
      oneid: 'res.data.shortdes_id',
      title: 'res.data.shortdes',
      text: 'res.data.longdes',
    };
  }

  render() {
    return (
      <View>
        <Back title=" " />
        <Context oneid={this.props.oneid} />
      </View>
    );
  }
}

class Context extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      data: {},
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(res=>{
       this.setState({
         token:res
       },()=>{
        var url = datapath + this.props.oneid + '/' + token;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            console.log('===========', res);
            var restime = this.cutTime(res.data.dtime);
            var time =
              restime.year +
              '/' +
              restime.month +
              '/' +
              restime.day +
              ' ' +
              restime.time;
            this.setState({
              status: res.status,
              time: time,
              oneid: res.data.shortdes_id,
              title: res.data.shortdes,
              text: res.data.longdes,
            });
          });
       })
    })
  }

  // 切割时间
  cutTime = (data) => {
    var arr1 = data.split(' ');
    var arr2 = arr1[0].split('/');
    var res = {
      day: arr2[1],
      month: arr2[0],
      year: arr2[2],
      time: arr1[1],
    };
    return res;
  };

  render() {
    return (
      <View style={styles.box}>
        <View style={styles.imgdiv}>
          <Image
            style={styles.img}
            source={imgpath + 26}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.time}>{this.state.time}</Text>
        <Text style={styles.title}>{this.state.title}</Text>
        <Text style={styles.text}>{this.state.text}</Text>
        <Button
          title="申请交换"
          style={styles.btn}
          color={color.green}
          onPress={() => {
            Actions.exapply({oneid: this.state.oneid});
          }}
        />
      </View>
    );
  }
}

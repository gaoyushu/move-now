import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ColorPropType,
  ToastAndroid,
  StyleSheet,
  TouchableHighlightBase,
} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

import color from '../../css/color';
import styles from '../../css/exchange/Apply';

import Back from './Back';
import Choose from './Choose';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/request'; // 请求路径
const token = 1587997685612; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      diaryid: -1,
      token: ''
    };
  }
  componentDidMount(){
    AsyncStorage.getItem('token')
    .then(res=>{
       this.setState({
         token:res
       },()=>{
         //初始化
       })
    })
  }

  changeText = (val) => {
    this.setState({
      text: val.nativeEvent.text,
    });
  };
  backDetail = () => {
    if (this.state.diaryid < 0 || !this.state.text) {
      ToastAndroid.show('请填写完整信息！', ToastAndroid.SHORT);
    } else {
      fetch(datapath, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: this.state.token,
          diaryid: this.state.diaryid,
          content: this.state.text,
          oneid: this.props.oneid
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status != 0) {
            ToastAndroid.show('上传失败！', ToastAndroid.SHORT);
          } else {
            var data = res.data;
            Actions.pop();
          }
        });
    }
  };
  render() {
    return (
      <View>
        <Back title="申请理由" />
        <TextInput
          style={styles.text}
          type="text"
          onChange={(val) => this.changeText(val)}
        />
        <Button
          style={styles.btn}
          title="选择日记"
          color={color.green}
          onPress={() => {
            Actions.exchoose({
              refresh: (num) => {
                this.setState({diaryid: num});
              },
            });
          }}
        />
        <Button style={styles.btn} 
          color={color.green} title="确认" onPress={this.backDetail} />
      </View>
    );
  }
}

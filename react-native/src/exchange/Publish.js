import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  ToastAndroid,
  ColorPropType,
} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import Input from '@ant-design/react-native/lib/input-item/Input';
import {TextareaItem} from '@ant-design/react-native';

import color from '../../css/color';
import styles from '../../css/exchange/Publish';
import Back from './Back';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/add/'; // 请求路径
const token = '1587997685612'; // 假设用户token 后期从内存中获取

export default class Publish extends Component {
  constructor() {
    super();
    this.state = {
      diaryid: -1,
      title: '',
      text: '',
    };
  }

  // 改变标题内容时改变state里的值
  changeTitle = (val) => {
    console.log(val.nativeEvent.text);
    this.setState({
      title: val.nativeEvent.text,
    });
  };

  // 改变详细内容时改变state里的值
  changeText = (val) => {
    this.setState({
      text: val.nativeEvent.text,
    });
  };

  // 按下确定时判断数据然后post根据返回的oneid跳转相应详情页
  jumpDetail = () => {
    if (this.state.diaryid < 0 || !this.state.text || !this.state.title) {
      ToastAndroid.show('请填写完整！', ToastAndroid.SHORT);
    } else {
      fetch(datapath, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          title: this.state.title,
          content: this.state.text,
          diaryid: this.state.diaryid,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status != 0) {
            console.log('上传错误');
          } else {
            var data = res.data;
            console.log(data);
            ToastAndroid.show('发布成功！', ToastAndroid.SHORT);
            Actions.exdetail({oneid: res.data});
          }
        });
    }
  };
  render() {
    return (
      <View style={styles.box}>
        <Back title="" />
        <Input
          style={styles.title}
          type="text"
          onChange={(val) => this.changeTitle(val)}
          placeholder="一句话介绍"
          placeholderTextColor={'#BBBBBB'}></Input>
        <TextInput
          style={styles.text}
          type="text"
          multiline={true}
          numberOfLines={10}
          placeholder="补充一下"
          placeholderTextColor={'#BBBBBB'}
          underlineColorAndroid={'transparent'}
          onChange={(val) => this.changeText(val)}></TextInput>
        <View style={styles.btnbox}>
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
        </View>
        <View style={styles.btnbox}>
          <Button
            style={styles.btn}
            color={color.green}
            title="确定"
            onPress={this.jumpDetail}
          />
        </View>
      </View>
    );
  }
}

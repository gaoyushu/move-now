import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import styles from '../../css/exchange/Card';

// 图片路径
const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径

export default class Card extends Component {
  // 跳转本条详情
  jumpDetail = (id) => {
    Actions.jump('exchange-detail');
  };

  render() {
    return (
      <TouchableOpacity onPress={this.jumpDetail(this.props.ddid)}>
        <View style={styles.bigdiv}>
          <View style={styles.div}>
            <View style={styles.head}>
              <View style={styles.imgdiv}>
                <Image
                  style={styles.img}
                  source={imgpath + 26}
                  resizeMode="stretch"
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.name}>朝花夕拾</Text>
                <Text style={styles.date}>{this.props.data.dtime}</Text>
              </View>
            </View>
            <Text style={styles.title}>{this.props.data.shortdes}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

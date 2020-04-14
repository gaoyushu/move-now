import React, {Component, useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const text = [
  {
    color: 'pink',
    img: require('../img/repair.png'),
    title: '居家维修保养',
  },
  {
    color: 'yellow',
    img: require('../img/flat.png'),
    title: '住宿优惠',
  },
  {
    color: 'green',
    img: require('../img/drive.png'),
    title: '出行接送',
  },
  {
    color: 'blue',
    img: require('../img/gift.png'),
    title: 'E族活动',
  },
];

export default class List extends Component {
  render() {
    return (
      <View >
        {text.map((item, idx) => {
          return (
            <View style={styles.div}>
            <View style={styles.block}></View>
              <View style={styles.imgdiv} backgroundColor={item.color}>
                <Image
                  style={styles.img}
                  source={item.img}
                  key={idx}
                  resizeMode="contain"></Image>
              </View>
              <View style={styles.block}></View>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div: {
    width: width,
    height: width / 6,
    marginTop: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  imgdiv: {
    flex: 3,
    height: width/7,
    borderRadius: width / 7,
    justifyContent: 'center',
    marginTop: width/75
  },
  img: {
    width: '50%',
    margin:'25%',
  },
  block:{
      flex: 1,
  },
  text: {
    flex:17,
    marginTop: width/15
  },
});

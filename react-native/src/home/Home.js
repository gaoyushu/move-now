import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';

import Search from './Search';
import Swiper from './Swiper';
import List from './List';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Search />
        <Swiper />
        <List />
        <View style={styles.btn}>
          <Button title="发布需求" color="red"/>
        </View>
        <Text style={styles.text}>©E族之家 版权所有</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    width: '80%',
    height: 50,
    borderRadius:200,
    marginLeft: '10%',
    marginTop: 20
  },
  text:{
      textAlign: "center",
      color: 'grey',
      fontSize: 13,
      marginTop: 15
  }
});

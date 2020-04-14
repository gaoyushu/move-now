import React, {Component, useState} from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Head from './Head';
import Mine from './Mine';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'red',
    height: 50,
    lineHeight: 50,
    color: '#fff'
  },
});

export default class Doc extends Component {
  exit = () => {
    AsyncStorage.removeItem('user').then(res=>{
      // console.log(res);
        Actions.login();
    });
  };
  render() {
    return (
      <ScrollView>
        <Head />
        <Mine />
        <TouchableOpacity onPress={this.exit}>
          <Text style={styles.text}>退出登录</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

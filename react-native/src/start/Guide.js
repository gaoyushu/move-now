import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';

export default class Guide extends Component {
  start =  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
  };
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={{uri:"http://116.62.14.0:8666/api/image/73"}} 
          />
          
        </View>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={{uri:"http://116.62.14.0:8666/api/image/71"}} 
          />
        </View>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={{uri:"http://116.62.14.0:8666/api/image/72"}} 
          />
        </View>
        <View style={styles.slide1} >
          <Image
            style={styles.img}
            source={{uri:"http://116.62.14.0:8666/api/image/74"}} 
          />
          <TouchableOpacity style={styles.start}  onPress={this.start}>
            <Text style={{color: '#fff',fontSize:17}}>开始体验</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  slide1: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  start: {
      position: 'absolute',
    bottom: 150,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A52A2A',
    borderRadius: 30,
  },
});
import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import styles from '../../css/exchange/Tools'
import { Actions } from 'react-native-router-flux';

// 图片路径
const imgpath = 'http://116.62.14.0:8666/api/image/'

export default class Tools extends React.Component {

  // 刷新功能
  updata = () =>{
  }

  // 跳转加好友
  jumpAddFriend = () =>{
    
  }

  // 跳转好友界面
  jumpFriends = () =>{

  }

  render() {
    return (
      <View style={styles.div}>
        <View style={styles.tools}>
          <View style={styles.block}/>
          <TouchableOpacity style={styles.imgdiv} onPress={this.updata}>
            <Image style={styles.img} source={{uri:imgpath+23}} resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgdiv} onPress={this.jumpAddFriend}>
            <Image style={styles.img} source={{uri:imgpath+25}} resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgdiv} onPress={this.jumpFriends}>
            <Image style={styles.img} source={{uri:imgpath+35}} resizeMode='contain'/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
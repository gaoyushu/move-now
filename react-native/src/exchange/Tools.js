import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import styles from '../../css/exchange/Tools'
import { Actions } from 'react-native-router-flux';

// 图片路径
const imgpath = 'http://116.62.14.0:8666/api/image/'

export default class Tools extends React.Component {

  // 刷新功能
  updata = () =>{
    this.props.changeReload;
  }

  // 跳转匿名交换列表
  jumpExlist = () =>{
    Actions.exedlist();
  }

  // 跳转我的一句话列表
  jumpMine = () =>{
    Actions.exmine();
  }

  render() {
    return (
      <View style={styles.div}>
        <View style={styles.tools}>
          <View style={styles.block}/>
          <TouchableOpacity style={styles.imgdiv} onPress={this.updata}>
            <Image style={styles.img} source={{uri:imgpath+23}} resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgdiv} onPress={this.jumpExlist}>
            <Image style={styles.img} source={{uri:imgpath+52}} resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgdiv} onPress={this.jumpMine}>
            <Image style={styles.img} source={{uri:imgpath+35}} resizeMode='contain'/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
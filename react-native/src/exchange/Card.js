import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

import color from '../../css/color';
import styles from '../../css/exchange/Card';

// 图片路径
const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      token:'',
      day: '',
      month: '',
      year: '',
      time: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(res=>{
       this.setState({
         token:res
       },()=>{
         //初始化
       })
    })
    var time = this.cutTime(this.props.data.dtime);
    this.setState({
      day: time.day,
      month: time.month,
      year: time.year,
      time: time.time,
    });
  }

  // 跳转本条详情
  jumpDetail = (id) => {
    var data = this.props.data.shortdes_id;
    // console.log('***',data)
    Actions.exdetail({oneid: data});
  };

  // 跳转匿名交换界面
  jumpChat = () => {
    Actions.exchat();
  };

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
    // 首页类型的卡片
    var list = (
      <TouchableOpacity onPress={() => this.jumpDetail()}>
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

    // 匿名交换列表类型的卡片
    var edlist = (
      <TouchableOpacity onPress={() => this.jumpDetail()}>
        <View style={styles.chbigdiv}>
          <View style={styles.chdiv}>
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
                <Text style={styles.title}>{this.props.data.shortdes}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );

    // 选择日记卡片
    var chlist = (
      <TouchableOpacity onPress={this.jumpChat}>
        <View style={styles.bigdiv}>
          <View style={styles.ediv}>
            <View style={styles.etime}>
              <Text style={styles.etime1}>{this.state.day}</Text>
              <Text style={styles.etime2}>
                {this.state.year + '/' + this.state.month}
              </Text>
            </View>
            <View style={styles.line} />
            <Text style={styles.etitle}>{this.props.data.dtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    // 正在进行的卡片
    var doinglist = this.props.data ? (
      <TouchableOpacity onPress={() => this.jumpDetail()}>
        <View style={styles.chbigdiv}>
          <View style={styles.chdiv}>
            <View style={styles.head}>
              <View style={styles.doimgdiv}>
                <Image
                  style={styles.img}
                  source={imgpath + 26}
                  resizeMode="stretch"
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.name}>朝花夕拾</Text>
                <Text style={styles.title}>{this.props.data.shortdes}</Text>
              </View>
              <View style={styles.dobtnbox}>
                <Button style={styles.dobtn} title='查看详情' color={color.green} onPress={()=>{Actions.exdetail({oneid: this.props.data.shortdes_id})}}/>
                <Button style={styles.dobtn} title='查看交换' color={color.green} onPress={()=>{Actions.exchat()}}/>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      <Text>没有信息</Text>
    );

    // 已经完成的卡片
    var finishlist = this.props.data ? (
      <TouchableOpacity onPress={() => this.jumpDetail()}>
        <View style={styles.chbigdiv}>
          <View style={styles.chdiv}>
            <View style={styles.head}>
              <View style={styles.doimgdiv}>
                <Image
                  style={styles.img}
                  source={imgpath + 26}
                  resizeMode="stretch"
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.name}>朝花夕拾</Text>
                <Text style={styles.title}>{this.props.data.shortdes}</Text>
              </View>
              <View style={styles.dobtnbox}>
                <Button style={styles.dobtn} title='查看详情' color={color.green} onPress={()=>{Actions.exdetail({oneid: this.props.data.shortdes_id})}}/>
                <Button style={styles.dobtn} title='查看交换' color={color.green} onPress={()=>{Actions.exchat()}}/>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      <Text>没有信息</Text>
    );

    // 根据List传的type 选择卡片样式
    var card;
    switch (this.props.type) {
      case 'list':
        card = list;
        break;
      case 'edlist':
        card = edlist;
        break;
      case 'chlist':
        card = chlist;
        break;
      case 'doinglist':
        card = doinglist;
        break;
      case 'finishlist':
        card = finishlist;
        break;
      default:
        card = <Text>获取信息失败！</Text>;
        break;
    }

    return <View>{card}</View>;
  }
}

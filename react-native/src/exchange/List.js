import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  ScrollView,
} from 'react-native';

import styles from '../../css/exchange/List';
import Card from './Card';

// 请求路径
const token = 1587997685612;
const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const listpath = path + 'change/list'; // 一句话请求路径
const edlistpath = path + 'chat/exchange/' + token; // 匿名交换列表
const chlistpath = path + 'changed/choose/' + token; // 选择日记列表
const minepath = path + 'change/mine/' + token; // 我的一句话列表

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      status: -1,
      data: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(res=>{
       this.setState({
         token:res
       },()=>{
        var datapath;
        switch (this.props.type) {
          case 'list':
            datapath = listpath;
            break;
          case 'edlist':
            datapath = path + 'chat/exchange/' + this.state.token;
            break;
          case 'chlist':
            datapath = path + 'changed/choose/' + this.state.token;
            break;
          case 'doinglist':
            datapath = path + 'change/mine/' + this.state.token;
            break;
          case 'finishlist':
            datapath = path + 'change/mine/' + this.state.token;
            break;
          default:
            datapath = listpath;
            break;
        }
        fetch(datapath)
          .then((res) => res.json())
          .then((res) => {
            var data=res.data;
            // console.log('=========',this.props.type)
            if (this.props.type == 'doinglist') {
              data = res.data.open;
            }
            if (this.props.type == 'finishlist') {
              data = res.data.close;
              // console.log('000000000',res.data)
            }
            this.setState({
              status: res.status,
              data: data,
            });
          });
       })
    })
  }

  render() {
    // 后端错误 status=-1
    var show1 = <Text>ERROR!code=500</Text>;

    // 列表为空 data为报错信息
    var show2 = <Text>列表为空</Text>;

    // 有信息
    var show3 = (
      <View>
        {typeof(this.state.data)!='string'&&this.state.data?this.state.data.map((item) => {
          return <Card type={this.props.type} data={item} />;
        }):<Text>列表为空</Text>}
      </View>
    );
    // console.log('=======',this.props.type,'---------',this.state.data);

    return (
      <ScrollView>
        <View style={styles.div}>
          {this.state.status != 0&&typeof this.state.data!='string'
            ? show1
            : typeof this.state.data == 'string'
            ? show2
            : show3}
        </View>
      </ScrollView>
    );
  }
}

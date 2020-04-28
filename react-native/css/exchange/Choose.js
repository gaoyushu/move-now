import React, {Component} from 'react';
import {View, Text, Button, useWindowDimensions} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import {Radio} from '@ant-design/react-native';

const RadioItem = Radio.RadioItem;

import color from '../../css/color'
import Back from './Back';
import Card from './Card';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'changed/choose/'; // 请求路径
const token = 1587997685612; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      num: -1, // 选中数据
      idx: -1, // 选中索引
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(res=>{
       this.setState({
         token:res
       },()=>{
        var url = datapath + this.state.token;
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
              console.log(res);
            this.setState({
              data: res.data,
            });
          });
       })
    })
  }
  render() {
    var list = typeof(this.state.data)!="string" ? (
      this.state.data.map((item, idx) => {
        return (
          <RadioItem
            key={idx}
            checked={this.state.idx == idx}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({idx: idx});
              }
              this.state.num = item.did;
            }}
            style={{height: 80, width: '100%'}}>
            <Card type="chlist" data={item} />
          </RadioItem>
        );
      })
    ) : (
      <Text>没有可选日记</Text>
    );
    console.log(this.state.num, this.state.idx, this.state.data);

    return (
      <View>
        <Back title="选择日记" />
        {list}
        <Button
          title="确定"
          color={color.green}
          onPress={() => {
            Actions.pop(this.props.refresh(this.state.num));
          }}
        />
      </View>
    );
  }
}

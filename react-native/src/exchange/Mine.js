import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import {Accordion} from '@ant-design/react-native';

import Back from './Back';
import List from './List';

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/exchange/'; // 请求路径
const token = 1587997685612; // 假设用户token 后期从内存中获取

export default class Mine extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activeSections: [2, 0],
    };
    this.onChange = (activeSections) => {
      this.setState({activeSections});
    };
  }

  render() {
    return (
      <View>
        <Back title="我的一句话" />
        <View>
          <Accordion
            onChange={this.onChange}
            activeSections={this.state.activeSections}>
            <Accordion.Panel header="正在进行">
              <List type="doinglist" />
            </Accordion.Panel>
            <Accordion.Panel header="已经完成">
              <List type="finishlist" />
            </Accordion.Panel>
          </Accordion>
        </View>
      </View>
    );
  }
}

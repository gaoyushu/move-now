import React, { Component } from 'react';
import {ScrollView, Text , Button} from 'react-native';
import { Scene , Actions} from 'react-native-router-flux';

import Tools from './Tools';
import List from './List';
import Detail from './Detail'

export default class Index extends Component{
  constructor(){
    super();
    this.state={
      reload: 0 // tools里点击刷新时 更改这个值重新render
    }
  }

  changeReload = () => {
    var num = this.state.reload;
    this.setState({
      reload: num++
    })
  }

  render(){
    return (
      <ScrollView>
        {/* <Text>{this.state.reload}</Text> */}
        <Tools changeReload={this.changeReload}/>
        <List/>
        <Scene key='test' component={Detail}/>
      </ScrollView>
    );
  }
}
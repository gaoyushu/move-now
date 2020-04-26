import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Router, Scene } from "react-native-router-flux";
import Home from './src/mine/Home';
import Inform from './src/mine/Inform';
import Set from './src/mine/Set';
import About from './src/mine/About';
import Edit from './src/mine/Edit';
import  Friend from "./src/mine/Friend";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key="mine"
            hideNavBar={true}
            initial={true}
          >
            <Scene key='home' component={Home}/>
            <Scene key='notice' component={Inform}/>
            <Scene key='mineSet' component={Set}/>
            <Scene key='mineAbout' component={About}/>
            <Scene key='mineEdit' component={Edit}/>
            <Scene key='myFriend' component={Friend}/>
            {/* <Scene key='login' component={}/>//退出登录页面 */}
          </Scene>

        </Scene>
      </Router >
    )
  }
}

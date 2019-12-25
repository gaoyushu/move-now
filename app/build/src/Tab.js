import React, { Component } from 'react'
import Diary from './diary';
import Flower from './Flower';
import { TabBar } from "antd-mobile";
export default class Tab extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "blueTab"
        }
    }
    render() {
        return (
            <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#bfbfbf"
          tintColor="#fff"
          barTintColor="#1C4678"
          tabBarPosition='bottom'
        >
          <TabBar.Item
            title="花海"
            key="花海"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/云端1.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/云端.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <Flower />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/绿叶1.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/绿叶.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="日记"
            key="日记"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
          <Diary />
          </TabBar.Item>
        </TabBar>
      </div>
        )
    }
}

import React, { Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ToastAndroid,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Publish extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoad: false,
      oldpage: 1,
      newpage: 1,
    };
  }

  componentDidMount() {
    fetch(
      'https://cnodejs.org/api/v1/topics?page=' +
      this.state.oldpage +
      '&limit=13',
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
          isLoad: true,
        });
      });
  }

  componentWillUpdate() {
    if (this.state.oldpage != this.state.newpage) {
      fetch(
        'https://cnodejs.org/api/v1/topics?page=' +
        this.state.oldpage +
        '&limit=13',
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res.data,
            isLoad: true,
            oldsearch: this.state.newsearch,
          });
        });
    }
  }

  render() {
    return (
      <View>
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                height: 50,
              }}>
              <Button
                style={{ flex: 1 }}
                color="red"
                title="<"
                onPress={() => {
                  Actions.pop();
                }}
              />
              <Text
                style={{
                  flex: 8,
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 17,
                }}>
                我的发布
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 17,
                }}>
                · · ·
              </Text>
            </View>
          }
          ListFooterComponent={
            <View style={styles.btn}>
              <View style={styles.box}>
                <Text
                  style={styles.change}
                  onPress={() => {
                    if (this.state.oldpage == 1) {
                      ToastAndroid.show('first page!', ToastAndroid.SHORT);
                    } else {
                      this.setState({
                        newpage: this.state.oldpage--,
                      });
                    }
                  }}
                >上一页</Text></View>
              <Text style={styles.page}>第 {this.state.oldpage} 页</Text>
              <View style={styles.box}>
                <Text
                  style={styles.change}
                  onPress={() => {
                    if (this.state.oldpage == 3) {
                      ToastAndroid.show('no more pages!', ToastAndroid.SHORT);
                    } else {
                      this.setState({
                        newpage: this.state.oldpage++,
                      });
                    }
                  }}
                >下一页</Text></View>
            </View>
          }
          numColumns={1}
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text style={{ flex: 8 }}>
                {item.title.substring(0, 15) + '...'}
              </Text>
              <Text style={{ flex: 2, paddingTop: 15 }}>{item.create_at.substring(0, 10)}</Text>
              {item.good ? (
                <Text style={{ flex: 2, textAlign: 'right' }}>已回复</Text>
              ) : (
                  <Text style={{ flex: 2, textAlign: 'right', color: 'red' }}>
                    待回复
                  </Text>
                )}
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#fff'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  change: {
    width: '75%',
    backgroundColor: 'red',
    textAlign: 'center',
    height: 50,
    lineHeight: 50,
    borderRadius: 50,
    color: '#fff'
  },
  page: {
    flex: 1,
    textAlign: "center",
  }
});

import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

import color from '../../css/color';
import styles from '../../css/exchange/Back';

const path = 'http://116.62.14.0:8666/';

export default class Tools extends React.Component {
  // 返回功能
  goBack = () => {
    Actions.pop();
  };

  render() {
    return (
      <View style={styles.div}>
        <Button onPress={this.goBack} color={color.green} style={styles.btn} title="<" />
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

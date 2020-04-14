import {StyleSheet, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');

import color from '../color';

var styles = StyleSheet.create({
  bigdiv: {
    flex: 1,
    width: 0.96 * width,
    height: 0.13 * height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.01 * height,
    backgroundColor: '#fff',
  },
  div: {
    flex: 1,
    width: '94%',
    height: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3%',
    backgroundColor: 'yellow',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    backgroundColor: 'pink',
    margin: 0,
  },
  imgdiv: {
    flex: 2,
    width: 0.005 * width,
    height: 0.005 * height,
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  right: {
    flex: 8,
    justifyContent: 'center',
  },
  name:{

  },
  date:{
    color: color.grey
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 17,
    marginTop: 5,
  }
});

module.exports = styles;

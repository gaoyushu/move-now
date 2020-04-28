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
    // backgroundColor: 'yellow',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    // backgroundColor: 'pink',
    margin: 0,
  },
  imgdiv: {
    flex: 2,
    width: '100%',
    height: '100%',
    backgroundColor:'#558'
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  right: {
    flex: 8,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  name:{

  },
  date:{
    color: color.grey
  },
  title: {
    flex: 1,
    fontSize: 17,
    marginTop: 5,
  },
  ediv:{
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  etime:{
    flex: 2,
    flexDirection:'column',
    alignItems: "center"
  },
  etime1:{
    width: '100%',
    fontSize: 20,
    textAlign: "center"
  },
  etime2:{
    width: '100%',
    color: color.green,
    textAlign: "center"
  },
  etitle:{
    flex: 8,
    marginLeft: 0.05*width,
    alignSelf:'center',
    fontSize: 17
  },
  line:{
    width: 1,
    backgroundColor: color.green
  },
  chbigdiv: {
    flex: 1,
    width: 0.96 * width,
    height: 0.12 * height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.01 * height,
    backgroundColor: '#fff',
  },
  chdiv: {
    flex: 1,
    width: '94%',
    height: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3%',
    // backgroundColor: 'yellow',
    marginTop: 0
  },
  doimgdiv:{
      flex: 2,
      width: '100%',
      height: '100%',
      backgroundColor:'#558'
    },
  dobtnbox:{
    flex: 3,
    margin:0,
  },
  dobtn:{
    fontSize: 10
  }
});

module.exports = styles;

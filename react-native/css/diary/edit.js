import React from 'react';
import {
  StyleSheet,
  Dimensions,
  
} from 'react-native';
const {width,height} = Dimensions.get('window');
var style = StyleSheet.create(
{
  head:{
    width:width,
    height:50,
    flexDirection:'row',
    backgroundColor:'#F5F5F5'
  },
  headLeft:{
      // backgroundColor:'red',
      width:'20%',
      lineHeight:50,
      paddingLeft:10,
      justifyContent:'center',
      // alignItems:'center'
  },
  headMiddle:{
      // backgroundColor:'green',
      width:'60%',
      lineHeight:50,
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center'
  },
  headRight:{
      width:'20%'
  },
  but:{
      width:'66%',
      marginLeft:'20%',
      height:28,
      marginTop:13,
      borderWidth:1,
      borderColor:'#8bcca1',
      // borderRadius:5,
      backgroundColor:'#8bcca1'
      
  },
  butT:{
      lineHeight:26,
      textAlign:'center',
      color:'#fff'
  },
  headWord:{
      fontSize:16,
      color:'#000',
  },
  text:{
      width:'96%',
      marginLeft:'2%',
      marginRight:'2%'
      // height:height*0.5,
      // backgroundColor:'red'
  },
  inputTittle:{
      width:'100%',
      height:45,
      borderBottomWidth:0.5,
      borderBottomColor:'#ccc',
      fontSize:16
      // backgroundColor:'#fff'
  },
  inputContent:{
    width:'100%',
    marginBottom:20
    // height:0.5*height-40,
    // backgroundColor:'#fff'
},
inputContent1:{
  width:'100%',
  marginBottom:20,
  height:0.5*height-45,
  // backgroundColor:'#fff'
},
imgText:{
  color:'#8c8c8c',
  marginBottom:5
},
body:{
  width:width,
  height:height,
  backgroundColor:'#fff'
}
});
module.exports = style;
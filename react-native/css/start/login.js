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
        // backgroundColor:'red'
    },
    icon1:{
        lineHeight:50,
        marginLeft:10
    },
    word:{
        fontSize:18,
        color:'#fff',
        lineHeight:50,
        textAlign:'center',
        // justifyContent:'center',
        // alignItems:'center'
    },
    logo:{
        // backgroundColor:'green',
        marginTop:30,
        width:0.56*width,
        height:0.2*height,
        marginBottom:30,
        marginLeft:0.22*width
    },
    word1:{
        fontSize:12,
        marginTop:10,
        
        // marginRight:0.15*width
    },
    bottom:{
        flexDirection:'row',
        marginRight:0.1*width,
        alignSelf:'flex-end',
    },
    textInput:{
        fontSize:14,
        paddingTop:0,
        paddingBottom:0,
        textAlignVertical:'center'
    }
});
module.exports = style;
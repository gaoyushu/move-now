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
        width:width,
        height:height
    },
    input:{
        width:width,
        height:height,
        backgroundColor:'#fff'
    }
});
module.exports = style;
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
        marginBottom:20,
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
    },
    // check:{
    //     width:0.66*width,
    //     marginLeft:0.17*width,
    //     height:40,
    //     // backgroundColor:'red',
    //     justifyContent:'center'
    // }
    check:{
        width:0.66*width,
        marginLeft:0.17*width,
        height:40,
        // backgroundColor:'red',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'row'
    },
    checkbox:{
        width:12,
        height:12,
        borderRadius:50,
        borderWidth:1.5,
        borderColor:'#000',
        justifyContent:'center',
        marginLeft:10,
        marginRight:5
    },
    boxbox:{
        width:5,
        height:5,
        backgroundColor:'#000',
        borderRadius:50,
        borderWidth:1.5,
        borderColor:'#000',
        marginLeft:2,
        display:'none'
    }
});
module.exports = style;
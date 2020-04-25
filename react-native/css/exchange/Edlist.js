import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const {width,scale} = Dimensions.get('window');
const s = width / 640;
var edlist = StyleSheet.create({
    header:{
        width:width,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    headertext:{
        color:'#fff',
        fontSize:20
    },
    back:{
        position:'absolute',
        left:5,
        top:5
    },
    box:{
        width:width,
        backgroundColor:'#fff',
        borderBottomColor:'#f5f6f8',
        borderBottomWidth:2,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    box1:{
        width:width*0.8,
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row'
    },
    boxleft:{
        width:width*0.2,
    },
    headerimage:{
        width:60,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        backgroundColor:'#000'
    },
    images:{
        width:60,
        height:60,
        resizeMode:'contain'
    },
    boxright:{
        width:width*0.6
    },
    text1:{
        fontSize:15,
        fontWeight:'700',
        marginBottom:10
    },
    text2:{
        fontSize:14,
        color:'gray'
    },
    empty:{
        paddingTop:50,
        color:'#8bcca1'
    },
    ems:{
        width:width,
        justifyContent:'center',
        alignItems:'center'
    }

})

module.exports = edlist;
import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const {width,scale} = Dimensions.get('window');
const s = width / 640;
var choice = StyleSheet.create({
    header:{
        width:width,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    back:{
        position:'absolute',
        left:5,
        top:5
    },
    headertext:{
        color:'#fff',
        fontSize:20
    },
    contents:{
        width:width,
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        borderTopColor:'#f0f0f0',
        borderTopWidth:10,
        flexDirection:'row'
    },
    sures:{
        width:width,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderTopColor:'#f0f0f0',
        borderTopWidth:10
    },
    sure:{
        width:width,
        height:50,
        color:'#fff',
        textAlignVertical:'center'
    },
    checked:{
        width:width*0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    times:{
        width:width*0.15,
        borderRightColor:'gray',
        borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titles:{
        width:width*0.65,
        justifyContent:'center',
        paddingLeft:10
    },
    texttop:{
        fontSize:17,
        marginBottom:5
    },
    textbottom:{
        fontSize:14,
        color:'#8bcca1'
    },
    texttitle:{
        fontSize:16,
        fontWeight:'400'
    }
})

module.exports = choice;
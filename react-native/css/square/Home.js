import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const {width,scale} = Dimensions.get('window');
const s = width / 640;
var home = StyleSheet.create({
    headers:{
        width:width,
        height:225,
        alignItems:'center',
        justifyContent:'center'
    },
    headerbackground:{
        width:width,
        height:225,
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'contain'
    },
    follower1:{
        width:50*s,
        height:50*s,
        position:'absolute',
        right:15*s,
        top:15*s
    },
    follower:{
        width:50*s,
        height:50*s,
    },
    users:{
        width:90,
        height:90,
        borderRadius:45,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    userheader:{
        width:90,
        height:90
    },
    message:{
        flexDirection:'row',
        marginTop:15
    },
    username:{
        fontSize:16,
        marginTop:10
    },
    pops:{
        position:'absolute',
        left:5,
        top:5
    },
    left:{
        fontSize:13,
        marginRight:10
    },
    right:{
        fontSize:13
    },
    content:{
        // paddingTop:15,
        // paddingBottom:15,
        // backgroundColor:'#fff',
        // marginTop:10,
        // flexDirection:'row',
        backgroundColor: '#fff',
        width: 0.95*width,
        marginLeft:0.025*width,
        borderRadius: 10,
        elevation: 5,
        height: 120,
        marginTop:20,
        flexDirection:'row'
    },
    leftbox:{
        // width:width*0.2,
        // justifyContent:'center',
        // alignItems:'center',
        // borderRightWidth:1,
        // borderRightColor:'gray'
        borderRadius: 10,
        width: '58%',
        height: 120,
        justifyContent:'center',
        // alignItems:'center'
        
    },
    lefttop:{
        flexDirection:'row',
        marginTop:'5%',
        marginLeft:'10%',
        marginRight:'10%',
        width:'80%',
        height:'20%',
        // backgroundColor:'red'
        
    },
    leftTopText0:{
        fontSize:13,
        // paddingLeft:,
        // paddingTop:5,
        lineHeight:24
    },
    leftTopText:{
        fontSize:13,
        paddingLeft:15,
        // paddingTop:5,
        lineHeight:24
    },
    // days:{
    //     fontSize:16
    // },
    // dates:{
    //     fontSize:13,
    //     marginTop:10,
    //     color:'#8bcca1'
    // },
    leftcenter:{
          // backgroundColor:'green',
          width:'80%',
          marginLeft:'10%',
          marginRight:'10%',
          height:'45%'
    },
    leftMiddleText:{
        fontSize:18,
        lineHeight:54,
        
    },
    leftbottom:{
        flexDirection:'row',
        marginLeft:'10%',
        marginRight:'10%',
        width:'80%',
        height:'20%',
        flexDirection:'row',
        marginBottom:'5%'
    },
    leftBottomText:{
        fontSize:13,
        lineHeight:24
        
    },
    leftBottomImg:{
        paddingLeft:40,
        paddingTop:2,
   
    },
    rightbox:{
        width: '42%',
        height: 120,
        // float: 'right',
        // backgroundColor:'red',
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        // borderLeftWidth:1,
        // borderLeftColor:'#ccc',
        // borderTopRightRadius:10,
        // borderBottomRightRadius:10,
        overflow:'hidden'
    },
    contenttext:{
        width:width*0.55,
        paddingTop:15,
        paddingBottom:15,
    },
    context:{
        fontSize:15,
        paddingLeft:10
    },
    rightbottom:{
        flexDirection:'row'
    },
    button:{
        flexDirection:'row',
        paddingLeft:20
    },
    button1:{
        flexDirection:'row',
        paddingLeft:40
    },
    comments:{
        width:30*s,
        height:30*s
    },
    like:{
        width:30*s,
        height:30*s
    },
    bottomtext:{
        paddingLeft:5*s,
        alignItems:'center'
    },
    bottombox:{
        marginTop:40,
        alignItems:'center'
    },
    bottomboxtext:{
        color:'#8bcca1',
        fontSize:13
    }

})

module.exports = home;
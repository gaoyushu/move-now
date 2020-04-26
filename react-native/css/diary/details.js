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
    headWord:{
        fontSize:16,
        color:'#fff',
    },
    user:{
        // backgroundColor:'yellow',
        marginTop:10,
        width:width*0.9,
        marginLeft:0.05*width,
        // justifyContent:'center',
        height:60,
        flexDirection:'row'
    },
    userLeft:{
        width:'23%',
        marginLeft:'2%',
        // backgroundColor:'red'
    },
    userLeftImg:{
        width:60,
        borderRadius:50,
        overflow:'hidden'
    },
    userRight:{
        width:'67%',
        // paddingLeft:'5%',
        // backgroundColor:'green',
        justifyContent:'center'
    },
    userRT1:{
        fontSize:17,
        fontWeight:"bold",
        paddingBottom:2
    },
    userRT2:{
        fontSize:13,
        color:'#8c8c8c'
    },
    userRT3:{
        fontSize:12,
        color:'#8c8c8c'
    },
    diary:{
        width:0.9*width,
        marginLeft:0.05*width,
        // marginTop:15,
        // borderTopWidth:3,
        // borderTopColor:'#57a099',
        // backgroundColor:'green'
    },
    diaryTittle:{
        marginTop:'5%',
        marginBottom:'3%',
        width:'95%',
        paddingLeft:'3%',
        // borderLeftWidth:5,
        // borderLeftColor:'#57a099'
    },
    diaryTT:{
        fontWeight:'bold',
        fontSize:18
    },
    diaryContent:{
        width:'100%',
        backgroundColor:'#f5f6f8',
        paddingTop:'2%',
        paddingBottom:'2%',
        paddingLeft:'5%',
        paddingRight:'5%',
        // lineHeight:25
    },
    diaryCT:{
        lineHeight:25
    },
    body:{
        height:height,
        backgroundColor:'#fff',
        flex:1
    },
    sc:{
        height:height+200,
        flex:1
    },
    diaryImg:{
        // height:0.2*height
        width:'100%',
        backgroundColor:'#f5f6f8',
        paddingLeft:'5%',
        // backgroundColor:'red'
    },
    comments:{
        width:0.9*width,
        marginLeft:0.05*width,
        marginTop:20,
        marginBottom:41
    },
    chead:{
        width:'100%',
        flexDirection:'row',
        height:30,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    cheadLeft:{
        width:'25%',
        borderBottomWidth:2,
        borderBottomColor:'#8bcca1'
    },
    cheadLeftT:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold'
    },
    cheadRight:{
        width:'25%',
        marginLeft:'50%'
    },
    cheadRightT:{
        textAlign:'center',
        fontSize:15,
        color:'#7b7979'
    },
    ccontent:{
        width:'100%',
        marginTop:'5%',
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:'#dedada',
        paddingBottom:5
    },
    ccontent1:{
        width:'100%',
        marginTop:'5%',
        flexDirection:'row',
        paddingBottom:5
    },
    ccontentImg:{
        width:40,
        height:40,
        borderRadius:50,
        overflow:'hidden'
    },
    ccontentUser:{
        // height:40,
        // backgroundColor:'red',
        width:0.9*width-40,
        marginLeft:10
    },
    ccontentUserName:{
        // lineHeight:40,
        color:'#535151',
        fontSize:12,
        marginBottom:5
    },
    ccontentText:{
        // marginLeft:40,
        marginBottom:5
    },
    ccontentDate:{
        // marginLeft:30,
        fontSize:11,
        color:'#535151'
        // marginTop:10
    },
    cContent:{
        width:'100%',
        height:100,
    },
    cCT:{
        lineHeight:100,
        textAlign:'center'
    },
    own:{
        width:width,
        height:40,
        backgroundColor:'#f0eeee',
        position:'absolute',
        top:height-65,
        zIndex:9999,
        flexDirection:'row'
    },
    ownView:{
        width:'24.7%',
        flexDirection:'row',
        justifyContent:'center'
    },
    ownT:{
        lineHeight:40,
        marginLeft:2,
        color:'#535151',
        fontSize:13
    },  
    ownMiddle:{
        width:'0.4%',
        marginTop:5,
        height:30,
        backgroundColor:'#dedada'
    },
    // ownRight:{
    //     width:'24.7%',
    //     flexDirection:'row',
    //     justifyContent:'center'
    // },
    // ownRT:{
    //     lineHeight:40,
    //     marginLeft:10,
    //     color:'#535151'
    // },  
    square:{
        width:width,
        height:40,
        backgroundColor:'#f0eeee',
        position:'absolute',
        top:height-65,
        zIndex:9999,
        flexDirection:'row'
    },
    squareLeft:{
        width:'49.8%',
        flexDirection:'row',
        justifyContent:'center'
    },
    squareLT:{
        lineHeight:40,
        marginLeft:10,
        color:'#535151'
    },  
    squareMiddle:{
        width:'0.4%',
        marginTop:5,
        height:30,
        backgroundColor:'#dedada'
    },
    squareRight:{
        width:'49.8%',
        flexDirection:'row',
        justifyContent:'center'
    },
    squareRT:{
        lineHeight:40,
        marginLeft:10,
        color:'#535151'
    },  
    container: {
        position: 'absolute',
        zIndex:9999,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cover: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
   

});
module.exports = style;
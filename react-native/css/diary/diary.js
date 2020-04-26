import React from 'react';
import {
  StyleSheet,
  Dimensions,
  
} from 'react-native';
const {width,height} = Dimensions.get('window');
var style = StyleSheet.create(
{
    // text:{
    //     fontSize:25
    // },
    top:{
        // position:'relative',
        width:width,
        height:200,
        backgroundColor:'#8bcca1',
        
    },
    date:{
        color:'#fff',
        fontSize: 28,
        paddingTop:40,
        textAlign: 'center'
    },
    word:{
        marginTop:20,
        borderTopWidth:2,
        borderTopColor:'#fff',
        width: 0.8*width,
        paddingTop:10,
        marginLeft:0.1*width
    },
    mtext:{
        color:'#fff',
        fontSize:13,
        textAlign:'center',
        marginTop:12
    },
    author:{
        color:'#fff',
        fontSize:12,
        textAlign:'center',
        marginTop:10
    },
    diary:{
        backgroundColor: '#fff',
        width: 0.95*width,
        marginLeft:0.025*width,
        borderRadius: 10,
        elevation: 5,
        height: 120,
        marginTop:20,
        flexDirection:'row'
    },
    bottom:{
        paddingTop:40,
        paddingBottom:240,
        width:width,
    },
    bottomText:{
        color:'#8bcca1',
        fontSize:13,
        textAlign:'center'
    },
    right:{
        width: '42%',
        height: 120,
        // float: 'right',
        // backgroundColor:'red',
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        // borderLeftWidth:1,
        // borderLeftColor:'#ccc'
    },
    left:{
        borderRadius: 10,
        width: '58%',
        height: 120,
        // marginTop:10,
        // backgroundColor:'green',
  
    },
    leftTop:{
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
    leftMiddle:{
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
    leftBottom:{
        flexDirection:'row',
        // marginTop:10,
        marginLeft:'10%',
        marginRight:'10%',
        width:'80%',
        height:'20%',
        flexDirection:'row',
        // backgroundColor:'red',
        marginBottom:'5%'
        
    },
    leftBottomText:{
        fontSize:13,
        // paddingLeft:15,
        // paddingTop:5,
        lineHeight:24
        
    },
    leftBottomImg:{
        paddingLeft:40,
        // justifyContent:'center'
        paddingTop:2,
        // flexDirection:'row'
    },
    ten:{
        // flex:1,
        position:'absolute',
        top:0.8*height,
        left:0.05*width,
        zIndex:99999,
        // elevation: 99999,
        // backgroundColor:'#000'
    }
});
module.exports = style;
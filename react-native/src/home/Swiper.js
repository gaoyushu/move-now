import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, ScrollView,Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'
var {width,height} = Dimensions.get("window");
export default class MyApp extends Component {
 
   _onIndexChanged(index){
       // alert(index)
   }
    render() {
        return (
           <View style={styles.wrapper}>
 
               <View style={styles.swiperView}>
                   <Swiper style={styles.swiperStyle}
                           showsButtons={false}
                           horizontal={true}
                           loop={true}
                           index={0}
                           onIndexChanged={this._onIndexChanged}
                           autoplayTimeout = {3}
                           autoplay={true}
                           autoplayDirection={true}
                           showsPagination = {true}
                           dot = {<View style={{width:10,height:10,backgroundColor:'red',marginRight: 20,borderRadius:10}}/>}
                           paginationStyle = {{bottom: 10}}
                           activeDot = {<View style={{width:10,height:10,backgroundColor:'yellow',marginRight: 20,borderRadius:10}} />}
 
                   >
                       <View style={styles.slide1} >
                           <Image source={require('../img/banner1.png')}></Image>
                       </View>
                       <View style={styles.slide2} >
                       <Image source={require('../img/banner2.jpg')}></Image>
                       </View>
                       <View style={styles.slide3}>
                           <Image source={require('../img/banner3.jpg')}></Image>
                       </View>
                   </Swiper>
               </View>
           </View>
        )
    }
}
 
const styles = StyleSheet.create({
    wrapper: {
       flex: 1,
       backgroundColor:"#ff0000"
 
    },
    swiperView:{
        width:width,
        height:200,
        backgroundColor:"#000000"
    },
    swiperStyle:{
        backgroundColor:"#00ff00"
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000ff',
        flex: 1
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000ff',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000ff',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
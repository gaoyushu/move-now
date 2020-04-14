import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native'
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start = async ()=> {
        await AsyncStorage.setItem('isInstall','true');
        this.props.afterInstall();
    }
    render() {
        return (
            <View style={styles.wrapper}>
            <Swiper>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../img/enter1.jpg')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../img/enter2.jpg')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require('../img/enter3.jpg')}/>
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{fontSize:20}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    slide1:{
        justifyContent:'center',
        alignItems:'center'
    },
    start:{
        position:'absolute',
        bottom:150,
        width:120,
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:'100%',
    }
})

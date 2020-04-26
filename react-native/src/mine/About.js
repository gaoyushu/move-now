import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class About extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <ImageBackground
                    style={{ flex: 1, width: null, height: null }}
                    source={require('../images/back1.png')} />
                <TouchableOpacity onPress={Actions.pop} style={{ width: 50, marginLeft: 10, top: 15, position: 'absolute', zIndex: 1 }}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../image/jiantouleft.png')}
                    />
                </TouchableOpacity>
                <Image
                    style={{ width: 400, height: 250, position: 'absolute', zIndex: 1, marginTop:150,marginLeft:42}}
                    source={{ uri: 'http://116.62.14.0:8666/api/image/5' }} />
                <Text style={{color:'white',fontSize:21,position:'absolute',zIndex:1,top:430,left:120}}>高予蜀 周弘 牛玉欣 孙童</Text>
            </View>
        )
    }
}

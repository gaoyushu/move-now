import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity ,Dimensions} from 'react-native'

const { height,width } = Dimensions.get('window');

import { Actions } from 'react-native-router-flux';

export default class About extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{ flex: 1, width: null, height: null }}
                    source={require('../images/back1.png')} />
                <TouchableOpacity onPress={Actions.pop} style={{ width: width*0.104, marginLeft: 0.02*width, top: 0.018*height, position: 'absolute', zIndex: 1 }}>
                    <Image
                        style={{ width: 0.0625*width, height: 0.035*height }}
                        source={require('../image/jiantouleft.png')}
                    />
                </TouchableOpacity>
                <Image
                    style={{ width: 0.833*width, height: 0.293*height, position: 'absolute', zIndex: 1, marginTop:0.176*height,marginLeft:0.0875*width}}
                    source={{ uri: 'http://116.62.14.0:8666/api/image/5' }} />
                <Text style={{color:'white',fontSize:16,position:'absolute',zIndex:1,top:0.504*height,left:0.25*width}}>高予蜀 周弘 牛玉欣 孙童</Text>
            </View>
        )
    }
}

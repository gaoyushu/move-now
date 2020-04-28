import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'//渐变插件
import { Actions } from 'react-native-router-flux';
import styles from '../../css/SetStyle';

export default class Set extends Component {
    render() {
        return (
            <View style={styles.bigOne}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={styles.top}
                >
                    <TouchableOpacity onPress={Actions.pop}>
                        <Image
                            style={styles.img}
                            source={require('../image/jiantouleft.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: 'white' }}>设置</Text>
                </LinearGradient>
                <View style={{width:'100%',height:435}}>
                    <View style={styles.bigTwo} onPress={()=>Actions.mineSet()}>
                        <Text style={{ fontSize: 17 }}>修改密码</Text>
                    </View>
                    <View style={styles.bigTwo}>
                        <Text style={{ fontSize: 17 }}>消息设置</Text>
                    </View>
                    <View style={styles.bigTwo} onPress={()=>Actions.mineAbout()}>
                        <Text style={{ fontSize: 17 }}>隐私设置</Text>
                    </View>
                    <View style={styles.bigTwo} onPress={()=>Actions.mineAbout()}>
                        <Text style={{ fontSize: 17 }}>通用设置</Text>
                    </View>
                    <View style={styles.bigTwo} onPress={()=>Actions.mineAbout()}>
                        <Text style={{ fontSize: 17 }}>清除缓存</Text>
                    </View>
                </View>
            </View>
        )
    }
}

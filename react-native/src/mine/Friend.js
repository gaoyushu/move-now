import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'//渐变插件
import { Actions } from 'react-native-router-flux';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status: 0
        }
    }
    componentDidMount() {
        fetch('http://116.62.14.0:8666/chat/friends/1587910080066')
            .then(res => { return res.json() })
            .then(res => {
                console.log(res.data[0].uimage);
                this.setState({
                    data: res.data,
                    status: res.status
                })
            });

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'center' }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={{ width: '100%', height: 70, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                >
                    <TouchableOpacity onPress={Actions.pop}>
                        <Image
                            style={{ width: 30, height: 30, marginRight: 150, marginLeft: 10 }}
                            source={require('../image/jiantouleft.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 25, color: 'white' }}>好友列表</Text>
                </LinearGradient>
                <ScrollView>
                    <View style={{ width: 480, flexDirection: 'column', alignItems: 'center', }}>
                        {
                            this.state.status !== -1
                                ? this.state.data.map((item, key) => (
                                    <View style={{ marginBottom: 5, width: 480, height: 100,backgroundColor:'white', flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ width: 400, height: 80,  flexDirection: "row", alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 75, height: 75, borderRadius: 37.5 }}
                                                source={{ uri: 'http://116.62.14.0:8666/api/image/' + this.state.data[key].uimage }} />
                                            <View style={{ marginLeft: 20, width: 305, height: 80 }}>
                                                <Text style={{fontSize:18,marginBottom:10}}>{item.uname}</Text>
                                                <Text style={{fontSize:18,color:'gray'}}>{item.uintroduce}</Text>
                                            </View>
                                        </View>
                                    </View>


                                ))
                                : <View></View>
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

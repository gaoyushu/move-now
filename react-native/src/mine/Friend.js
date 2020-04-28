import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView, AsyncStorage,Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'//渐变插件
import { Actions } from 'react-native-router-flux';

const { width ,height} = Dimensions.get('window');

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status: 0,
            token: ""
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(res => {
                this.setState({
                    token: res
                }, () => {
                    //初始化
                    fetch('http://116.62.14.0:8666/chat/friends/'+this.state.token)
                        .then(res => { return res.json() })
                        .then(res => {
                            console.log(res.data)
                            console.log(res.data[0].uimage);
                            this.setState({
                                data: res.data,
                                status: res.status
                            })
                        });
                })
            })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'center' }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={{ width: width, height: 0.082*height, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                >
                    <TouchableOpacity onPress={Actions.pop}>
                        <Image
                            style={{ width: 0.0625*width, height: 0.035*height, marginRight: 0.3125*width, marginLeft: 0.02*width }}
                            source={require('../image/jiantouleft.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, color: 'white' }}>好友列表</Text>
                </LinearGradient>
                <ScrollView>
                    <View style={{ width: width, flexDirection: 'column', alignItems: 'center', }}>
                        {
                            this.state.status !== -1
                                ? this.state.data.map((item, key) => (
                                    <View style={{ marginBottom: 0.006*height, width:width, height: 0.001*height, backgroundColor: 'white', flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ width: 0.833*width, height: 0.094*height, flexDirection: "row", alignItems: 'center' }}>
                                            <TouchableOpacity onPress={()=>Actions.person({uid:item.uid})}>
                                                <Image
                                                    style={{ width: 0.1562*width, height: 0.088*height, borderRadius: 0.088*height }}
                                                    source={{ uri: 'http://116.62.14.0:8666/api/image/' + this.state.data[key].uimage }} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 0.042*width, width: 0.635*width, height: 0.094*height}}>
                                                <Text style={{ fontSize: 13, marginBottom: 0.012*height }}>{item.uname}</Text>
                                                <Text style={{ fontSize: 13, color: 'gray' }}>{item.uintroduce}</Text>
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

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity ,AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'//渐变插件

import ImagePicker from 'react-native-image-picker';
import styles from '../../css/mine/HomeStyle';
import { Actions } from 'react-native-router-flux';
import {Toast} from '@ant-design/react-native';


console.disableYellowBox = true;

const options = {
    title: 'Select Avatar',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            uimage: 0,
            ufans: 0,
            uconcern: 0,
            ufriend: 0,
            imageUrl: "http://116.62.14.0:8666/api/image/",
            token:''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
        .then(res=>{
            this.setState({
                token:res
            },()=>{
                //初始化
                fetch('http://116.62.14.0:8666/mine/mine/'+this.state.token).then(res => res.json())
                .then(res => {
                    this.setState({
                        data: res.dataone,
                        uimage: res.dataone.uimage,
                        uname: res.dataone.uname,
                        uintroduce: res.dataone.uintroduce,
                        ufans: res.dataone.ufans,
                        uconcern: res.dataone.uconcern,
                        ufriend: res.dataone.ufriend,
                        imageUrl: this.state.imageUrl + res.dataone.uimage
                    })
                })
            })
        })
        // fetch('http://116.62.14.0:8666/mine/mine/1587840424595').then(res => res.json())
        //     .then(res => {
        //         this.setState({
        //             data: res.dataone,
        //             uimage: res.dataone.uimage,
        //             uname: res.dataone.uname,
        //             uintroduce: res.dataone.uintroduce,
        //             ufans: res.dataone.ufans,
        //             uconcern: res.dataone.uconcern,
        //             ufriend: res.dataone.ufriend,
        //             imageUrl: this.state.imageUrl + res.dataone.uimage
        //         })
        //     })
    }
    componentDidUpdate() {
        fetch('http://116.62.14.0:8666/mine/mine/'+this.state.token).then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.dataone,
                    uimage: res.dataone.uimage,
                    uname: res.dataone.uname,
                    uintroduce: res.dataone.uintroduce,
                    ufans: res.dataone.ufans,
                    uconcern: res.dataone.uconcern,
                    ufriend: res.dataone.ufriend,
                    imageUrl: this.state.imageUrl
                })
            })

    }

    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source.uri,
                }, () => {
                    fetch('http://116.62.14.0:8666/api/image', {
                        method: 'POST',
                        mode: "cors",
                        body: this.state.imageUrl,
                    }).then(res => res.json())
                        .then(res => {
                          console.log(res.data)
                        }

                        )
                });
            }
        });
    }

    render() {
        const { height,width } = Dimensions.get('window');
        // console.log(this.state.imageUrl)
        return (
            <View style={styles.all}>
                <View style={styles.one}>
                    <View style={{ width: '35%', height: 190 }}>
                        <TouchableOpacity onPress={() => { this.takephoto() }}>
                            <Image
                                style={styles.imgOne}
                                source={{ uri: this.state.imageUrl }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '65%', height: 170 }}>
                        <Text style={styles.onepa}>{this.state.data.uname}</Text>
                        <Text style={styles.onepb}>{this.state.uintroduce}</Text>
                    </View>
                </View>

                <View style={styles.two}>
                    <View style={styles.twoinner}>
                        <Text style={{ fontSize: 23, paddingTop: 10 }}>{this.state.uconcern}</Text>
                        <Text style={{ fontSize: 19 }}>关注</Text>
                    </View>
                    <View style={styles.twoinner}>
                        <Text style={{ fontSize: 23, paddingTop: 10 }}>{this.state.ufans}</Text>
                        <Text style={{ fontSize: 19 }}>粉丝</Text>
                    </View>
                    <TouchableOpacity style={styles.twoinner} onPress={() => Actions.myFriend()}>
                        <Text style={{ fontSize: 23, paddingTop: 10 }}>{this.state.ufriend}</Text>
                        <Text style={{ fontSize: 19 }}>好友</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.three}>
                    <TouchableOpacity onPress={() => Actions.notice()} style={styles.threeinner}>
                        <Image
                            style={styles.imgTwo}
                            source={{ uri: 'http://116.62.14.0:8666/api/image/39' }} />
                        <Text style={{ fontSize: 21 }}>通知</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.mineEdit()} style={styles.threeinner}>
                        <Image
                            style={styles.imgTwo}
                            source={{ uri: 'http://116.62.14.0:8666/api/image/11' }} />
                        <Text style={{ fontSize: 21 }}>编辑信息</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.four}>
                    <TouchableOpacity style={styles.fourinner} onPress={() => Actions.mineSet()}>
                        <Text style={{ fontSize: 22 }}>我的设置</Text>
                    </TouchableOpacity>
                    <View style={styles.fourinner}>
                        <Text style={{ fontSize: 22 }}>用户反馈</Text>
                    </View>
                    <TouchableOpacity style={styles.fourinner} onPress={() => Actions.mineAbout()}>
                        <Text style={{ fontSize: 22 }}>关于我们</Text>
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={styles.login}
                >
                    <TouchableOpacity onPress={()=>{Actions.login(); AsyncStorage.removeItem('token')}}>
                        <Text style={{ fontSize: 23, color: 'white' }}>退出登录</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'//渐变插件

import ImagePicker from 'react-native-image-picker';
import styles from '../../css/HomeStyle';
import { Actions } from 'react-native-router-flux';

const { height ,width} = Dimensions.get('window');

console.disableYellowBox = true;

const options = {
    title: '请选择',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    cancelButtonTitle: "取消",
    takePhotoButtonTitle: "拍照",
    chooseFromLibraryButtonTitle: "选择相册",
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
            token: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(res => {
                this.setState({
                    token: res
                }, () => {
                    //初始化
                    fetch('http://116.62.14.0:8666/mine/mine/' + this.state.token).then(res => res.json())
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
                            },()=>{
                                console.log(this.state.uconcern+"看这里")
                            })
                        })
                })
            })
    }
    componentDidUpdate() {
        AsyncStorage.getItem('token')
            .then(res => {
                this.setState({
                    token: res
                }, () => {
                    //初始化
                    fetch('http://116.62.14.0:8666/mine/mine/' + this.state.token).then(res => res.json())
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
                            }, () => {
                                 console.log(this.state.imageUrl)
                            })
                        })
                })
            })

    }

    takephoto = () => {
        var formData = new FormData();
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log(response)
                const file = { uri: response.uri, type: response.type, name: response.fileName };
                formData.append('image', file);

                this.setState({
                    imageUrl: source.uri,
                }, () => {
                    console.log(this.state.imageUrl)
                    fetch('http://116.62.14.0:8666/api/image', {
                        method: 'POST',
                        mode: "cors",
                        body: formData
                    }).then(res => res.json())
                        .then(res => {
                            //console.log(response)
                            console.log(source.uri)
                            if (res.imageid) {
                                fetch('http://116.62.14.0:8666/mine/mine', {
                                    method: 'POST',
                                    mode: "cors",
                                    body: JSON.stringify({ token: this.state.token, imgid: res.imageid })
                                }).then(res => res.json()).then(res => {
                                    if (res.status === 0) {
                                        // console.log(res.imgid);
                                        Toast.success(res.data, 1);
                                        this.setState({
                                            uimage: res.imgid
                                        })
                                    }
                                    else{
                                        ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                                    }
                                })
                            }
                            else{
                                ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                            }
                        })
                });
            }
        });

    }
    logout=()=>{
        fetch('http://116.62.14.0:8666/user/exit/'+this.state.token)
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res);
                if(res.data.status==-1){
                     ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                }else{
                    ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                    localStorage.removeItem('token')
                }
            });
    }

    render() {
        
        // console.log(height)
        // console.log(this.state.imageUrl)
        return (
            <View style={styles.all}>
                <View style={styles.one}>
                    <View style={{ width: 0.35*width, height: 0.199*height }}>
                        <TouchableOpacity onPress={() => { this.takephoto() }}>
                            <Image
                                style={styles.imgOne}
                                source={{ uri: this.state.imageUrl }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: width*0.65, height: height*0.199 }}>
                        <Text style={styles.onepa}>{this.state.data.uname}</Text>
                        <Text style={styles.onepb}>{this.state.uintroduce}</Text>
                    </View>
                </View>

                <View style={styles.two}>
                    <View style={styles.twoinner}>
                        <Text style={{ fontSize: 18, paddingTop: 0.012*height}}>{this.state.uconcern}</Text>
                        <Text style={{ fontSize: 14 }}>关注</Text>
                    </View>
                    <View style={styles.twoinner}>
                        <Text style={{ fontSize: 18, paddingTop: 0.012*height}}>{this.state.ufans}</Text>
                        <Text style={{ fontSize: 14 }}>粉丝</Text>
                    </View>
                    <TouchableOpacity style={styles.twoinner} onPress={() => Actions.myFriend()}>
                        <Text style={{ fontSize: 18, paddingTop: 0.012*height }}>{this.state.ufriend}</Text>
                        <Text style={{ fontSize: 14 }}>好友</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.three}>
                    <TouchableOpacity onPress={() => Actions.notice()} style={styles.threeinner}>
                        <Image
                            style={styles.imgTwo}
                            source={{ uri: 'http://116.62.14.0:8666/api/image/39' }} />
                        <Text style={{ fontSize: 16 }}>通知</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.mineEdit()} style={styles.threeinner}>
                        <Image
                            style={styles.imgTwo}
                            source={{ uri: 'http://116.62.14.0:8666/api/image/11' }} />
                        <Text style={{ fontSize: 16 }}>编辑信息</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.four}>
                    <TouchableOpacity style={styles.fourinner} onPress={() => Actions.mineSet()}>
                        <Text style={{ fontSize: 17 }}>我的设置</Text>
                    </TouchableOpacity>
                    <View style={styles.fourinner}>
                        <Text style={{ fontSize: 17 }}>用户反馈</Text>
                    </View>
                    <TouchableOpacity style={styles.fourinner} onPress={() => Actions.mineAbout()}>
                        <Text style={{ fontSize: 17 }}>关于我们</Text>
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={styles.login}
                >
                    <TouchableOpacity onPress={() => {Actions.login(); AsyncStorage.removeItem('token'); this.logout()}}>
                        <Text style={{ fontSize: 17, color: 'white' }}>退出登录</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}

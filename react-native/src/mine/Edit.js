import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'//渐变插件
import { Actions } from 'react-native-router-flux';
import styles from '../../css/mine/EditStyle';


export default class Edit extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            uimage: 0,
            uemail: '',
            uname: '',
            uintroduce: '',
            name: '',
            introduce: '',
            email: ''
            // imageUrl: "http://116.62.14.0:8666/api/image/"
        }
    }
    componentDidMount() {
        fetch('http://116.62.14.0:8666/mine/mine/1587900926601').then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.dataone,
                    uname: res.dataone.uname,
                    uimage: res.dataone.uimage,
                    uintroduce: res.dataone.uintroduce,
                    uemail: res.dataone.uemail,
                    name: res.dataone.uname,
                    introduce: res.dataone.uintroduce,
                    email: res.dataone.uemail
                })
            })
    }

    myChange = () => {

        fetch('http://116.62.14.0:8666/mine/information', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: '1587900926601', uname: this.state.name, uintroduce: this.state.introduce, uemail: this.state.email })
        }).then(res => { return res.json() })
            .then(res => {
                console.log(res);
            });
    }
    changeOne = (a) => {
        this.setState({
            name: a
        })
    }
    changeTwo = (b) => {
        this.setState({
            introduce: b
        })
    }
    // changeThree = (c) => {
    //     this.setState({
    //         email: c
    //     })
    // }
    render() {
        const { width } = Dimensions.get('window');
        // console.log(width)
        //console.log(this.state.imageUrl)
        return (
            <View style={styles.big}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={styles.top}
                >
                    <TouchableOpacity onPress={Actions.pop}>
                        <Image
                            style={styles.imga}
                            source={require('../image/jiantouleft.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 25, color: 'white' }}>编辑信息</Text>
                </LinearGradient>
                <View style={styles.bigOne}>
                    <Image style={styles.imgb} source={{ uri: 'http://116.62.14.0:8666/api/image/' + this.state.uimage }} />
                </View>

                <View style={styles.bigTwo}>
                    <View style={styles.bigThree}>
                        <Text style={styles.texta}>昵称</Text>
                        <TextInput
                            style={styles.textb}
                            onChangeText={(Text) => { this.changeOne(Text) }}
                        >{this.state.uname}</TextInput>

                    </View>
                    <View style={styles.bigFour}>
                        <Text style={styles.textc}>签名</Text>
                        <TextInput
                            style={styles.textd}
                            onChangeText={(Text) => { this.changeTwo(Text) }}
                        >{this.state.uintroduce}</TextInput>
                    </View>
                    <View style={styles.bigFive}>
                        <Text style={styles.texte}>邮箱</Text>
                        <TextInput
                            style={styles.textf}
                            // onChangeText={(Text) => { this.changeThree(Text) }}
                        >{this.state.uemail}</TextInput>

                    </View>
                </View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={styles.bottom}
                >
                    <TouchableOpacity onPress={() => this.myChange()}>
                        <Text style={{ fontSize: 23, color: 'white' }}>个性化信息修改</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}


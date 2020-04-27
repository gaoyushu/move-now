import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, TouchableOpacityBase, AsyncStorage } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'//渐变插件
import { Actions } from 'react-native-router-flux'

import styles from '../../css/mine/InformStyle';

import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Entypo';

const SECTIONS = ['评论', '点赞', '申请', '我的申请'];


export default class Infer extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            datac: [],
            dataz: [],
            data: [],
            value1: [],
            value2: [],
            data1: [],
            reply: 0,
            token:''
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
        .then(res=>{
            this.setState({
                token:res
            },()=>{
                //初始化
                fetch('http://116.62.14.0:8666/news/comment/'+this.state.token)
                    .then(res => { return res.json() })
                    .then(res => {
                        if (res.data !== '您没有评论消息') {
                            this.setState({
                                datac: res.data
                            }, () => {
                                var datas = this.state.datac;
                                for (var i = 0; i < datas.length; i++) {
                                    if (datas[i].dtime) {
                                        var time = datas[i].dtime.split(' ')[0];
                                        var time1 = time.split('/');
                                        var year = time1[0];
                                        var month = time1[1];
                                        var day = time1[2];
                                        datas[i].year = year;
                                        datas[i].month = month;
                                        datas[i].day = day;
                                        this.setState({
                                            datac: datas
                                        })
                                    }
                                    else {
                                        datas[i].year = '2019';
                                        datas[i].month = '12';
                                        datas[i].day = '1';
                                        this.setState({
                                            datac: datas
                                        })
                                    }
                                }

                            })
                        }

                    });

                fetch('http://116.62.14.0:8666/news/good/'+this.state.token)
                    .then(res => { return res.json() })
                    .then(res => {
                        if (res.data !== '您没有点赞消息！') {
                            this.setState({
                                dataz: res.data
                            }, () => {
                                var datas = this.state.dataz;
                                for (var i = 0; i < datas.length; i++) {
                                    if (datas[i].dtime) {
                                        var time = datas[i].dtime.split(' ')[0];
                                        var time1 = time.split('/');
                                        var year = time1[0];
                                        var month = time1[1];
                                        var day = time1[2];
                                        datas[i].year = year;
                                        datas[i].month = month;
                                        datas[i].day = day;
                                        this.setState({
                                            dataz: datas
                                        })
                                    }
                                    else {
                                        datas[i].year = '2019';
                                        datas[i].month = '12';
                                        datas[i].day = '1';
                                        this.setState({
                                            dataz: datas
                                        })
                                    }
                                }

                            })
                        }
                    });

                fetch('http://116.62.14.0:8666/news/exchange/'+this.state.token)
                    .then(res => { return res.json() })
                    .then(res => {
                        var arr = [];
                        var brr = [];
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].astatus == '0') {
                                arr[i] = '接受';
                                brr[i] = '拒绝';

                            }
                            else if (res.data[i].astatus == '1') {
                                arr[i] = '已接受';
                                brr[i] = '拒绝';
                            }
                            else {
                                arr[i] = '接受';
                                brr[i] = '已拒绝'
                            } 
                        }
                        this.setState({
                            data: res.data,
                            value1: arr,
                            value2: brr

                        })
                    });
                fetch('http://116.62.14.0:8666/news/myreq/'+this.state.token)
                    .then(res => { return res.json() })
                    .then(res => {
                        this.setState({
                            data1: res.data
                        })
                    });

                    })
                })
        // fetch('http://116.62.14.0:8666/news/comment/1587900926601')
        //     .then(res => { return res.json() })
        //     .then(res => {
        //         if (res.data !== '您没有评论消息') {
        //             this.setState({
        //                 datac: res.data
        //             }, () => {
        //                 var datas = this.state.datac;
        //                 for (var i = 0; i < datas.length; i++) {
        //                     if (datas[i].dtime) {
        //                         var time = datas[i].dtime.split(' ')[0];
        //                         var time1 = time.split('/');
        //                         var year = time1[0];
        //                         var month = time1[1];
        //                         var day = time1[2];
        //                         datas[i].year = year;
        //                         datas[i].month = month;
        //                         datas[i].day = day;
        //                         this.setState({
        //                             datac: datas
        //                         })
        //                     }
        //                     else {
        //                         datas[i].year = '2019';
        //                         datas[i].month = '12';
        //                         datas[i].day = '1';
        //                         this.setState({
        //                             datac: datas
        //                         })
        //                     }
        //                 }

        //             })
        //         }

        //     });

        // fetch('http://116.62.14.0:8666/news/good/1587900926601')
        //     .then(res => { return res.json() })
        //     .then(res => {
        //         if (res.data !== '您没有点赞消息！') {
        //             this.setState({
        //                 dataz: res.data
        //             }, () => {
        //                 var datas = this.state.dataz;
        //                 for (var i = 0; i < datas.length; i++) {
        //                     if (datas[i].dtime) {
        //                         var time = datas[i].dtime.split(' ')[0];
        //                         var time1 = time.split('/');
        //                         var year = time1[0];
        //                         var month = time1[1];
        //                         var day = time1[2];
        //                         datas[i].year = year;
        //                         datas[i].month = month;
        //                         datas[i].day = day;
        //                         this.setState({
        //                             dataz: datas
        //                         })
        //                     }
        //                     else {
        //                         datas[i].year = '2019';
        //                         datas[i].month = '12';
        //                         datas[i].day = '1';
        //                         this.setState({
        //                             dataz: datas
        //                         })
        //                     }
        //                 }

        //             })
        //         }
        //     });

        // fetch('http://116.62.14.0:8666/news/exchange/1587900926601')
        //     .then(res => { return res.json() })
        //     .then(res => {
        //         var arr = [];
        //         var brr = [];
        //         for (var i = 0; i < res.data.length; i++) {
        //             if (res.data[i].astatus == '0') {
        //                 arr[i] = '接受';
        //                 brr[i] = '拒绝';

        //             }
        //             else if (res.data[i].astatus == '1') {
        //                 arr[i] = '已接受';
        //                 brr[i] = '拒绝';
        //             }
        //             else {
        //                 arr[i] = '接受';
        //                 brr[i] = '已拒绝'
        //             } 
        //         }
        //         this.setState({
        //             data: res.data,
        //             value1: arr,
        //             value2: brr

        //         })
        //     });
        // fetch('http://116.62.14.0:8666/news/myreq/1587900926601')
        //     .then(res => { return res.json() })
        //     .then(res => {
        //         this.setState({
        //             data1: res.data
        //         })
        //     });
    }

    click1 = (key) => {
        console.log(this.state.data[key].aid);
        if (this.state.data[key].astatus == '0') {
            console.log(this.state.data[key].aid);
            var arr = [];
            for (var i = 0; i < this.state.data.length; i++) {
                arr[i] = this.state.value1[i]
            }
            arr[key] = '已接受'
            this.setState({
                reply: 1,
                value1: arr
            }, () => {
                console.log(this.state.reply)
                console.log(this.state.data[key].aid);

                fetch('http://116.62.14.0:8666/news/replyreq', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ aid: this.state.data[key].aid, reply: this.state.reply })
                })
                    .then(res => { return res.json() })
                    .then(res => {
                        console.log(res);
                        Toast.success(res.data, 1)
                    });

            })
        }
    }
    click2 = (key) => {
        if (this.state.data[key].astatus == '0') {
            console.log(this.state.data[key].aid);
            var arr = [];
            for (var i = 0; i < this.state.data.length; i++) {
                arr[i] = this.state.value2[i]
            }
            arr[key] = '已拒绝'
            this.setState({
                reply: -1,
                value2: arr
            }, () => {
                console.log(this.state.reply)
                console.log(this.state.data[key].aid);

                fetch('http://116.62.14.0:8666/news/replyreq', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ aid: this.state.data[key].aid, reply: this.state.reply })
                })
                    .then(res => { return res.json() })
                    .then(res => {
                        console.log(res + 'aa');
                        Toast.success(res.data, 1)
                    });

            })
        }
    }

    _renderSectionTitle = section => {
        return (
            <View style={{ width: 480, height: 0, backgroundColor: 'red' }}>
            </View>
        );
    }

    _renderHeader = (content, index, isActive, section) => {
        // console.log(isActive)
        // console.log(content)
        return (
            <View
                style={styles.header}
            >
                <Text style={{ fontSize: 23 }}>{content}</Text>
                <Icon name={isActive ? 'chevron-thin-up' : 'chevron-thin-down'} size={25} color={'gray'} />
            </View>
        );
    };

    _renderContent = (content, index, isActive, section) => {
        return (
            <View>
                {
                    isActive ? content == '评论' ? this.state.datac !== '您没有评论消息！' ? this.state.datac.map((item, key) => (
                        <View style={styles.bigOne}>
                            <View style={styles.bigOnea}>
                                <View style={styles.bigOneb}>
                                    <View style={styles.bigOnec}>
                                        <Image source={{ uri: "http://116.62.14.0:8666/api/image/5" }} style={{ width: 35, height: 35 }} />
                                    </View>
                                    <Text style={styles.textOne}>{item.uname}</Text>
                                    <Text style={styles.textTwo}>评论于 {item.dtime}</Text>
                                </View>
                                <Text style={styles.textThree}>{item.comcontent}</Text>
                                <View style={styles.bigOned}>
                                    <View style={styles.bigOnee}>
                                        <Text style={{ fontSize: 35, color: '#8BCCA1' }}>{this.state.datac[key].day}</Text>
                                        <Text style={{ fontSize: 20, color: '#8BCCA1' }}>{this.state.datac[key].year}/{this.state.datac[key].month}</Text>
                                    </View>
                                    <View style={styles.bigOnef}>
                                        <Text style={styles.textFour}>{item.dtitle}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )) : <View></View>
                        : content == '点赞' ? this.state.datac !== '您没有点赞消息！' ? this.state.dataz.map((item, key) => (
                            <View style={styles.bigTwo}>
                                <View style={styles.bigTwoa}>
                                    <View style={styles.bigTwob}>
                                        <View style={styles.bigTwoc}>
                                            <Image source={{ uri: "http://116.62.14.0:8666/api/image/5" }} style={{ width: 35, height: 35 }} />
                                        </View>
                                        <Text style={styles.textFive}>{item.uname}</Text>
                                        <Text style={styles.textSix}>点赞了你</Text>
                                    </View>
                                    <View style={styles.bigTwod}>
                                        <View style={styles.bigTwoe}>
                                            <Text style={{ fontSize: 35, color: '#8BCCA1' }}>{this.state.dataz[key].day}</Text>
                                            <Text style={{ fontSize: 20, color: '#8BCCA1' }}>{this.state.dataz[key].year}/{this.state.dataz[key].month}</Text>
                                        </View>
                                        <View style={styles.bigTwof}>
                                            <Text style={styles.textSeven}>{item.dtitle}</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        )) : <View></View>
                            : content == '申请' ? this.state.data !== '您没有申请！' ? this.state.data.map((item, key) => (
                                <View style={styles.bigThree}>
                                    <View style={styles.bigThreea}>
                                        <Text style={{ fontSize: 20 }}>有一位用户向您的一句话<Text style={styles.textEight}>{item.shortdes}</Text>发送了交换日记的申请，申请理由如下：</Text>
                                        <View style={styles.bigThreeb}>
                                            <Text style={{ fontSize: 19 }}> {item.acontent}</Text>
                                        </View>
                                        <View style={styles.bigThreec}>
                                            <TouchableOpacity
                                                style={styles.bigThreed}
                                                onPress={() => { this.click1(key) }}
                                            >
                                                <Text style={{ fontSize: 19, color: 'white' }}>{this.state.value1[key]}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.bigThreee}
                                                onPress={() => { this.click2(key) }}
                                            >
                                                <Text style={{ fontSize: 19, color: 'white' }}>{this.state.value2[key]}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            )) : <View></View>
                                : content == '我的申请' ? this.state.data1 !== '暂无申请' ? this.state.data1.map((item, key) => (
                                    <View style={styles.bigFour}>
                                        <View style={styles.bigFoura}>
                                            <Text style={{ fontSize: 19 }}>您的交换日记申请已被<Text style={styles.textNine}> 接受</Text></Text>
                                            <View style={styles.bigFourb}>
                                                <Text style={{ fontSize: 19 }}>{item.shortdes}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )) : <View></View> : null
                        : null
                }

            </View>
        );
    };


    _updateSections = activeSections => {
        this.setState({ activeSections });
    };


    render() {
        return (
            <View style={styles.top}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#8bcca1', '#57a099']}
                    style={styles.topa}
                >
                    <TouchableOpacity onPress={Actions.pop}>
                        <Image
                            style={styles.imgOne}
                            source={require('../image/jiantouleft.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 25, color: 'white' }}>消息信箱</Text>
                </LinearGradient>
                <ScrollView style={{ marginBottom: 10 }}>
                    <Accordion
                        sections={SECTIONS}
                        onChange={this._updateSections}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderSectionTitle={this._renderSectionTitle}
                        renderContent={this._renderContent}
                    >
                    </Accordion>
                </ScrollView>
            </View>
        )
    }
}
import React, {Component} from 'react';
import {View, Text, ScrollView, ToastAndroid, AsyncStorage} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import CheckBox from 'react-native-check-box';
import {myFetch} from '../utils';
import {BVLinearGradient} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import choice from '../../css/exchange/Choice';
import Button from 'react-native-button';
const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/exchange/'; // 请求路径
const token = 1586768446984; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      data: [],
      shortdes_id:props.shortdes_id,
      checked:[],
      id:-1,
      token:''
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(res=>{
      this.setState({
        token:res
      },()=>{
        myFetch.get('/changed/choose/'+this.state.token)
        .then(res=>{
          if (res.data !== '您没有可选日记') {
            var ss = res.data;
            for (var i = 0; i < ss.length; i++) {
                var time = ss[i].dtime;
                var time1 = time.split(' ')[0];
                var time2 = time1.split('/');
                var year = time2[2];
                var month = time2[0];
                var day = time2[1];
                ss[i].year = year;
                ss[i].month = month;
                ss[i].day = day;
            }
            var carr = [];
            for (var i = 0; i < res.data.length; i++) {
                carr[i] = false;
                this.setState({
                    checked: carr
                })
            }
            this.setState({
                data: ss
            })
          } else {
              ToastAndroid.showWithGravity(res.data,500,ToastAndroid.CENTER)
              setTimeout(()=>{
                Actions.pop()
              },2000);
          }
        })
      })
    })
    // myFetch.get('/changed/choose/1586768446984')
    // .then(res=>{
    //   if (res.data !== '您没有可选日记') {
    //     var ss = res.data;
    //     for (var i = 0; i < ss.length; i++) {
    //         var time = ss[i].dtime;
    //         var time1 = time.split(' ')[0];
    //         var time2 = time1.split('/');
    //         var year = time2[2];
    //         var month = time2[0];
    //         var day = time2[1];
    //         ss[i].year = year;
    //         ss[i].month = month;
    //         ss[i].day = day;
    //     }
    //     var carr = [];
    //     for (var i = 0; i < res.data.length; i++) {
    //         carr[i] = false;
    //         this.setState({
    //             checked: carr
    //         })
    //     }
    //     this.setState({
    //         data: ss
    //     })
    //   } else {
    //       ToastAndroid.showWithGravity(res.data,500,ToastAndroid.CENTER)
    //       setTimeout(()=>{
    //         Actions.pop()
    //       },2000);
    //   }
    // })
  }
  pops=()=>{
    Actions.pop(this.props.refresh());
  }
  check=(idx)=>{
    var carr=this.state.checked;
    for(var i=0;i<carr.length;i++){
      carr[i]=false;
    }
    for(var i=0;i<carr.length;i++){
      if(i==idx){
        carr[i]=true;
      }
    }
    this.setState({
      checked:carr
    })
  }
  post=()=>{
    var temp=-1;
    this.state.checked.map((item,idx)=>{
      if(item){
        temp=idx;
        this.setState({
          id:this.state.data[idx].did
        },()=>{
          myFetch.post('/changed/choose',{token:this.state.token, oneid: `${this.state.shortdes_id}`, diaryid: `${this.state.id}`})
          .then(res=>{
            if(res.status===0){
              ToastAndroid.showWithGravity(res.data,500,ToastAndroid.CENTER);
              setTimeout(()=>{
                Actions.pop(this.props.refresh());
              }
              ,1000);
            }
          })
        })
      }

    })
    if(temp==-1){
      ToastAndroid.showWithGravity('请选择日记！',500,ToastAndroid.CENTER)
    }
  }
  render() {
    return (
      <View>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 1}}//默认竖向
          colors={['#8bcca1' , '#57a099']}
          style={choice.header}>
            <Icon onPress={()=>{this.pops()}} name="chevron-left" size={40}  color='white' style={choice.back} />
            <Text style={choice.headertext}>选择日记</Text>
        </LinearGradient>
        <ScrollView>
          {
            this.state.data.map((item,idx)=>(
              <View style={choice.contents}>
                <CheckBox isChecked={this.state.checked[idx]} style={choice.checked} onClick={()=>this.check(idx)} />
                <View style={choice.times}>
                  <Text style={choice.texttop}>{item.day}</Text>
                  <Text style={choice.textbottom}>{item.year}/{item.month}</Text>
                </View>
                <View style={choice.titles}>
                  <Text style={choice.texttitle}>{item.dtitle}</Text>
                </View>
              </View>
            ))
          }
          <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 1}}//默认竖向
          colors={['#8bcca1' , '#57a099']}
          style={choice.sures}>
            <Button style={choice.sure} onPress={()=>this.post()}>确定</Button>
        </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

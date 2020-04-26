import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,AsyncStorage,ToastAndroid,ImageBackground,BVLinearGradient} from 'react-native';
// import { Icon } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
// import {myFetch} from '../utils'
import style from '../../css/start/login';
import LinearGradient from 'react-native-linear-gradient';
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            mail:'',
            pwd:'',
            token:'',
            // isloading:false
        }
    }
    componentDidMount(){
        console.disableYellowBox = true;
    }
    //获取输入框的值
    userhandle = (text)=>{
        this.setState({mail:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    //点击登录
    login = ()=>{
        // this.setState({isloading:true})
        // myFetch.post('/login',{
        //     username:this.state.username,
        //     pwd:this.state.pwd
        // }).then(res=>{
        //     AsyncStorage.setItem('user',JSON.stringify(res.data))
        //         .then(()=>{
        //             if(res.data.token==='2'){
        //                 ToastAndroid.showWithGravity(res.data.tips,10,ToastAndroid.CENTER);
        //             }else if(res.data.token==='1'){
        //                 ToastAndroid.showWithGravity('正在登陆',10,ToastAndroid.CENTER);
        //                 // this.setState({isloading:false})
        //                 Actions.homePage();
        //             }
                    
        //         })
        //     })

            // e.preventDefault()
        if(this.state.mail===''){
            ToastAndroid.showWithGravity('请输入邮箱！',10,ToastAndroid.CENTER);
            // Toast.fail('请输入邮箱！')
        }else{
            if(this.state.pwd===''){
            ToastAndroid.showWithGravity('请输入密码！',10,ToastAndroid.CENTER);
                // Toast.fail('请输入密码！')
            }else{
                fetch('http://116.62.14.0:8666/user/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mail:`${this.state.mail}`,password:`${this.state.pwd}`})})
                    .then(res =>{ return res.json() })
                    .then(res =>{ 
                        console.log(res) 
                        if(res.status===-1){
                            ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                            // Toast.fail(`${res.data}`,1)
                        }
                        if(res.status===0){
                            // Pubsub.publish('token', res.token)
                            this.setState({
                                token:res.token
                            },()=>{
                                ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                                // Toast.success(`${res.data}`,1)
                                setTimeout(() => {
                                    console.log(this.state.token)
                                    AsyncStorage.setItem('token',JSON.stringify(this.state.token));
                                    // localStorage.setItem('token',this.state.token); 
                                        Actions.diaryPage()
                                        // this.props.history.push('/square/hot');
                                    
                                   
                                }, 1000);
                            })
                            
                            
                        }
                    });

            }
        }
        
    } 
  render() {
    return (
        <View>
            <View style={style.head}>
                <LinearGradient
                    // start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#8bcca1' , '#57a099']}
                    style={{height: 50, flex: 1,flexDirection:'row'}}>
                    
                    <View style={{width:'100%'}}>
                        <Text style={style.word}>登录</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={style.logo}>
                <Image source={{uri:'http://116.62.14.0:8666/api/image/4'}} style={{width:'100%',height:'100%'}} resizeMode='contain' />                  
                    {/* <img src='http://116.62.14.0:8666/api/image/4' alt='朝花夕拾' style={{width:'100%',height:'auto'}} /> */}
            </View>

            <View
            style={{
                width: '66%',
                height:40,
                marginLeft: '17%',
                borderColor: '#8bcca1',
                borderWidth: 3,
                borderRadius:10,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:20,
                // backgroundColor:'red',
                // justifyContent:'center',
                // lineHeight:40
            }}>
            <View style={{width:'20%'}}>
                    <Icon name="email" color="rgb(139, 204, 161)" size={27} style={{marginLeft:10}}/>
                </View>
                <View style={{width:'60%',alignItems:'center',justifyContent:'center'}}>
                    <TextInput placeholder="邮箱" 
                        onChangeText={this.userhandle}
                        // secureTextEntry={true}
                        style={style.textInput}
                    />
                </View>
          </View>
          <View
            style={{
              width: '66%',
              height:40,
              marginLeft: '17%',
              borderColor: '#8bcca1',
              borderWidth: 3,
              borderRadius:10,
              flexDirection: 'row',
              alignItems: 'center',
              
            //   textAlignVertical:'center'
            //   paddingLeft: 20,
            }}>
                <View style={{width:'20%'}}>
                    <Icon name="eye" color="rgb(139, 204, 161)" size={27} style={{marginLeft:10}}/>
                </View>
                <View style={{width:'60%',alignItems:'center',justifyContent:'center'}}>
                    <TextInput placeholder="密码" 
                        onChangeText={this.pwdhandle}
                        secureTextEntry={true}
                        style={style.textInput}
                    />
                </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
                style={{
                    width: '66%',
                    height: 40,
                    // backgroundColor: '',
                    marginTop: 20,
                    alignItems: 'center',
                    // justifyContent: 'center',
                    marginLeft:'17%',
                    // marginRight:'10%',
                    borderRadius:10
                }}
                onPress={this.login}>
                    <LinearGradient
                    // start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#8bcca1' , '#57a099']}
                    style={{width:'100%',height: 40, flex: 1,borderRadius:10,alignItems: 'center',justifyContent:'center'}}>
                <Text style={{fontSize:17,color:'#fff',lineHeight:50}}>登录</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            </View>
            <TouchableOpacity  onPress={()=>Actions.register()}>
                <View style={style.bottom}>
                    <Text style={style.word1}>还没有账号，点击注册</Text>
                    <Icon name="gesture-tap-hold" color="#000" size={27} style={{marginLeft:10}}/>
                </View>
            </TouchableOpacity>
        
      </View>
    );
  }
}
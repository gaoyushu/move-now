import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,AsyncStorage,ToastAndroid,ImageBackground,BVLinearGradient} from 'react-native';
// import { Icon } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
// import {myFetch} from '../utils'
import style from '../../css/start/register';
import LinearGradient from 'react-native-linear-gradient';
// import RadioModal from 'react-native-radio-master';
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            mail:'',
            pwd:'',
            repwd:'',
            code:'',
            token:'',
            // item:datas[3].content,
		    initItem:'同意用户协议',
            initId:'',
            num:0
            // isloading:false
        }
    }
    componentDidMount(){
        console.disableYellowBox = true;
    }
    userhandle = (text)=>{
        this.setState({mail:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    codehandle = (text)=>{
        this.setState({code:text})
    }
    repwdhandle = (text)=>{
        this.setState({repwd:text})
    }
    getCode=(e)=>{
        // e.preventDefault()
        fetch('http://116.62.14.0:8666/user/sendcode', {
            method: 'POST',
            mode:"cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail:`${this.state.mail}`})}).then(res =>{ return res.json() })
            .then(res =>{
                 console.log(res) 
                 if(res.status===-1){
                    //  Toast.fail(`${res.data}`,1);
                     ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                 }
                 if(res.status===0){
                    //  Toast.success(`${res.data}`,1)
                     ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                 }
                });

    }

    toRegister=()=>{
        // e.preventDefault()
        // if(this.state.checked===true){
            if(this.state.mail===''){
                ToastAndroid.showWithGravity('请先填写邮箱！',10,ToastAndroid.CENTER);
                // Toast.fail('请先填写邮箱！',1)
            }
            else{
                if(this.state.code==''){
                    ToastAndroid.showWithGravity('请先填写验证码！',10,ToastAndroid.CENTER);
                    // Toast.fail('请先填写验证码！',1)
                }else{
                    if(this.state.pwd===''){
                        ToastAndroid.showWithGravity('请先填写密码！',10,ToastAndroid.CENTER);
                        // Toast.fail('请先填写密码！',1)
                    }else{
                        if(this.state.repwd===''){
                            ToastAndroid.showWithGravity('请再次输入密码！',10,ToastAndroid.CENTER);
                            // Toast.fail('请再次输入密码！',1);
                        }else{
                            if(this.state.num%2!=0){
                                fetch('http://116.62.14.0:8666/user/register', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ mail:`${this.state.mail}`,code:`${this.state.code}`, password:`${this.state.pwd}`,repassword:`${this.state.repwd}`})})
                                .then(res =>{ return res.json() })
                                .then(res=>{ 
                                    console.log(res) 
                                    if(res.status===-1){
                                        ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                                        // Toast.fail(`${res.data}`,1);
                                    }
                                    if(res.status===0){
                                        ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                                        // Toast.success(`${res.data}`,1)
                                        setTimeout(() => {
                                            
                                            Actions.login()
                                        }, 1000);                
                                    }
                                });
                            }else{
                                ToastAndroid.showWithGravity('请先阅读用户协议',10,ToastAndroid.CENTER);
                                // Toast.fail('请先阅读用户协议',1);
                            }
                        }
                    }
                }
            }
            // }else{
            //     Toast.fail('请先阅读用户协议',1);
            // }

    }


    login = ()=>{
       
        if(this.state.mail===''){
            ToastAndroid.showWithGravity('请输入邮箱！',10,ToastAndroid.CENTER);
            // Toast.fail('请输入邮箱！')
        }else{
            if(this.state.password===''){
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
                                        Actions.diary()
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
                        <Text style={style.word}>注册</Text>
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
                marginBottom:15,
                // backgroundColor:'red',
                // justifyContent:'center',
                // lineHeight:40
            }}>
            <View style={{width:'20%'}}>
                    <Icon name="email" color="rgb(139, 204, 161)" size={27} style={{marginLeft:5}}/>
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
              marginBottom:15,
              borderRightWidth:0
              
            //   textAlignVertical:'center'
            //   paddingLeft: 20,
            
            }}>
                <View style={{width:'30%'}}>
                    <Icon name="shield-check" color="rgb(139, 204, 161)" size={27} style={{marginLeft:5}}/>
                   
                    
                </View>
                <View style={{width:'40%',alignItems:'center',justifyContent:'center'}}>
                    <TextInput placeholder="验证码" 
                        onChangeText={this.codehandle}
                        secureTextEntry={true}
                        style={style.textInput}
                    />
                </View>
                <TouchableOpacity 
                style={{
                    width: '30%',
                    height: 40,
                    borderRadius:10
                }}
                onPress={this.getCode}
                >
                    <LinearGradient
                    // start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#8bcca1' , '#57a099']}
                    style={{width:'100%',height: 40, flex: 1,borderTopRightRadius:10,borderBottomRightRadius:10,alignItems: 'center',justifyContent:'center'}}>
                <Text style={{fontSize:13,color:'#fff',lineHeight:40}}>获取验证码</Text>
                </LinearGradient>
            </TouchableOpacity>
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
              marginBottom:15
              
            //   textAlignVertical:'center'
            //   paddingLeft: 20,
            }}>
                <View style={{width:'15%'}}>
                    <Icon name="eye" color="rgb(139, 204, 161)" size={27} style={{marginLeft:5}}/>
                </View>
                <View style={{width:'70%',alignItems:'center',justifyContent:'center'}}>
                    <TextInput placeholder="输入6-20位英文数字密码" 
                        onChangeText={this.pwdhandle}
                        secureTextEntry={true}
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
                    <Icon name="eye" color="rgb(139, 204, 161)" size={27} style={{marginLeft:5}}/>
                </View>
                <View style={{width:'60%',alignItems:'center',justifyContent:'center'}}>
                    <TextInput placeholder="确认密码" 
                        onChangeText={this.repwdhandle}
                        secureTextEntry={true}
                        style={style.textInput}
                    />
                </View>
          </View>
            {/* <View style={style.check}>
          <RadioModal
                
                onValueChange={(id,item) => {
                    this.setState({num:this.state.num+1},()=>{
                        // console.log(this.state.num)
                        if(this.state.num%2===0){
                            console.log('3333')
                            Actions.register()
                            this.setState({initId:'1',initItem:item})
                        }else{
                            this.setState({initId: id,initItem:item})
                        }
                        
                    })
                    console.log(this.state.initId)}
                    
                }
                selectedValue={''}
                style={{ 
                    // flexDirection:'row',
                    //   flexWrap:'wrap',
                    //   alignItems:'flex-start',
                    //   flex:1,
                    //   paddingLeft:0,
                      marginLeft:10,
                      }} 
                >
                  <Text value="0">同意用户协议</Text>
                  <Text value="1">同意</Text>
                 
               </RadioModal>
            </View> */}
            
            <View style={style.check} >
            <TouchableOpacity  onPress={()=>{
                this.setState({
                    num:this.state.num+1
                })
            }}>
                <View style={style.checkbox}>
                    <View id='boxbox' style={{
                        width:5,
                        height:5,
                        backgroundColor:'#000',
                        borderRadius:50,
                        borderWidth:1.5,
                        borderColor:'#000',
                        marginLeft:2,
                        display:
                        this.state.num%2===0?'none':'flex'}}>
                    </View>
                </View>
                </TouchableOpacity>
                <Text>同意用户协议</Text>
                
            </View>
           

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
                style={{
                    width: '66%',
                    height: 40,
                    // backgroundColor: '',
                    // marginTop: 20,
                    alignItems: 'center',
                    // justifyContent: 'center',
                    marginLeft:'17%',
                    // marginRight:'10%',
                    borderRadius:10
                }}
                onPress={this.toRegister}>
                    <LinearGradient
                    // start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#8bcca1' , '#57a099']}
                    style={{width:'100%',height: 40, flex: 1,borderRadius:10,alignItems: 'center',justifyContent:'center'}}>
                <Text style={{fontSize:17,color:'#fff',lineHeight:50}}>注册</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            </View>
            <TouchableOpacity  onPress={()=>Actions.login()}>
                <View style={style.bottom}>
                    <Text style={style.word1}>已经注册，点击登录</Text>
                    <Icon name="gesture-tap-hold" color="#000" size={27} style={{marginLeft:10}}/>
                </View>
            </TouchableOpacity>
      </View>
    );
  }
}
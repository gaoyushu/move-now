
import React ,{Component}from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,AsyncStorage, Button,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import style from '../../css/diary/comment'
import {myFetch} from '../utils'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

export default class comment extends Component{
    constructor(){
        super();
        let date=moment().format('YYYY / MM / DD');
        this.state={
            comText:''
        }
    }
    // componentDidMount(){
    //     console.disableYellowBox = true;
    //     // console.log(this.state.page)
    //     AsyncStorage.getItem('token').then((result)=>{
    //     fetch('http://116.62.14.0:8666/diary/detail/'+this.props.did+'/'+result)
    //     .then(res =>{ return res.json() })
    //     .then(res =>{
    //         console.log(res); 
    //             var a=res.data;
    //             this.setState({
    //                 data:a,
    //                 comments:a.comments,
    //                 isLoading:true
    
    //             });
    //         })
    //     })
    // }
    commentText = (text)=>{
        this.setState({comText:text})
    }
    supportComment=()=>{
        if(this.state.comText===''){
            ToastAndroid.showWithGravity('评论内容不能为空！',10,ToastAndroid.CENTER);
        }else{
            console.log(this.props.did)
        AsyncStorage.getItem('token').then((result)=>{
        fetch('http://116.62.14.0:8666/square/comments', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
            },
            body: JSON.stringify({token:result, did:`${this.props.did}`,comcontent:`${this.state.comText}`, comstatus:"true"})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res); 
                if(res.data==='ok'){
                    ToastAndroid.showWithGravity('评论日记成功！',10,ToastAndroid.CENTER);
                    // Toast.success('评论日记成功！',1);
                    setTimeout(() => {
                        //返回刷新日记
                        if(this.props.page==='own'){
                            Actions.details({'did':this.props.did,'page':'own'});
                        }
                        if(this.props.page==='square'){
                            Actions.details({'did':this.props.did,'page':'square','pageItem':this.props.pageItem})
                        }
                        
                    }, 1000);
                }
            });
        })
    }
    }
    render(){
       
        return(
            <View>
                    <View style={style.head}>
                {/* <LinearGradient
                    // start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#8bcca1' , '#57a099']}
                    style={{height: 50, flex: 1,flexDirection:'row'}}> */}
                    <TouchableOpacity style={style.headLeft} 
                         onPress={()=>Actions.pop()}
                         >
                    <View >
                        <Text style={style.headLeftT}>取消</Text>
                    </View>
                    </TouchableOpacity>
                        <View style={style.headMiddle}>
                            <Text style={style.headWord}>发评论</Text>
                        </View>
                    <View style={style.headRight}>
                    <TouchableOpacity  
                         onPress={this.supportComment}
                         >
                        <View  style={style.but}>
                            <Text style={style.butT}>发送</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    {/* </LinearGradient> */}
                </View>
                <View style={style.text}>
                                    <TextInput 
                                    autoFocus={true}
                                    multiline={true}
                                    style={style.input}
                                    minHeight={200} 
                                    placeholder='写评论~'
                                    textAlignVertical={'top'}
                                    onChangeText={this.commentText}
                                    />
                                </View>
                
            </View>
        )
    }
}

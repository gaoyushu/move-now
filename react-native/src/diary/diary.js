
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
  ToastAndroid,AsyncStorage
} from 'react-native';
import moment from 'moment'
import style from '../../css/diary/diary'
import {myFetch} from '../utils'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

export default class diary extends Component{
    constructor(){
        super();
        let date=moment().format('YYYY / MM / DD');
        this.state={
            opacity:2,
            display:'none',
            data:[],
            selectedTab: "/diary",
            metto:{},
            mstatus:0,
            list:[],
            day:'',
            month:'',
            year:'',
            privateImg:'http://116.62.14.0:8666/api/image/40',
            publicImg:'http://116.62.14.0:8666/api/image/41',
            // zIndex:1000,
            date,
            token:''

        }
    }
    componentDidMount(){
        console.disableYellowBox = true;
    //     myFetch.get('diary/metto')
    //     .then(res =>{ 
    //         console.log(res)
    //         this.setState({
    //             metto:res.data,
    //             mstatus:res.status

    //         },()=>{
    //             if(this.state.mstatus===-1){
    //                 var s=this.state.metto;
    //                 s.mtext='一日一文获取失败！';
    //                 this.setState({
    //                     metto:s
    //                 })
    //             }
    //         })
    //      });

    //获取每日一文
        fetch('http://116.62.14.0:8666/diary/metto').then(res =>{ return res.json() })
        .then(res =>{ 
            console.log(res)
            this.setState({
                metto:res.data,
                mstatus:res.status

            },()=>{
                if(this.state.mstatus===-1){
                    var s=this.state.metto;
                    s.mtext='一日一文获取失败！';
                    this.setState({
                        metto:s
                    })
                }
            })
         });
        //获取日记列表
            AsyncStorage.getItem('token').then((result)=>{
         fetch('http://116.62.14.0:8666/diary/list/'+ result).then(res =>{ return res.json() })
        // fetch('http://116.62.14.0:8666/diary/list/1586762147741').then(res =>{ return res.json() })
         .then(res =>{ 
             console.log(res.data);
             if(res.data!=='获取日记列表失败！'){
             var ss=res.data;
             for(var i=0;i<ss.length;i++){
               var time =ss[i].dtime;
               var time1=time.split(' ')[0];
               var time2=time1.split('/');
               var year=time2[2];
               var month=time2[0];
               var day=time2[1];
               ss[i].time=time1;
               if(month<10){
                ss[i].time1=year+'-'+'0'+month+'-'+day;
              }else{
                ss[i].time1=year+'-'+month+'-'+day;
              }
            //    ss[i].time1=year+'-'+month+'-'+day;
            //    ss[i].month=month;
            //    ss[i].day=day;
             }
            this.setState({
                list:ss
            })
        }else{
            ToastAndroid.showWithGravity(
                '开始你的日记之旅吧',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              )
            // Toast.info('开始你的日记之旅吧',1)
        }
          });
        });
    }
    //改变日记状态
    setChange=(idx)=>{
        console.log('1111111')
        console.log(this.state.list[idx].did)
        fetch('http://116.62.14.0:8666/diary/type/'+this.state.list[idx].did, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ token:localStorage.getItem('token'), diaryid:`${this.state.list[idx].did}`})})
            body: JSON.stringify({ token:'1586762147741', diaryid:`${this.state.list[idx].did}`})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res);
                if(res.status===0){
                    // Toast.success(res.data,1)
                    ToastAndroid.showWithGravity(
                        res.data,
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                      )
                    
                }
             });

        if(this.state.list[idx].dtype==='private'){
            let arrs=this.state.list;
            arrs[idx].dtype='public';
            this.setState({
                list:arrs
            })
        }
        else{
            let arrs=this.state.list;
            arrs[idx].dtype='private';
            this.setState({
                list:arrs
            })
        }
      }
    render(){
        var weekday=new Array(7);
        weekday[0]="星期日";
        weekday[1]="星期一";
        weekday[2]="星期二";
        weekday[3]="星期三";
        weekday[4]="星期四";
        weekday[5]="星期五";
        weekday[6]="星期六";
        
        
        return(
            <View>
      
                    <View style={style.top}>
                        <Text style={style.date}>{this.state.date}</Text>
                        <View style={style.word}>
                            <Text style={style.mtext}>{this.state.metto.mtext}</Text>
                            <Text style={style.author}>{this.state.metto.author}</Text>
                        </View>
                    </View>
                    <ScrollView>
                    <View >
                    {this.state.list.map((item,idx)=>(
                        <View style={style.diary}>
                            <View style={style.left}>
                            <TouchableOpacity onPress={()=>Actions.details({'did':item.did,'page':'own'})}>
                                <View style={style.leftTop}>
                                    <Text style={style.leftTopText0}>{item.time}</Text>
                                    <Text style={style.leftTopText}>{weekday[new Date(item.time1).getDay()]}</Text>
                                    {
                                        // console.log(item.time1)
                                        // console.log(new Date(2020-4-23))
                                        console.log(new Date(item.time1))
                                    }
                                    <Text style={style.leftTopText}>多云</Text>
                                </View>
                                <View style={style.leftMiddle}>
                                    <Text numberOfLines={1} style={style.leftMiddleText}>{item.dtitle}</Text>
                                </View>
                                </TouchableOpacity>
                                <View style={style.leftBottom}>
                                    <Text style={style.leftBottomText}>心情:充实</Text>
                                    <TouchableOpacity onPress={()=>this.setChange(idx)}>
                                    <View style={style.leftBottomImg} key={idx} >
                                        <Image source={{uri:item.dtype==='private'?this.state.privateImg:this.state.publicImg}} style={{width:20,height:20}} />
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={style.right}  key={idx}>
                            {
                                item.dimage==-1?
                                <ImageBackground
                                    style={{width:'100%',height:'100%'}} 
                                    source={{uri:'http://116.62.14.0:8666/api/image/116'}}
                                ></ImageBackground>
                                :
                                <Image source={{uri:'http://116.62.14.0:8666/api/image/'+item.dimage}} style={{width:'100%',height:'100%'}}/>
                            }                           
                        </View>
                       </View>
                       
                       ))}
                    </View>
                    <View style={style.bottom}>
                        <Text style={style.bottomText}>已经到底啦</Text>
                    </View>


                   
                </ScrollView>
                 {/* 加号 */}
                 <TouchableOpacity style={style.ten} onPress={()=>Actions.edit({'did':this.state.data.did,'page':'own','page1':'add'})}>
                    <View >
                        <Icon name="add-circle" color="#8bcca1" size={36} />
                   </View>
                   </TouchableOpacity>
                
            </View>
        )
    }
}

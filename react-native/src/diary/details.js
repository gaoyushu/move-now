
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
  ToastAndroid,AsyncStorage,
  Dimensions,
  Modal
//   Actions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import style from '../../css/diary/details'
import {myFetch} from '../utils'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class details extends Component{
    constructor(props){
        super(props);
        let date=moment().format('YYYY / MM / DD');
        this.state={
            i:0,
            j:0,
            backgroundColor2:'white',
            color2:'#1C4678',
            c2:'公开',
            data:{},
            comments:[],
            value:'',
            isLock:'',
            w:0,
            h:0,
            isLoading:false,
            page:props.page,
            pageItem:props.pageItem,
            accontent:'',
            com:false,
            isLike:'',
            isLikeColor:'',
            comText:''

        }
    }
    componentDidMount(){
        // console.log('99999'+this.props.refresh())
        console.disableYellowBox = true;
        this.setState({
            page:this.props.page
        })
        // console.log(this.state.page)
        AsyncStorage.getItem('token').then((result)=>{
        fetch('http://116.62.14.0:8666/diary/detail/'+this.props.did+'/'+result)
        .then(res =>{ return res.json() })
        .then(res =>{
            console.log(res); 
            if(res.data.dimage===-1){
                var a=res.data;
                a.dimage=null;
                this.setState({
                    data:a,
                    comments:a.comments,
                    isLoading:true
    
                });
            }
             else{
                //设置图片自适应尺寸
                let screenWidth = Dimensions.get('window').width;
                let screenHeight = Dimensions.get('window').height;
                Image.getSize("http://116.62.14.0:8666/api/image/"+res.data.dimage,(width,height) => {
                    this.setState({
                        w:0.6*screenWidth,
                        h:(0.6*screenWidth*height)/width,
                        data:res.data,
                        comments:res.data.comments,
                        isLoading:true
                    })
                })
            }
            if(res.data.dtype=='private'){
                this.setState({
                    value:'公开',
                    isLock:'lock-open-outline'
                })
            }else{
                this.setState({
                    value:'锁住',
                    isLock:'lock-outline'
                })
            }
            if(res.data.isGood==='true'){
                this.setState({
                    isLike:'heart',
                    isLikeColor:'red'
                })
            }else{
                this.setState({
                    isLike:'heart-outline',
                    isLikeColor:'#535151'
                })
            }
        });})
    }
    //更改日记状态
    changeState=()=>{
        AsyncStorage.getItem('token').then((result)=>{
            fetch('http://116.62.14.0:8666/diary/type/'+this.props.did, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token:result, diaryid:`${this.props.did}`})})
                .then(res =>{ return res.json() })
                .then(res =>{ 
                    console.log(res);
                    if(res.status===0){
                        ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
                        // Toast.success(res.data,1)
                        
                    }
                 });
                if(this.state.data.dtype=='public'){
                    var arr=this.state.data;
                    arr.dtype='private';
                        this.setState({
                            value:'公开',
                            data:arr,
                            isLock:'lock-open-outline'
                        })
                    
                    
                }else{
                    var arr=this.state.data;
                    arr.dtype='public';
                    this.setState({
                        value:'锁住',
                        data:arr,
                        isLock:'lock-outline'
                    })
                }        
            })
                    }

    changeLike=()=>{
        AsyncStorage.getItem('token').then((result)=>{
        fetch('http://116.62.14.0:8666/square/praise/'+result+'/'+`${this.state.data.did}`,{
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }, 
            }).then(res =>{ return res.json() }).then(d =>{ console.log(d); }
              ,[]);
        if(this.state.data.isGood==='true'){
            var ddd=this.state.data;
            ddd.isGood='false';
            ddd.dpraise=this.state.data.dpraise-1
            this.setState({
                data:ddd,
                isLike:'heart-outline',
                isLikeColor:'#535151'
            })
        }
        else{
            var ddd=this.state.data;
            ddd.dpraise=this.state.data.dpraise+1
            ddd.isGood='true'
            this.setState({
                data:ddd,
                isLike:'heart',
                isLikeColor:'red',
            })
        }
    })
    }

    //评论遮罩状态
    comment=()=>{
        this.setState({
            com:true
        })
    }
    _comment=()=>{
        this.setState({
            com:false
        })
    }
    //获取评论输入框内容
    commentText = (text)=>{
        this.setState({comText:text})
    }
    //提交评论
    supportComment=()=>{
        AsyncStorage.getItem('token').then((result)=>{
        fetch('http://116.62.14.0:8666/square/comments', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
            },
            body: JSON.stringify({token:result, did:`${this.state.data.did}`,comcontent:`${this.state.comText}`, comstatus:"true"})})
            .then(res =>{ return res.json() })
            .then(res =>{ 
                console.log(res); 
                if(res.data==='ok'){
                    ToastAndroid.showWithGravity('评论日记成功！',10,ToastAndroid.CENTER);
                    // Toast.success('评论日记成功！',1);
                    setTimeout(() => {
                        this.setState({
                            com:false,
                        });
                        //评论后刷新页面
                        fetch('http://116.62.14.0:8666/diary/detail/'+this.props.did+'/'+result)
                        .then(res =>{ return res.json() })
                        .then(res =>{
                            console.log(res); 
                            if(res.data.dimage===-1){
                                var a=res.data;
                                a.dimage=null;
                                this.setState({
                                    data:a,
                                    comments:a.comments,
                                    isLoading:true
                    
                                });
                            }
                             else{
                                //设置图片自适应尺寸
                                let screenWidth = Dimensions.get('window').width;
                                let screenHeight = Dimensions.get('window').height;
                                Image.getSize("http://116.62.14.0:8666/api/image/"+res.data.dimage,(width,height) => {
                                    this.setState({
                                        w:0.6*screenWidth,
                                        h:(0.6*screenWidth*height)/width,
                                        data:res.data,
                                        comments:res.data.comments,
                                        isLoading:true
                                    })
                                })
                            }
                            if(res.data.dtype=='private'){
                                this.setState({
                                    value:'公开',
                                    isLock:'lock-open-outline'
                                })
                            }else{
                                this.setState({
                                    value:'锁住',
                                    isLock:'lock-outline'
                                })
                            }
                            if(res.data.isGood==='true'){
                                this.setState({
                                    isLike:'heart',
                                    isLikeColor:'red'
                                })
                            }else{
                                this.setState({
                                    isLike:'heart-outline',
                                    isLikeColor:'#535151'
                                })
                            }
                        });


                        
                    }, 1000);
                }
            });
           
        })
    }
    goComment=()=>{
        this.setState({
            com:false,
        });
        if(this.props.page==='own'){
            Actions.comment({'did':this.state.data.did,refresh:()=>{this.refreshs()}})
        }
        if(this.props.page==='square'){
            Actions.comment1({'did':this.state.data.did,refresh:()=>{this.refreshs()}})
        }
        if(this.props.page==='exchange'){
            Actions.comment2({'did':this.state.data.did,refresh:()=>{this.refreshs()}})
        }
        
    }
    goEdit=()=>{
        if(this.props.page==='own'){
            Actions.edit({'did':this.state.data.did,'page':'own','page1':'edit',refresh:()=>{this.refreshs()}})
        }
        // if(this.props.page==='square'){
        //     Actions.edit({'did':this.state.data.did,'page':'square','pageItem':this.props.pageItem})
        // }
        
    }
    //返回
    goBack=()=>{
        if(this.props.page==='exchange'){
            // console.log('exchange')
            Actions.pop()
        }else{
            Actions.pop(this.props.refresh())
        }
        
        // console.log(this.state.page);
        // console.log(this.props.page)
        // if(this.state.page==='own'){
        //     // Actions.diary()
        //     Actions.pop()
        // }
        // else if(this.state.page==='square'){
        //     // if(this.state.pageItem==='one'){
                
        //     //     Actions.squares({isActive1:true,isActive2:false,isActive3:false,})
        //     // }
        //     // if(this.state.pageItem==='two'){
        //     //     Actions.squares({isActive2:true,isActive1:false,isActive3:false,})
        //     // }
        //     // if(this.state.pageItem==='three'){
        //     //     Actions.squares({isActive3:true,isActive2:false,isActive1:false,})
        //     // }
        //     Actions.popTo('square')
        // }
        // else if(this.props.page==='home'){
        //     // if(this.props.pageItem==='one'){
        //     //     Actions.home({'pageItem':'one'})
        //     // }
        //     // if(this.props.pageItem==='two'){
        //     //     Actions.home({'pageItem':'two'})
        //     // }
        //     // if(this.props.pageItem==='three'){
        //     //     Actions.home({'pageItem':'one'})
        //     // }
        //     Actions.home({'pageItem':this.props.pageItem,'uid':this.props.uid})
        // }
    }
    //返回刷新
    refreshs=()=>{
        console.log('shuaxin')
        AsyncStorage.getItem('token').then((result)=>{
            fetch('http://116.62.14.0:8666/diary/detail/'+this.props.did+'/'+result)
            .then(res =>{ return res.json() })
            .then(res =>{
                console.log(res); 
                if(res.data.dimage===-1){
                    var a=res.data;
                    a.dimage=null;
                    this.setState({
                        data:a,
                        comments:a.comments,
                        isLoading:true
        
                    });
                }
                 else{
                    //设置图片自适应尺寸
                    let screenWidth = Dimensions.get('window').width;
                    let screenHeight = Dimensions.get('window').height;
                    Image.getSize("http://116.62.14.0:8666/api/image/"+res.data.dimage,(width,height) => {
                        this.setState({
                            w:0.6*screenWidth,
                            h:(0.6*screenWidth*height)/width,
                            data:res.data,
                            comments:res.data.comments,
                            isLoading:true
                        })
                    })
                }
                if(res.data.dtype=='private'){
                    this.setState({
                        value:'公开',
                        isLock:'lock-open-outline'
                    })
                }else{
                    this.setState({
                        value:'锁住',
                        isLock:'lock-outline'
                    })
                }
                if(res.data.isGood==='true'){
                    this.setState({
                        isLike:'heart',
                        isLikeColor:'red'
                    })
                }else{
                    this.setState({
                        isLike:'heart-outline',
                        isLikeColor:'#535151'
                    })
                }
            });})
       
      }
    render(){
        return(
            <View style={style.body}>
                {/* 顶栏 */}
                <View style={style.head}>
                <LinearGradient
                    // start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#8bcca1' , '#57a099']}
                    style={{height: 50, flex: 1,flexDirection:'row'}}>
                         <TouchableOpacity style={style.headLeft} onPress={()=>{this.goBack()}}>
                    <View >
                        <Icon name="chevron-left" color="#fff" size={30}/>
                    </View>
                    </TouchableOpacity>
                        <View style={style.headMiddle}>
                            <Text style={style.headWord}>日记详情</Text>
                        </View>
                    </LinearGradient>
                </View>
                <ScrollView style={style.sc}>  
                    {/* 用户信息日记内容      */}
                    
                    {
                        //判断用户是否匿名
                        this.props.page==='exchange'
                        ?
                            this.state.data.isMe
                            ?
                            <View style={style.user}>
                                <View style={style.userLeft}>
                                    <View style={style.userLeftImg}>
                                        <Image source={{uri:'http://116.62.14.0:8666/api/image/'+this.state.data.uimage}} style={{width:'100%',height:'100%'}}/>
                                    </View>
                                </View>
                                <View style={style.userRight} numberOfLines={1}>
                                    <Text style={style.userRT1}>{this.state.data.uname}</Text>
                                    {/* <Text style={style.userRT2}>{this.state.data.uintroduce}</Text> */}
                                    <Text style={style.userRT2}>{this.state.data.dtime}</Text>
                                </View>
                            </View>
                            :
                            <View style={style.user}>
                                <View style={style.userLeft}>
                                    <View style={style.userLeftImg}>
                                        <Image source={{uri:'http://116.62.14.0:8666/api/image/5'}} style={{backgroundColor:'#000',width:'100%',height:'100%'}}/>
                                    </View>
                                </View>
                                <View style={style.userRight} numberOfLines={1}>
                                    <Text style={style.userRT1}>朝花夕拾</Text>
                                    {/* <Text style={style.userRT2}>{this.state.data.uintroduce}</Text> */}
                                    <Text style={style.userRT2}>{this.state.data.dtime}</Text>
                                </View>
                            </View>
                        :
                        <View style={style.user}>
                            <View style={style.userLeft}>
                                <View style={style.userLeftImg}>
                                    <Image source={{uri:'http://116.62.14.0:8666/api/image/'+this.state.data.uimage}} style={{width:'100%',height:'100%'}}/>
                                </View>
                            </View>
                            <View style={style.userRight} numberOfLines={1}>
                                <Text style={style.userRT1}>{this.state.data.uname}</Text>
                                {/* <Text style={style.userRT2}>{this.state.data.uintroduce}</Text> */}
                                <Text style={style.userRT2}>{this.state.data.dtime}</Text>
                            </View>
                        </View>

                        }
                        
                    
                    <View style={style.diary}>
                        <View style={style.diaryTittle}>
                            <Text style={style.diaryTT}>{this.state.data.dtitle}</Text>
                        </View>
                        <View style={style.diaryContent}>
                            <Text style={style.diaryCT}>{this.state.data.dcontent}</Text>
                        </View>
                        {this.state.data.dimage?
                            <View style={style.diaryImg}>
                            <Image source={{uri:"http://116.62.14.0:8666/api/image/"+this.state.data.dimage}} style={{width:this.state.w,height:this.state.h}} resizeMode='contain'/>
                            </View>
                            :<View></View>}  
                    </View>
                    {/* 评论 */}
                    
                    {
                        //没有评论
                        this.state.comments=='暂无评论'?
                            <View style={style.comments}>
                                <View style={style.chead}>
                                    <View style={style.cheadLeft}>
                                        <Text style={style.cheadLeftT}>评论 0</Text>
                                    </View>
                                    <View style={style.cheadRight}>
                                        <Text style={style.cheadRightT}>赞 {this.state.data.dpraise}</Text>
                                    </View>
                                </View>
                                <View style={style.cContent}>
                                    <Text style={style.cCT}>还没有评论</Text>
                                </View>
                            </View>
                        :
                        //有评论
                        <View style={style.comments}>
                            <View style={style.chead}>
                                <View style={style.cheadLeft}>
                                    <Text style={style.cheadLeftT}>评论 {this.state.comments.length}</Text>
                                </View>
                                <View style={style.cheadRight}>
                                    <Text style={style.cheadRightT}>赞 {this.state.data.dpraise}</Text>
                                </View>
                            </View>
                            {
                                this.state.isLoading?
                                this.state.comments.map((item,key)=>(
                                    //判断最后一行评论没有borderBottom
                                    key===this.state.comments.length-1?
                                    <View style={style.ccontent1} key={key}>
                                        <View style={style.ccontentImg}>
                                            <Image source={{uri:'http://116.62.14.0:8666/api/image/'+item.uimage}} style={{width:'100%',height:'100%'}}/>
                                        </View>
                                        <View numberOfLines={1} style={style.ccontentUser}>
                                            <Text style={style.ccontentUserName}>{item.uname}</Text>
                                            <Text style={style.ccontentText}>{item.comcontent}</Text>
                                            <Text style={style.ccontentDate}>{item.comtime}</Text>
                                        </View>
                                    </View>
                                    :
                                    <View style={style.ccontent} key={key}>
                                        <View style={style.ccontentImg}>
                                            <Image source={{uri:'http://116.62.14.0:8666/api/image/'+item.uimage}} style={{width:'100%',height:'100%'}}/>
                                        </View>
                                        <View numberOfLines={1} style={style.ccontentUser}>
                                            <Text style={style.ccontentUserName}>{item.uname}</Text>
                                            <Text style={style.ccontentText}>{item.comcontent}</Text>
                                            <Text style={style.ccontentDate}>{item.comtime}</Text>
                                        </View>
                                    </View>
                                    
                                ))
                                
                                :
                                //加载过程
                                <View style={style.cContent}>
                                    <Text style={style.cCT}>正在加载...</Text>
                                </View>
                            }
                        </View>
                    }
                    
    
                </ScrollView>  
                {
                    //底栏编辑和更改状态
                        this.state.page==='own'
                        ?
                        <View style={style.own}>
                            <TouchableOpacity style={style.ownView} onPress={()=>this.goEdit()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name="square-edit-outline" color="#535151" size={18} style={{marginTop:12}}/>
                                    <Text style={style.ownT}>编辑</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={style.ownMiddle}></View>
                            <TouchableOpacity style={style.ownView} onPress={()=>this.comment()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name="comment-processing-outline" color="#535151" size={18} style={{marginTop:12}}/>
                                    <Text style={style.ownT}>评论</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={style.ownMiddle}></View>
                            <TouchableOpacity style={style.ownView} onPress={()=>this.changeLike()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={this.state.isLike} color={this.state.isLikeColor} size={18} style={{marginTop:12}}/>
                                    <Text style={style.ownT}>点赞</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={style.ownMiddle}></View>
                            <TouchableOpacity style={style.ownView} onPress={()=>this.changeState()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={this.state.isLock} color="#535151" size={18} style={{marginTop:12}}/>
                                    <Text style={style.ownT}>{this.state.value}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :<></>
                    }   
                    {
                        //底栏评论和点赞
                        this.state.page==='square'
                        ?
                        <View style={style.square}>
                            <TouchableOpacity style={style.squareLeft} onPress={()=>this.comment()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name="comment-processing-outline" color="#535151" size={20} style={{marginTop:10}}/>
                                    <Text style={style.squareLT}>评论</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={style.squareMiddle}></View>
                            <TouchableOpacity style={style.squareRight} onPress={()=>this.changeLike()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={this.state.isLike} color={this.state.isLikeColor} size={20} style={{marginTop:10}}/>
                                    <Text style={style.squareRT}>点赞</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :  
                        <></> 
                    }

{
                        //底栏评论
                        this.state.page==='exchange'
                        ?
                        <View style={style.square}>
                            <TouchableOpacity style={style.exchange} onPress={()=>this.comment()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name="comment-processing-outline" color="#535151" size={20} style={{marginTop:10}}/>
                                    <Text style={style.squareLT}>评论</Text>
                                </View>
                            </TouchableOpacity>
                            {/* <View style={style.squareMiddle}></View>
                            <TouchableOpacity style={style.squareRight} onPress={()=>this.changeLike()}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name={this.state.isLike} color={this.state.isLikeColor} size={20} style={{marginTop:10}}/>
                                    <Text style={style.squareRT}>点赞</Text>
                                </View>
                            </TouchableOpacity> */}
                        </View>
                        :  
                        <></> 
                    }


                    {/* 评论遮罩弹框 */}
                    <Modal
                        style={style.container}
                            animationType='silde'
                            onRequestClose={this._comment}//安卓必须设置
                            transparent={true}
                            visible={this.state.com}//true的话显示Model
                        >
                            <TouchableOpacity style={style.cover} 
                            onPress={this._comment}>
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#FFF',position:'absolute',bottom:0,right:0,left:0,flexDirection:'row',padding:20,justifyContent:'space-around'}}>
                                <View style={{width:'90%'}}>
                                    <TextInput 
                                    autoFocus={true}
                                    multiline={true}
                                    style={{width:'100%',backgroundColor:'#F5F5F5',borderRadius:10,height:200}}
                                    minHeight={200} 
                                    placeholder='写评论~'
                                    textAlignVertical={'top'}
                                    onChangeText={this.commentText}
                                    />
                                </View>
                                <View style={{justifyContent:'space-between',marginTop:10}}>
                                    <TouchableOpacity onPress={this.goComment}>
                                        <Icon name='arrow-collapse' size={30}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    onPress={this.supportComment}
                                    >
                                        <Text>发送</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
            </View>
        )
    }
}

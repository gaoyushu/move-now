
import React ,{Component}from 'react';
import ImagePicker from 'react-native-image-picker';
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
  Dimensions
} from 'react-native';
import moment from 'moment'
import style from '../../css/diary/edit'
import {myFetch} from '../utils'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
const options = {
    title: '请选择',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    // quality: 0.8,
            cancelButtonTitle: "取消",
            takePhotoButtonTitle: "拍照",
            chooseFromLibraryButtonTitle: "选择相册",
            // allowsEditing: true,
            // noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class edit extends Component{
    constructor(){
        super();
        let date=moment().format('YYYY / MM / DD');
        this.state={
            comText:'',
            data:{},
            dtitle:'',
            dcontent:'',
            imgid:-1,
            w:0,
            h:0,
            imageUrl:'http://116.62.14.0:8666/api/image/62',
            isTaking:false
        }
    }
    componentDidMount(){
        //设置图片尺寸
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        Image.getSize(this.state.imageUrl,(width,height) => {
            // console.log('555'+width)
            this.setState({
                w:0.6*screenWidth,
                h:(0.6*screenWidth*height)/width,
            })
        })
        
        //获取日记内容
        AsyncStorage.getItem('token').then((result)=>{
        fetch('http://116.62.14.0:8666/diary/detail/'+this.props.did+'/'+result)
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res);
            console.log(res.data.dimage)
            if(res.data.dimage===-1){
                this.setState({
                    data:res.data,
                    dtitle:res.data.dtitle,
                    dcontent:res.data.dcontent,
                    imgid:res.data.dimage
                })
            }else{
                
                //设置图片自适应尺寸
                let screenWidth = Dimensions.get('window').width;
                let screenHeight = Dimensions.get('window').height;
                Image.getSize("http://116.62.14.0:8666/api/image/"+res.data.dimage,(width,height) => {
                    console.log('55555')
                    this.setState({
                        w:0.6*screenWidth,
                        h:(0.6*screenWidth*height)/width,
                        data:res.data,
                        dtitle:res.data.dtitle,
                        dcontent:res.data.dcontent,
                        imgid:res.data.dimage
                        // comments:res.data.comments,
                        // isLoading:true
                    })
                    
                })
            }
            

         });
        })
     
    
      }
    Title = (text)=>{
        this.setState({dtitle:text})
    }
    Content = (text)=>{
        this.setState({dcontent:text})
    }
    //发布日记
    toedit=()=>{
        AsyncStorage.getItem('token').then((result)=>{
            if(this.props.page1==='edit'){
            fetch('http://116.62.14.0:8666/diary/edit', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ diaryid:`${this.props.did}`,title:`${this.state.dtitle}`, content:`${this.state.dcontent}`,imgid:`${this.state.imgid||''}` })})
                .then(res =>{ return res.json() })
                .then(res=>{ 
                    console.log(res); 
                    if(res.status===0){
                        ToastAndroid.showWithGravity('编辑成功！',10,ToastAndroid.CENTER);
                        setTimeout(()=>{
                            if(this.props.page==='own'){
                                Actions.details({'did':this.props.did,'page':'own'});
                            }
                            // if(this.props.page==='square'){
                            //     Actions.details({'did':this.props.did,'page':'square','pageItem':this.props.pageItem})
                            // }
                        },1000)
                    }
                });
            }else{
                // console.log(result)
                // console.log(this.state.dtitle)
                // console.log(this.state.dcontent)
                // console.log(this.state.imgid)
                fetch('http://116.62.14.0:8666/diary/edit',  {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token:result,title:`${this.state.dtitle}`, content:`${this.state.dcontent}`,imgid:`${this.state.imgid}`})})
                    .then(res =>{ return res.json() })
                    .then(res=>{ 
                        console.log(res); 
                        if(res.status===0){
                            ToastAndroid.showWithGravity('发布成功！',10,ToastAndroid.CENTER);
                            setTimeout(()=>{
                                Actions.details({'did':res.data,'page':'own'})
                            },1000)
                        }
                    });
            }
            })
       }
       //选择图片
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
                    isTaking:true
                });
                console.log(response.fileName)
                let formData = new FormData();
        let file = {uri: response.uri, type: 'multipart/form-data', name: response.fileName};   //这里的key(uri和type和name)不能改变,
        formData.append("files",file); 
        
        fetch('http://116.62.14.0:8666/api/image', {
            method: 'POST',
            // mode:"cors",
            headers:{
                'Content-Type':'multipart/form-data',
            },          
            body: formData,
        })
        .then((response) => response.text() )
        .then((responseData)=>{
            console.log('ceshi')
            console.log(response.imageid)
            console.log('responseData',responseData);
        })
        .catch((error)=>{console.error('error',error)});
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log('ceshi')
        //     console.log(res.data)
        //     console.log(res.imageid+'9999999')
        //     if(res.imageid){
        //         this.setState({
        //             imgid:res.imageid
        //         })
        //     }else{
        //         ToastAndroid.showWithGravity(res.data,10,ToastAndroid.CENTER);
        //         // Toast.fail(res.data,1);
        //     }
        // }
        // )
                console.log(this.state.isTaking+'1111')
            }
            // console.log(this.state.isTaking)
            // console.log(this.state.w+'666')
            // console.log(this.state.h+'777')
            // console.log(this.state.imageUrl)
        });
        
        
        
    }
   
    
    
    render(){
       
        return(
            <View style={style.body}>
      
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
                            <Text style={style.headWord}>编辑日记</Text>
                        </View>
                    <View style={style.headRight}>
                    <TouchableOpacity  
                         onPress={this.toedit}
                         >
                        <View  style={style.but}>
                            <Text style={style.butT}>发布</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    {/* </LinearGradient> */}
                </View>
                {
                    this.props.page1==='edit'
                    ?
                    <>
                    <View style={style.text}>
                                    <TextInput 
                                    autoFocus={true}
                                    multiline={true}
                                    style={style.inputTittle}
                                    // minHeight={200} 
                                    // placeholder='写评论~'
                                    value={this.state.dtitle}
                                    textAlignVertical={'top'}
                                    onChangeText={this.Title}
                                    />
                                    <TextInput 
                                    autoFocus={true}
                                    multiline={true}
                                    style={style.inputContent}
                                    // minHeight={100} 
                                    // placeholder='写评论~'
                                    value={this.state.dcontent}
                                    textAlignVertical={'top'}
                                    onChangeText={this.Content}
                                    />
                                </View>
                    <View >
                    {
                        this.state.imgid===-1?
                        <TouchableOpacity onPress={() => { this.takephoto() }}>
                            {
                                this.state.isTaking
                                ?<Image source={{uri:this.state.imageUrl}} style={{width:this.state.w,height:this.state.h}} resizeMode='contain'/>
                                :<Image source={{uri:'http://116.62.14.0:8666/api/image/62'}} style={{width:150,height:120}} resizeMode='contain'/>
                            }
                                
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { this.takephoto() }}>
                        <View style={style.img}>
                            <Text style={style.imgText}>点击更换图片</Text>
                            {
                                !this.state.isTaking
                                ?<Image source={{uri:'http://116.62.14.0:8666/api/image/'+this.state.imgid}} style={{width:this.state.w,height:this.state.h}} resizeMode='contain'/>      
                                :<Image source={{uri:this.state.imageUrl}} style={{width:this.state.w,height:this.state.h}} resizeMode='contain'/>                  
                            }
                            
                        </View>
                        </TouchableOpacity>
                    }
                     </View>
                     </>
                    :
                    <>
                    <View style={style.text}>
                                    <TextInput 
                                    autoFocus={true}
                                    multiline={true}
                                    style={style.inputTittle}
                                    // minHeight={200} 
                                    placeholder='标题'
                                    value={this.state.dtitle}
                                    textAlignVertical={'top'}
                                    onChangeText={this.Title}
                                    />
                                    <TextInput 
                                    autoFocus={true}
                                    multiline={true}
                                    style={style.inputContent1}
                                    // minHeight={100} 
                                    placeholder='正文'
                                    value={this.state.dcontent}
                                    textAlignVertical={'top'}
                                    onChangeText={this.Content}
                                    />
                                </View>
                    <View >

                    <TouchableOpacity onPress={() => { this.takephoto() }}>
                           
                            
                        <Image source={{uri:this.state.imageUrl}} style={{width:this.state.isTaking?this.state.w:150,height:this.state.isTaking?this.state.h:120}} resizeMode='contain'/>            
                        </TouchableOpacity>
                     </View>
                     </>
                }
                
                
            
                
            </View>
        )
    }
}

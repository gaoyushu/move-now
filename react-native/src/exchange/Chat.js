import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity ,AsyncStorage} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import {BVLinearGradient} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Button from 'react-native-button';
import chat from '../../css/exchange/Chat';
import {myFetch} from '../utils'

const path = 'http://116.62.14.0:8666/';
const imgpath = path + 'api/image/'; // 图片路径
const datapath = path + 'change/detail/'; // 请求路径
const token = 1586768446984; // 假设用户token 后期从内存中获取

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      data: [],
      shortdes_id:props.shortdes_id,
      val1:'接受',
      val2:'婉拒',
      disabled:false,
      val:'',
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
         myFetch.get('/changed/detail/'+this.state.token+'/'+this.state.shortdes_id)
         .then(res=>{
           this.setState({
             data:res.data
           })
         })
       })
    })
    // myFetch.get('/changed/detail/1586768446984/'+this.state.shortdes_id)
    // .then(res=>{
    //   this.setState({
    //     data:res.data
    //   })
    // })
    
  }
  pops=()=>{
    Actions.pop()
  }
   //接收
   receive=(idx)=>{
    this.setState({
      disabled:true,
      val:'接受',
      val1:'已接受'
    })
    this.state.data.map((item,id)=>{
      if(item==this.state.data[idx]){
        var aid=item.aid;
        myFetch.put('/changed/repfri',{ token:this.state.token,aid:aid,reply:1})
      }
    })
  }
  //婉拒
  unreceive=(idx)=>{
    this.setState({
      disabled:true,
      val:'婉拒',
      val2:'已婉拒'
    })
    this.state.data.map((item,id)=>{
      if(item==this.state.data[idx]){
        var aid=item.aid;
        myFetch.put('/changed/repfri',{ token:this.state.token,aid:aid,reply:-1})
      }
    })
  }
  render() {
    return (
      <View>
      {/* <Button title='相遇信息' onPress={()=>{Actions.exmeet()}}/>
      <Button title='选择日记' onPress={()=>{Actions.exchoice()}}/>
      <Button title='日记详情' onPress={()=>{Actions.exdetail()}}/>
        <Text>双人交换页面 token oneid 加好友post并显示在当前页面</Text>
        <Text>跳转 相遇信息 选择日记 日记详情</Text> */}
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 1}}//默认竖向
          colors={['#8bcca1' , '#57a099']}
          style={chat.header}>
            <Icon onPress={()=>{this.pops()}} name="chevron-left" size={40}  color='white' style={chat.back} />
        </LinearGradient>
        <ScrollView>
          <View style={chat.icons}> 
            <TouchableOpacity onPress={()=>{Actions.exchoice({shortdes_id:this.state.shortdes_id})}} style={chat.images1} >
              <Image source={{uri:"http://116.62.14.0:8666/api/image/26"}} style={chat.images} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Actions.exmeet()}} style={chat.images2}>
              <Image source={{uri:"http://116.62.14.0:8666/api/image/10"}} style={chat.images} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Actions.exapply()}} style={chat.images3}>
              <Image source={{uri:"http://116.62.14.0:8666/api/image/27"}} style={chat.images} />
            </TouchableOpacity>
          </View>
          {
            this.state.data.map((item,idx)=>(
              item.type=='exchange'
              ?
                item.isRead=='true'
                ?
                 item.isMe=='true'
                 ?
                 <View style={chat.mebox}>
                   <View style={chat.meheader}>
                      <View style={chat.meheaderimage}>
                      <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={chat.imagess} />
                      </View>
                      <Text style={chat.meheadertext}>朝花夕拾</Text>
                   </View>
                   <TouchableOpacity style={chat.mecontents}>
                      <View style={chat.mecontent}>
                        <Text style={chat.mecontenttext}>{item.title}</Text>
                    </View>
                   </TouchableOpacity>
                 </View>
                 :
                 <View style={chat.otherbox}>
                  <View style={chat.otherheader}>
                      <View style={chat.otherheaderimage}>
                      <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={chat.imagess} />
                      </View>
                      <Text style={chat.otherheadertext}>朝花夕拾</Text>
                   </View>
                   <TouchableOpacity style={chat.othercontents}>
                      <View style={chat.othercontent}>
                        <Text style={chat.othercontenttext}>{item.title}</Text>
                    </View>
                   </TouchableOpacity>
                 </View>
                 :
                 item.isMe=='true'
                 ?
                 <View style={chat.mebox}>
                   <View style={chat.meheader}>
                      <View style={chat.meheaderimage}>
                      <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={chat.imagess} />
                      </View>
                      <Text style={chat.meheadertext}>朝花夕拾</Text>
                   </View>
                   {/* <TouchableOpacity style={chat.mecontents}> */}
                   <View style={chat.mecontents}>
                      <View style={chat.mecontent}>
                        <Text style={chat.mecontenttext}>{item.title}</Text>
                        <View style={chat.lock}> 
                          <Image source={{uri:"http://116.62.14.0:8666/api/image/49"}} style={chat.loc} />
                        </View>
                      </View>
                    </View>
                   {/* </TouchableOpacity> */}
                 </View>
                 :
                 <View style={chat.otherbox}>
                  <View style={chat.otherheader}>
                      <View style={chat.otherheaderimage}>
                      <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={chat.imagess} />
                      </View>
                      <Text style={chat.otherheadertext}>朝花夕拾</Text>
                   </View>
                   {/* <TouchableOpacity style={chat.othercontents}> */}
                   <View style={chat.othercontents}>
                      <View style={chat.othercontent}>
                        <Text style={chat.othercontenttext}>{item.title}</Text>
                        <View style={chat.lock}> 
                          <Image source={{uri:"http://116.62.14.0:8666/api/image/49"}} style={chat.loc} />
                        </View>
                      </View>
                    </View>
                    
                   {/* </TouchableOpacity> */}
                 </View>
                 :
                 item.isMe=='false'
                 ?
                 <View>
                  <View style={chat.friendbox}>
                    <View style={chat.otherheader}>
                        <View style={chat.otherheaderimage}>
                        <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={chat.imagess} />
                        </View>
                        <Text style={chat.otherheadertext}>快乐的代码机器</Text>
                    </View>
                    <View style={chat.othercontents}>
                        <View style={chat.othercontentss}>
                          <Text style={chat.othercontenttext}>向您发送了一个好友申请</Text>
                          <Text style={chat.reason}>{item.content}</Text>
                        </View>
                      </View>
                    </View>
                    {!item.isReply
                    ?
                    <View style={chat.mereply}>
                      <Button onPress={()=>this.receive(idx)} style={this.state.val=='接受'?chat.button1:chat.button} disabled={this.state.disabled}>
                        {this.state.val1}
                      </Button>
                      <Button onPress={()=>this.unreceive(idx)} style={this.state.val=='婉拒'?chat.button1:chat.button} disabled={this.state.disabled}>
                        {this.state.val2}
                      </Button>
                    </View>
                    :
                    !item.reply
                    ?
                    <View style={chat.mereply}>
                      <Button disabled={true} style={chat.button}>接受</Button>
                      <Button disabled={true} style={chat.button1}>已婉拒</Button>
                    </View>
                    :
                    <View style={chat.mereply}>
                      <Button disabled={true} style={chat.button1}>已接受</Button>
                      <Button disabled={true} style={chat.button}>婉拒</Button>
                    </View>
                    }
                 
                 </View>
                 :
                 <View>
                  <View style={chat.friendbox}>
                    <View style={chat.meheader}>
                        <View style={chat.meheaderimage}>
                        <Image source={{uri:"http://116.62.14.0:8666/api/image/5"}} style={chat.imagess} />
                        </View>
                        <Text style={chat.meheadertext}>快乐的代码机器</Text>
                    </View>
                    <View style={chat.mecontents}>
                      <View style={chat.mecontentss}>
                        <Text style={chat.mecontenttext}>您发送了一个好友申请</Text>
                        <Text style={chat.reason}>{item.content}</Text>
                      </View>
                    </View>
                  </View>
                  {!item.isReply
                  ?
                  <View style={chat.mesend}>
                    <Text style={chat.mesendtext}>请求已发送</Text>
                  </View>
                  :
                  !item.reply
                  ?
                  <View style={chat.mesend}>
                    <Text style={chat.mesendtext}>对方已婉拒</Text>
                  </View>
                  :
                  <View style={chat.mesend}>
                    <Text style={chat.mesendtext}>对方已接受</Text>
                  </View>
                  }
                 </View>
                 
            ))
          }
          <View style={chat.bottom}> 
            <Text style={chat.bottomtext}>已经到底了</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

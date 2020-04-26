
import React,{useState, useEffect} from 'react';
import {Router,Scene, Tabs, Drawer, Lightbox, Modal, Overlay,Actions} from 'react-native-router-flux';
import {
  StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
 
import SplashScreen from 'react-native-splash-screen'
import HomeTest from './src/home/HomeTest';
import GoodsTest from './src/goods/GoodsTest';
import UserTest from './src/user/UserTest';
import PublishTest from './src/user/PublishTest';
import Login from './src/common/Login';
import Register from './src/common/Register';
import Guide from './src/start/Guide';
import Icon from 'react-native-vector-icons/AntDesign';


// import square from './src/square/Square';
// import home from './src/square/Home';

// import Exchange from './src/exchange/Index';
// import ExDetail from './src/exchange/Detail';
// import ExMine from './src/exchange/Mine';
// import ExEdlist from './src/exchange/Edlist';
// import ExPublish from './src/exchange/Publish';
// import ExChat from './src/exchange/Chat';
// import ExApply from './src/exchange/Apply';
// import ExChoice from './src/exchange/Choice';
// import ExMeet from './src/exchange/Meet';
// import ExCard from './src/exchange/Card';
// import ExList from './src/exchange/List';
// import ExSwitch from './src/exchange/Switch';
// import ExTools from './src/exchange/Tools';
import square from './src/square/square1'
import change from './src/exchange/change';
import diary from './src/diary/diary';
import details from './src/diary/details';
import comment from './src/diary/comment';
import edit from './src/diary/edit';
import mine from './src/mine/mine';
import login from './src/start/login';
import register from './src/start/register';
const App= () => {
  // AsyncStorage.removeItem('token')
  let now=0;
  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  useEffect(()=>{
    AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
    AsyncStorage.getItem('token')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user){
				setLogin(true);
				SplashScreen.hide();
			}
		})
  },[])

  let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<Guide afterInstall={afterInstall}/>
		</View>
	}

  return (
    <>
      <Router
        backAndroidHandler={()=>{
          console.log('111111')
          if(Actions.currentScene != 'squares'&&Actions.currentScene != 'login'){
            console.log('2222')
            Actions.pop();
            return true;
          }else{
            if(new Date().getTime()-now<2000){
              BackHandler.exitApp();
            }else{
              ToastAndroid.show('确定要退出吗',100);
              now = new Date().getTime();
              return true;
            }
          }
          
        }}
      >
        <Overlay>
          <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
              <Drawer 
                key="drawer"
                contentComponent={()=><Text>drawer</Text>}
                drawerIcon={()=><Icon name="menu"/>}
                drawerWidth={400}
              >
                <Scene key="root"> 
                  <Tabs 
                      key='tabbar'                   
                      hideNavBar
                      activeTintColor='rgb(139, 204, 161)'
                      inactiveTintColor='#979797'
                      tabBarStyle={{backgroundColor:'#fff',height:40}}                 
                  >
                      <Scene key='homePage'
                          title='广场'
                          hideNavBar
                          icon={        
                          ({focused})=><Icon 
                              color={focused?'rgb(139, 204, 161)':'#979797'} 
                              name="home" 
                              size={19}
                            />
                          }
                      >
                          <Scene key='home' component={square}/>
                          {/* <Scene key='squares' component={square}/>  
                          <Scene key='home' hideTabBar component={home} /> */}
                      </Scene>
                      <Scene key='exchange'
                          title='交换'
                          hideNavBar        
                          icon={
                          ({focused})=><Icon 
                              size={19}
                              color={focused?'rgb(139, 204, 161)':'#979797'}  
                              name="appstore-o" 
                            />
                          }
                      >
                          <Scene key='goods' component={change} />
                          {/* <Scene key="exindex" component={Exchange} />
                          <Scene key="exdetail" hideTabBar component={ExDetail} />
                          <Scene key="exapply" hideTabBar component={ExApply} />
                          <Scene key="exedlist" hideTabBar component={ExEdlist} />
                          <Scene key="exmine" hideTabBar component={ExMine} />
                          <Scene key="expublish" hideTabBar component={ExPublish} />
                          <Scene key="exchat" hideTabBar component={ExChat} />
                          <Scene key="exmeet" hideTabBar component={ExMeet} />
                          <Scene key="exchoice" hideTabBar component={ExChoice} />
                          <Scene key="excard" hideTabBar component={ExCard} />
                          <Scene key="exlist" hideTabBar component={ExList} />
                          <Scene key="exswitch" hideTabBar component={ExSwitch} />
                          <Scene key="extools" hideTabBar component={ExTools} /> */}
                      </Scene>
                      <Scene key='diaryPage'
                          title='日记'
                          hideNavBar        
                          icon={
                          ({focused})=><Icon 
                              size={18}
                              color={focused?'rgb(139, 204, 161)':'#979797'}  
                              name="wallet" 
                            />
                          }
                      >
                          {/* <Scene key='register' component={register} /> */}
                          {/* <Scene key='login' component={login} /> */}
                          <Scene key='diary' component={diary} />
                          <Scene key='details' hideTabBar={true} component={details} />
                          <Scene key='comment' hideTabBar={true} component={comment} />
                          <Scene key='edit' hideTabBar={true} component={edit} />
                      </Scene>
                      <Scene key='user'
                          title='我的'
                          hideNavBar
                          icon={
                            ({focused})=><Icon 
                                size={19}
                                color={focused?'rgb(139, 204, 161)':'#979797'} 
                                name="user" 
                            />
                          }
                      >
                          <Scene key='user' component={mine} />
                          {/* <Scene key="publishtest" hideTabBar={true} component={PublishTest} /> */}
                      </Scene>
                  </Tabs>
                </Scene>
              </Drawer>
            </Lightbox>
            <Scene initial={!isLogin} key="register" component={register} />
            <Scene initial={!isLogin} key="login" component={login} />
          </Modal>
        </Overlay>
      </Router>
    </>
  );
};


export default App;

import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  BackHandler,
  ToastAndroid,
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import Square from './src/square/Square';
import Home from './src/square/Home';

import Exchange from './src/exchange/Index';
import ExDetail from './src/exchange/Detail';
import ExMine from './src/exchange/Mine';
import ExEdlist from './src/exchange/Edlist';
import ExPublish from './src/exchange/Publish';
import ExChat from './src/exchange/Chat';
import ExApply from './src/exchange/Apply';
import ExChoice from './src/exchange/Choice';
import ExMeet from './src/exchange/Meet';
// import ExCard from './src/exchange/Card';
// import ExList from './src/exchange/List';
// import ExSwitch from './src/exchange/Switch';
// import ExTools from './src/exchange/Tools';

import diary from './src/diary/diary';
import details from './src/diary/details';
import comment from './src/diary/comment';
import edit from './src/diary/edit';

import login from './src/start/login';
import register from './src/start/register';
import Guide from './src/start/Guide';

import Homes from './src/mine/Home';
import Inform from './src/mine/Inform';
import Set from './src/mine/Set';
import About from './src/mine/About';
import Edit from './src/mine/Edit';
import  Friend from "./src/mine/Friend";

console.disableYellowBox = true;

const App= () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
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
      <Modal hideNavBar>
        <Lightbox key="lightbox">
          <Scene key='root'>
            <Tabs
            key='tabbar'
            hideNavBar
            activeTintColor="rgb(139, 204, 161)"
            inactiveTintColor="#979797"
            tabBarStyle={{backgroundColor:'#fff',height:40}}  
            >
                <Scene 
                hideNavBar
                key='square' 
                title='广场'
                icon={        
                  ({focused})=><Icon 
                      color={focused?'rgb(139, 204, 161)':'#979797'} 
                      name="home" 
                      size={19}
                    />
                }
                >
                  <Scene key='squares' component={Square}/>  
                  <Scene key='home' hideTabBar component={Home} />
                  <Scene key='details1' hideTabBar={true} component={details} />
                  <Scene key='comment1' hideTabBar={true} component={comment} />
                </Scene> 
                <Scene
                    key="exchange"
                    hideNavBar
                    title="交换"
                    icon={        
                      ({focused})=><Icon 
                          color={focused?'rgb(139, 204, 161)':'#979797'} 
                          name="appstore-o" 
                          size={19}
                        />
                    }
                    >
                  <Scene key="exindex" component={Exchange} />
                  <Scene key="exdetail" hideTabBar component={ExDetail} />
                  <Scene key="exapply" hideTabBar component={ExApply} />
                  <Scene key="exedlist" hideTabBar component={ExEdlist} />
                  <Scene key="exmine" hideTabBar component={ExMine} />
                  <Scene key="expublish" hideTabBar component={ExPublish} />
                  <Scene key="exchat" hideTabBar component={ExChat} />
                  <Scene key="exmeet" hideTabBar component={ExMeet} />
                  <Scene key="exchoice" hideTabBar component={ExChoice} />
                  <Scene key='details2' hideTabBar={true} component={details} />
                  <Scene key='comment2' hideTabBar={true} component={comment} />
                  {/* <Scene key="exaddfri" hideTabBar component={ExAddfri} /> */}
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
                <Scene
                  key="我的"
                  hideNavBar
                  icon={
                    ({focused})=><Icon 
                        size={19}
                        color={focused?'rgb(139, 204, 161)':'#979797'} 
                        name="user" 
                    />
                  }
                >
                  <Scene key='homes' component={Homes}/>
                  <Scene key='notice' hideTabBar component={Inform}/>
                  <Scene key='mineSet' hideTabBar component={Set}/>
                  <Scene key='mineAbout' hideTabBar component={About}/>
                  <Scene key='mineEdit' hideTabBar component={Edit}/>
                  <Scene key='myFriend' hideTabBar component={Friend}/>
                </Scene>
            </Tabs>
            
          </Scene>
        </Lightbox>
        <Scene initial={!isLogin} key="register" component={register} />
        <Scene initial={!isLogin} key="login" component={login} />
      </Modal>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

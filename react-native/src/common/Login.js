import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    width: '60%',
    height: 50,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  pswd: {
    width: '60%',
    height: 50,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    lineHeight: 30,
  },
  btn: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#fff',
    marginTop: 20,
  },
  btntext: {
    color: '#fff',
  },
  register: {
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registertext: {
    color: 'red',
    fontSize: 15,
  },
  notion: {
    textAlign: 'center',
    height: 15,
  },
});

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: 'xxx',
      pwd: '',
      status: 0, // 0>null -1>loading -2>wrong
    };
  }
  login = () => {
    this.setState({status: -1});
    if (!(this.state.username && this.state.pwd)) {
      ToastAndroid.show('username or password is null', ToastAndroid.SHORT);
      this.setState({status: 0});
    } else {
      ToastAndroid.show('loading..', ToastAndroid.SHORT);
      AsyncStorage.getItem('userlist')
        .then(res => {
          res = JSON.parse(res);
          // console.log('get',res);
          if(!res){
            this.setState({status: -2})
          }else{
            for (var i = 0; i < res.length; i++) {
              if (
                this.state.username === res[i].username &&
                this.state.pwd === res[i].pwd
              ) {
                AsyncStorage.setItem('user', JSON.stringify(res[i]));
                break;
              }
            }
            if (i === res.length) {
              this.setState({status: -2});
            } else {
              Actions.lightbox();
            }
          }
        })
        .then(() => {
          if (this.state.status == -2) {
            ToastAndroid.show(
              'username or password is wrong!',
              ToastAndroid.SHORT,
            );
          }
        });
    }
  };
  userhandle = text => {
    this.setState({username: text});
  };
  passhandle = text => {
    this.setState({pwd: text});
  };
  render() {
    return (
      <View style={styles.login}>
        <View style={styles.name}>
          <TextInput
            style={styles.text}
            placeholder="username"
            onChangeText={this.userhandle}
          />
        </View>
        <View style={styles.pswd}>
          <TextInput
            style={styles.text}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={this.passhandle}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.login}>
          <Text style={styles.btntext}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => {
            Actions.signUp();
          }}>
          <Text style={styles.registertext}>
            dont have account? >> register now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

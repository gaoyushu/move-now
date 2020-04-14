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

import {myFetch} from '../utils/index';

const styles = StyleSheet.create({
  register: {
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
  back: {
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backtext: {
    color: 'red',
    fontSize: 15,
  },
});

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      status: 0,
      userlist: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('userlist').then(res => {
      if (res) {
        res = JSON.parse(res);
        this.setState({userlist: res});
      }
      console.log('did', this.state.userlist)
    });
  }

  register = () => {
    this.setState({status: -1});
    if (!(this.state.username && this.state.pwd)) {
      ToastAndroid.show('username or password is null', ToastAndroid.SHORT);
      this.setState({status: 0});
    } else {
      myFetch
        .post('/signup', {
          username: this.state.username,
          pwd: this.state.pwd,
        })
        .then(res => {
          if (res.data.token === 1) {
            ToastAndroid.show('bad register', ToastAndroid.SHORT);
            this.setState({status: -2});
          } else {
            this.setState(
              {userlist:[...this.state.userlist,res.data]},
              () => {
                console.log(this.state.userlist);
                AsyncStorage.setItem(
                  'userlist',
                  JSON.stringify(this.state.userlist),
                ).then(() => {
                  ToastAndroid.show('loading..', ToastAndroid.LONG);
                  setTimeout(() => {
                    ToastAndroid.show(
                      'sucessful!jump to login now!',
                      ToastAndroid.SHORT,
                    );
                  }, 4000);
                  setTimeout(() => {
                    Actions.login();
                  }, 6000);
                });
              },
            );
          }
        })
        .then(() => {
          if (this.state.status == -2) {
            ToastAndroid.show('bad input!already exist!', ToastAndroid.SHORT);
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
      <View style={styles.register}>
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
        <TouchableOpacity style={styles.btn} onPress={this.register}>
          <Text style={styles.btntext}>sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            Actions.login();
          }}>
          <Text style={styles.backtext}>back to register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

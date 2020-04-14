import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: '请选择图片来源',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '相册',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const styles = StyleSheet.create({
  div: {
    height: 235,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  imgdiv: {
    width: 84,
    height: 84,
    marginTop: 30,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  head: {
    width: '100%',
    height: '100%',
    borderColor: '#fff',
    flex:1
  },
  name: {
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  wave: {
    width: '100%',
  },
  btn: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    textAlignVertical: 'center',
    color: '#fff',
  },
});

export default class Head extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: {},
    };
    // console.log('super',this.state.imageUrl)
  }

  componentDidMount() {
    this.read((res)=>{
      this.setState({
        imageUrl: JSON.parse(res)||require('../img/icon.jpg'),
      },()=>{
        // console.log('will', this.state.imageUrl)
      });
    })
  }

  takephoto = () => {
    ImagePicker.launchCamera(options, res => {
      if (res.didCancel) {
        return;
      } else if (res.err) {
        // console.log('err:', res.err);
      } else if (res.customButton) {
        // console.log('custom:', res.customButton);
      } else {
        const source = {uri: res.uri};
        this.setState({
          imageUrl: source,
        },()=>{
        });
        this.save(source);
        // console.log('take', this.state.imageUrl);
      }
    });
  };
  save = (url) => {
    AsyncStorage.setItem('headImage', JSON.stringify(url), err => {
      if (err) {
        ToastAndroid.show('error!', ToastAndroid.SHORT);
        return false;
      } else {
        ToastAndroid.show('sucessful!', ToastAndroid.SHORT);
        return true;
      }
    });
  }
  read = (callback)=>{
    AsyncStorage.getItem('headImage', (err, res) => {
      if (!err) {
        // console.log('read', res);
        callback(res);
      }
    });
  }
  render() {
    // console.log('ren',this.state.imageUrl);
    return (
      <View style={styles.div}>
        <TouchableWithoutFeedback onPress={() => {this.takephoto();}}>
          <View style={styles.imgdiv}>
            <Image
              style={styles.head}
              source={this.state.imageUrl}
              resizeMode='stretch'
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.name}>Alex Hiroomi</Text>
        <Image
          style={styles.wave}
          source={require('../img/wave.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
}

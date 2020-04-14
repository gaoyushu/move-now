import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

const styles = StyleSheet.create({
    div:{
        height: 60,
        backgroundColor: 'red',
        flexDirection: 'row',
    justifyContent: 'center',
    },
    search:{
        flex: 9,
        height: 40,
		    flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 10,
        backgroundColor: '#eee',
        borderRadius: 20,
        opacity:0.7
    },
    text:{
        flex: 9,
        fontSize: 15,
    },
    img:{
        flex:1,
        height: 30,
        marginLeft: 25,
        alignSelf: 'center',
    },
    shop:{
      flex:1,
      alignSelf:'center',
      marginRight:20
    }
})

export default class SearchBarDemo extends React.Component {
  render() {
    return (
      <View style={styles.div}>
        <View style={styles.search}>
          <Image style={styles.img} source={require('../img/whitesearch.png')} resizeMode='contain'/>
          <TextInput style={styles.text} placeholder='请输入您要搜索的关键字' placeholderTextColor='#fff'>
          </TextInput>
        </View>
        <Image style={styles.shop} source={require('../img/shopping-car.png')} resizeMode="contain"></Image>
      </View>
    );
  }
}
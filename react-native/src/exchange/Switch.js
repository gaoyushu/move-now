import React,{Component} from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    div:{
        height: 60,
        backgroundColor: '#fff',
		flexDirection: 'row',
    },
    type:{
        flex: 1/5,
        alignSelf: 'center',
        textAlign:'center',
        color: '#000',
        fontSize: 17
    }

})

export default class Switch extends Component{
    constructor(){
        super();
        this.state = {
            type: ['综合','销量','新品','价格','信用']
        }
    }

    render(){
        return(
            <View style={styles.div}>
                {this.state.type.map((item,idx)=>{
                    return <Text style={styles.type} key={'switch'+idx}>{item}</Text>
                })}
            </View>
        )
    }
}
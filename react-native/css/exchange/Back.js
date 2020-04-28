import {StyleSheet,Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');

import color from '../color'

var styles = StyleSheet.create({
    div:{
        height: 0.07*height,
        backgroundColor: color.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        width: '15%',
        backgroundColor: color.green
    },
    text:{
        width: '85%',
        textAlign: "center",
        fontSize: 17,
        color: '#fff'
    }
});

module.exports = styles;
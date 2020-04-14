import {StyleSheet,Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');

import color from '../color'

var styles = StyleSheet.create({
    div:{
        height: 0.07*height,
        backgroundColor: color.green,
    },
    tools:{
        flexDirection:'row',
        alignItems:'center'
    },
    block:{
        flex:6,
        height:50,
    },
    imgdiv:{
        flex:1,
        width:0.05*width,
        height:'60%',
    },
    img:{
        width:'100%',
        height:'100%',
    }
});

module.exports = styles;
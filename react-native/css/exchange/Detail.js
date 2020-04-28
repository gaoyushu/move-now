import {StyleSheet,Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');

import color from '../color'

var styles = StyleSheet.create({
    box:{
        width: '100%',
        alignItems:'center',
        
    },
    imgdiv:{
        height: 0.2*width,
        width: 0.2*width,
        borderRadius: 0.2*width,
        overflow: 'hidden',
        backgroundColor: 'grey',
        alignSelf:'center',
        marginTop: 0.05*height,
        marginBottom: 0.03*height
    },
    img:{
        width: '100%',
        height: '100%'
    },
    time:{
        color: color.grey,
        fontSize: 15
    },
    title:{
        fontSize: 19,
        marginTop: 0.05*height
    },
    text:{
        fontSize: 15,
        marginTop: 0.025*height
    },
    btn:{
        width: '100%',
        marginTop: 0.05*height
    }
});

module.exports = styles;
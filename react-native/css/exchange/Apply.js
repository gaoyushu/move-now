import {StyleSheet,Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');

import color from '../color'

var styles = StyleSheet.create({
    text:{
        height: 0.35*height,
        width: '100%',
        marginTop: 0.025*height,
        marginBottom: 0.025*height,
        backgroundColor: color.white,
    },
    btn:{
        height: 0.05*height,
        marginBottom: 0.025*height
    }
});

module.exports = styles;
import {StyleSheet,Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');

import color from '../color'

var styles = StyleSheet.create({
    box:{
    },
    btn:{
        width: 60,
        height: 60,
        borderRadius: 60,
        overflow: "hidden",
        // position: 'absolute',
        // bottom: 0.05*height,
        // left: 0.05*width,
        zIndex: 999,
    }
});

module.exports = styles;
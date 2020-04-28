import {StyleSheet, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');

import color from '../color';

const styles = StyleSheet.create({
    // box:{
    //     width: 60,
    //     height: 60,
    //     borderRadius: 60,
    //     overflow: "hidden",
    //     position: 'absolute',
    //     bottom: 0.05*height,
    //     left: 0.05*width,
    //     zIndex: 999
    // },
    // btn:{
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: color.white
    // }
    box:{
        
    },
    title:{
        width: '100%',
        height:0.06*height,
        marginTop: 0.01*height,
        backgroundColor: color.white,
        fontSize: 17
    },
    text:{
        width: '100%',
        height: 0.35*height,
        marginTop: 0.01*height,
        backgroundColor: color.white,
        maxHeight: 0.35*height,
        fontSize: 15,
    },
    btnbox:{
        height:0.06*height,
        width: '100%',
        marginTop: 0.01*height,
        backgroundColor: '#000'
    },
    btn:{
        height: '100%',
        width: '100%',
    }
})

module.exports = styles;
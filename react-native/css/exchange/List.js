import {StyleSheet,Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');

import color from '../color'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    div:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 0.005*height,
        paddingBottom: 0.005*height,
        paddingLeft: 0.005*width,
        paddingRight: 0.005*width,
        // backgroundColor: 'black',
    },

})

module.exports = styles;
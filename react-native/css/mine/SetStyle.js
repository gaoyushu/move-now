import { StyleSheet,Dimensions } from 'react-native'

const { height,width } = Dimensions.get('window');

const styles = StyleSheet.create({
    top: {
        width: width,
        height: height*0.082,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bigOne: {
        height:height,
        backgroundColor: '#F0F0F0',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        width: width*0.0625,
        height: height*0.035,
        marginRight: 0.354*width,
        marginLeft: 0.020*width
    },
    bigTwo: {
        width: width,
        height: height*0.094,
        backgroundColor: 'white',
        paddingLeft: width*0.083,
        marginBottom: height*0.008,
        justifyContent: 'center'
    }
});


module.exports = styles;

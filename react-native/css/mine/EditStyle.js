import { StyleSheet,Dimensions } from 'react-native'

const { height,width } = Dimensions.get('window');

const styles = StyleSheet.create({
    big: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    top: {
        width:width ,
        height: height*0.082,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imga: {
        width: width*0.063,
        height: height*0.035,
        marginRight: width*0.313,
        marginLeft: width*0.021
    },
    imgb: {
        width: width*0.25,
        height: height*0.141,
        borderRadius: width*0.25/2,
        marginTop: height*0.05
    },
    bigOne: {
        width: width,
        height: height*0.234,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    bigTwo: {
        width: width,
        height: height*0.293,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: height*0.012
    },
    bigThree: {
        width: width,
        height: height*0.094,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    texta: {
        width: width*0.21,
        fontSize: 25,
        paddingTop: height*0.023,
        paddingLeft: width*0.083,
        paddingBottom: height*0.023
    },
    textb: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: width*0.625,
        height: height*0.053,
        fontSize: 20,
        marginLeft: width*0.042,
        marginTop: height*0.014
    },
    bigFour: {
        width: width,
        height: height*0.094,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    textc: {
        width: width*0.208,
        fontSize: 25,
        paddingTop: height*0.023,
        paddingLeft: width*0.083,
        paddingBottom:  height*0.023
    },
    textd: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: width*0.625,
        height: height*0.053,
        fontSize: 20,
        marginLeft: width*0.042,
        marginTop: 0.014*height
    },
    bigFive: {
        width: width,
        height: height*0.094,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    texte: {
        width: width*0.208,
        fontSize: 25,
        paddingTop: height*0.023,
        paddingLeft: width*0.083,
        paddingBottom: height*0.023
    },
    textf: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: width*0.625,
        height: height*0.053,
        fontSize: 20,
        marginLeft: 0.042*width,
        marginTop: height*0.014
    },
    bottom: {
        width: width,
        height: 0.076*height,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

module.exports = styles;

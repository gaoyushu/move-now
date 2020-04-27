import { StyleSheet ,Dimensions} from 'react-native'

const { height,width } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 0.082*height,
        paddingRight: width*0.041,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 0.052*width,
        borderColor: '#F0F0F0',
        borderWidth: 0.5
    },
    top: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    topa: {
        width: width,
        height: height*0.082,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imgOne: {
        width: width*0.0625,
        height: height*0.035,
        marginRight: 0.3125*width,
        marginLeft: 0.02*width
    },
    bigOne: {
        borderColor: '#F0F0F0',
        width: width,
        height: height*0.311,
        backgroundColor: 'white',
        borderWidth: 0.5,
        alignItems: 'center',
        paddingTop: height*0.008
    },
    bigOnea: {
        width: width*0.896,
        height: height*0.295,
        backgroundColor: 'white',
        borderBottomWidth: 6,
        borderBottomColor: '#F0F0F0'
    },
    bigOneb: {
        width: width*0.896,
        height: height*0.07,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    bigOnec: {
        borderRadius: width*0.09375/2,
        width: width*0.09375,
        height:height*0.053,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOne: {
        fontSize: 19,
        marginLeft: 0.03125*width,
        marginRight: 0.03125*width
    },
    textTwo: {
        fontSize: 16,
        color: 'gray',
        marginTop: 0.003517*height
    },
    textThree: {
        fontSize: 22,
        marginTop: 0.006*height,
        marginBottom: 0.027*height
    },
    bigOned: {
        height: 0.129*height,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bigOnee: {
        width: 0.240*width,
        height: 0.106*height,
        borderRightColor: '#8BCCA1',
        borderRightWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigOnef: {
        width: 0.635*width,
        height: 0.129*height,
        justifyContent: 'center'
    },
    textFour: {
        fontSize: 18,
        color: "#8BCCA1",
        marginLeft: 0.02*width,
        marginRight: 0.006*width
    },
    bigTwo: {
        borderColor: '#F0F0F0',
        width: width,
        height: 0.264*height,
        backgroundColor: 'white',
        borderWidth: 0.5,
        alignItems: 'center',
        paddingTop: 0.008*height
    },
    bigTwoa: {
        width: 0.896*width,
        height: 0.246*height,
        backgroundColor: 'white',
        borderBottomWidth: 6,
         borderBottomColor: '#F0F0F0'
    },
    bigTwob: {
        width: 0.896*width,
        height: 0.07*height,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    bigTwoc: {
        borderRadius: width*0.09375/2,
        width: width*0.09375,
        height:height*0.053,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFive: {
        fontSize: 19,
        marginLeft: 0.03125*width,
        marginRight: 0.03125*width
    },
    textSix: {
        fontSize: 16,
        color: 'gray',
        marginTop: 0.003517*height
    },
    bigTwod: {
        height: 0.129*height,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 0.023*height
    },
    bigTwoe: {
        width: 0.240*width,
        height: 0.11*height,
        borderRightColor: '#8BCCA1',
        borderRightWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigTwof: {
        width: 0.635*width,
        height: 0.129*height,
        justifyContent: 'center'
    },
    textSeven: {
        fontSize: 18,
        color: "#8BCCA1",
        marginLeft: 0.02*width,
        marginRight: 0.01*width
    },
    bigThree: {
        width: width,
        height: 0.328*height,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#F0F0F0',
        alignItems: 'center',
        paddingTop: 0.016*height
    },
    bigThreea: {
        width: 0.896*width,
        height: 0.293*height,
        backgroundColor: 'white',
        borderBottomWidth: 6,
        borderBottomColor: '#F0F0F0',
        paddingTop: 0.023*height
    },
    bigThreeb: {
        marginTop: 0.023*height,
        width: 0.896*width,
        height: 0.064*height,
        backgroundColor: "#F0F0F0",
        paddingLeft: 0.042*width,
        justifyContent: "center"
    },
    textEight: {
        fontSize: 22,
        color: '#57A099',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

    bigThreec: {
        backgroundColor: 'white',
        width: 0.896*width,
        height: 0.07*height,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bigThreed: {
        width: 0.167*width,
        height: 0.041*height,
        backgroundColor: "#8bcca1",
        marginRight: 0.02*width,
        borderRadius: 0.055*width/2,
        // flexDirection:'row',
        // justifyContent: "center",
        // alignItems: 'center',
        paddingTop:5,
        textAlign:'center',
        fontSize: 19,
        color: 'white'
    },
    bigThreee: {
        width: 0.167*width,
        height: 0.041*height,
        backgroundColor: "#8bcca1",
        marginRight: 0.041*width,
        borderRadius: 0.055*width/2,
        paddingTop:5,
        // justifyContent: "center",
        // alignItems: 'center',
        fontSize: 19, 
        color: 'white'
    },
    bigFour: {
        borderColor: '#F0F0F0',
        width: width,
        height: 0.176*height,
        backgroundColor: 'white',
        borderWidth: 0.5,
        alignItems: 'center',
        paddingTop: 0.016*height
    },
    bigFoura: {
        width: 0.896*width,
        height: 0.141*height,
        backgroundColor: 'white',
        borderBottomWidth: 6,
        borderBottomColor: '#F0F0F0',
    },
    textNine: {
        fontSize: 21,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    bigFourb: {
        marginTop: 0.016*height,
        width: 0.896*width,
        height: 0.064*height,
        backgroundColor: "#F0F0F0",
        paddingLeft: 0.042*width,
        justifyContent: "center"
    }
})

module.exports = styles;

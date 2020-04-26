import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bigOne: {
        height: 853,
        backgroundColor: '#F0F0F0',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        width: 30,
        height: 30,
        marginRight: 170,
        marginLeft: 10
    },
    bigTwo: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        paddingLeft: 40,
        marginBottom: 7,
        justifyContent: 'center'
    }
});


module.exports = styles;

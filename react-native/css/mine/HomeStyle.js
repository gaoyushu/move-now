import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    all:{
      flex:1,
      backgroundColor: '#F0F0F0', 
      flexDirection: "column", 
      justifyContent: 'flex-start', 
      alignItems: 'center' 
    },
    one:{
      backgroundColor: "#8bcca1", 
      width: '100%', 
      height: 170, 
      flexDirection: 'row', 
      justifyContent: 'center' 
    },
    onepa:{
      fontSize: 25, marginTop: 55, marginLeft: 15, color: '#fff'
    },
    onepb:{
      fontSize: 20, marginTop: 15, marginLeft: 15, color: '#fff'
    },
    imgOne:{
      width: 100, 
      height: 100, 
      borderRadius: 50, 
      marginLeft: 60, 
      marginTop: 45
    },
    two:{
      width: '100%', 
      height: 75, 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
    twoinner:{
      width: 157,
      height: 75, 
      backgroundColor: 'white', 
      marginLeft: 0, 
      alignItems: 'center' 
    },
    three:{
      marginTop: 7, 
      width: '100%', 
      height: 115, 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
    threeinner:{
      width: 238, 
      backgroundColor: 'white', 
      height: 115, 
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignItems: 'center'
    },
    imgTwo:{
      width: 55, 
      height: 55, 
      marginLeft: 50, 
      marginRight: 20, 
      marginTop: 5
    },
    four:{
      marginTop: 7, 
      width: '100%', 
      height: 261, 
      flexDirection: "column", 
      justifyContent: 'flex-start'
    },
    fourinner:{
      width: '100%', 
      paddingLeft: 40, 
      height: 80, 
      backgroundColor: 'white', 
      marginBottom: 7, 
      justifyContent: 'center' 
    },
    login:{
      width: '100%', 
      height: 65, 
      marginTop: 10, 
      justifyContent: 'center', 
      alignItems: 'center' 
    }
    
  });
  
  module.exports=styles;
  
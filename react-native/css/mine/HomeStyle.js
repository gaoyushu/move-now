import { StyleSheet ,Dimensions} from 'react-native'

const { height,width } = Dimensions.get('window');

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  one: {
    backgroundColor: "#8bcca1",
    width: width,
    height: height*0.2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  onepa: {
    fontSize: 20,
    marginTop: height*0.065,
    marginLeft: width*0.05,
    color: '#fff'
  },
  onepb: {
    fontSize: 15,
    marginTop: height*0.018,
    marginLeft: width*0.057,
    color: '#fff'
  },
  imgOne: {
    width:width*0.23,
    height: height*0.13,
    borderRadius: width*0.23/2,
    marginLeft: width*0.125,
    marginTop: height*0.05
  },
  two: {
    width: '100%',
    height: height*0.09,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  twoinner: {
    width: width*0.33,
    height: height*0.09,
    backgroundColor: 'white',
    marginLeft: 0,
    alignItems: 'center'
  },
  three: {
    marginTop: height*0.007,
    width: width,
    height: height*0.135,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  threeinner: {
    width: width*0.496,
    backgroundColor: 'white',
    height: height*0.135,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imgTwo: {
    width: width*0.114,
    height: height*0.064,
    marginLeft: width*0.104,
    marginRight: width*0.042,
    marginTop: height*0.006
  },
  four: {
    marginTop: height*0.008,
    width: width,
    height: height*0.306,
    flexDirection: "column",
    justifyContent: 'flex-start'
  },
  fourinner: {
    width: width,
    paddingLeft: width*0.083,
    height: height*0.094,
    backgroundColor: 'white',
    marginBottom: height*0.008,
    justifyContent: 'center'
  },
  login: {
    width: width,
    height: height*0.076,
    marginTop: height*0.012,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

module.exports = styles;

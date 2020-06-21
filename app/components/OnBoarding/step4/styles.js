import { StyleSheet } from 'react-native';
import metrics from '../../../config/metrics';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: metrics.screenHeight/1.3,
  },
  text: {
    fontFamily: "Lato-Regular",
  fontSize: 35,
  fontWeight: "bold",
  fontStyle: "normal",
  lineHeight: 40,
  letterSpacing: 0,
  textAlign: "left",
  color: "#0f0a40",
  marginTop:40
  },
  text2:{
    fontFamily: "Lato-Regular",
    fontSize: 19,
    fontWeight: "800",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: "center",
    color: "#0f0a40",
    marginTop:30
  }
});

export default styles;

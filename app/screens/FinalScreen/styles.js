import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: AppStyles.color.COLOR_WHITE,
    flex: 1,
  },
  container: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc400',
  },
  conText: {
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Black',
    fontSize: 35,
  },
  selectedText: {
    color: '#262626',
    fontSize: 19,
    paddingVertical: 10,
    fontFamily: 'Lato-Medium',
  },
  line: {
    height: 1,
    backgroundColor: AppStyles.color.COLOR_WHITE,
    width: metrics.screenWidth,
  },
  detailView: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffc400',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 26,
  },
  imageView: {
    width: 62,
    height: 74,
    borderRadius: 14,
  },
  userDetailsView: {
    marginHorizontal: 22,
    justifyContent: 'center',
    width: metrics.screenWidth / 1.5,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  nameText: {
    color: '#262626',
    fontFamily: 'Lato-Black',
    fontSize: 25,
  },
  descText: {
    paddingVertical: 10,
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Medium',
    fontSize: 14,
  },
  locationText: {
    color: AppStyles.color.COLOR_GREY,
    fontFamily: 'Lato-Medium',
    fontSize: 15,
    paddingLeft: 8,
  },
  locImage: {
    tintColor: AppStyles.color.COLOR_GREY,
  },
  personView: {
    marginVertical: 20,
    // marginHorizontal: 36,
  },
  contactText: {
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Black',
    fontSize: 14,
  },
  userDetails: {
    backgroundColor: '#f0f3f4',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 14,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  circleView: {
    backgroundColor: '#44b6d9',
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontFamily: 'Lato-Medium',
    fontSize: 24,
    color: AppStyles.color.COLOR_WHITE,
  },
  numberView: {
    marginHorizontal: 18,
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  numText: {
    color: '#262626',
    fontSize: 14,
    fontFamily: 'Lato-bold',
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Black',
  },
  scannerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    color: '#a0a0a0',
    fontSize: 14,
    fontFamily: 'Lato-Medium',
  },

  titleStyle: {
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Black',
    fontSize: 30,
  },
  jobType: {
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Black',
    fontSize: 20,
    marginTop: 5,
  },
  hourView: {
    flexDirection: 'row',
    marginVertical: 20,
    width: metrics.screenWidth - 45,
    alignItems:'center'
  },
  hourText: {
    color: 'rgb(255,113,113)',
    fontFamily: 'Lato-Black',
    fontSize: 18,
    width: 98,
  },
  dateText: {
    color: 'rgb(15,10,64)',
    fontFamily: 'Lato-Medium',
    fontSize: 15,
    textAlign: 'right',
    width: metrics.screenWidth/1.5,
  },
});

export default styles;

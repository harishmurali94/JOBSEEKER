import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import normalize from '../../lib/normalize';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: AppStyles.color.COLOR_WHITE,
  },
  container: {
    flex: 1,
  },
  conView: {
    marginHorizontal: 18,
  },
  titleText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 28,
    color: AppStyles.color.COLOR_BLUE_INDIGO,
  },
  locationText: {
    fontFamily: 'Lato-Medium',
    color: '#a0a0a0',
    fontSize: 14,
    marginVertical: 15,
    marginHorizontal: 12,
  },
  costText: {
    color: '#ff7171',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
  dateText: {
    fontFamily: 'Lato-Medium',
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontSize: 12,
  },
  dummyline: {
    marginHorizontal: 6,
  },
  costDateView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardView: {
    height: 84,
    backgroundColor: '#f0f3f4',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginVertical: 14,
  },
  cardText: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: '#a0a0a0',
    textAlign:"center"
  },
  cardValueText: {
    fontSize: normalize(12),
    fontFamily: 'Lato-Regular',
    fontWeight:"bold",
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    marginTop: 12,
    textAlign:"center",
    // width:"90%"
  },
  descView: {
    marginHorizontal: 18,
    marginBottom: 85,
  },
  descText: {
    lineHeight: 29,
    fontSize: 14,
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: 'Lato-Regular',
  },
  buttonView: {
    backgroundColor: '#ffc400',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 81,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  applyText: {
    fontSize: 25,
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  titleImageView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  locationView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;

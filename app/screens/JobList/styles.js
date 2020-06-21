import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: AppStyles.color.COLOR_WHITE,
  },
  container: {
    flex: 1,
  },
  listView: {
    backgroundColor: AppStyles.color.COLOR_WHITE,
    marginHorizontal: 8,
    marginVertical: 6,
    borderRadius: 6,
    padding: 10,
    elevation: 1,
    shadowOpacity: 0.1,
    flexDirection: 'row',
  },
  squareView: {
    backgroundColor: AppStyles.color.COLOR_YELLOW,
    borderRadius: 6,
    height: 100,
    width: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemView: {
    marginHorizontal: 12,
    width: metrics.screenWidth / 1.5,
  },
  titleText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontSize: 20,
  },
  dateView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width:metrics.screenWidth/1.5
  },
  imageView: {
    marginBottom: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  locText: {
    fontFamily: 'Lato-Medium',
    color: '#a0a0a0',
    fontSize: 13,
    marginHorizontal: 12,
  },
  dateText: {
    fontFamily: 'Lato-Medium',
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontSize: 12,
  },
  dateTextDays: {
    width: '60%',
    fontFamily: 'Lato-Medium',
    color: AppStyles.color.COLOR_BLUE_INDIGO,
    fontSize: 12,
  },
  dummyline: {
    marginHorizontal: 6,
  },
  costView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: metrics.screenWidth / 1.5,
  },
  costText: {
    color: '#ff7171',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 18,
  },
  topView: {
    backgroundColor: AppStyles.color.COLOR_WHITE,
    height: 60,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  topTitleText: {
    flex: 1,
    fontSize: 19,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  bottomView: {
    width: metrics.screenWidth / 1.5,
  },
});

export default styles;

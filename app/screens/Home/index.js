import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import * as getInformationsActions from '../../actions/getInformationActions';
import { useFocusEffect } from '@react-navigation/native';
import * as getBannerActions from '../../actions/getBannerActions';
import * as getDistinctJobTypesActions from '../../actions/getDistinctJobTypesActions';
import * as getEarningsActions from '../../actions/getEarningsActions';

export default function Home() {
  const dispatch = useDispatch();
  const [greetings, setGreetings] = useState('');
  const userid = useSelector(state => state.createProfileReducer.userID);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      let data = {
        JobSeekerId: userid,
      };
      dispatch(getInformationsActions.getInformationRequest(data));
      dispatch(getBannerActions.requestBanner());
      dispatch(getDistinctJobTypesActions.requestDistinctJob());
      dispatch(getEarningsActions.getEarningsRequest(data));
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch, userid]),
  );

  useEffect(() => {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      setGreetings('Hello! Good morning');
    } else if (curHr < 17) {
      setGreetings('Hello! Good afternoon');
    } else {
      setGreetings('Hello! Good evenging');
    }
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text>{greetings}</Text>
    </View>
  );
}

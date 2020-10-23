import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import * as getNotificationActions from '../../actions/getNotificationActions';

export default function Notifications() {
  const dispatch = useDispatch();
  const userid = useSelector(state => state.createProfileReducer.userID);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      let data = {
        JobSeekerId: userid,
      };
      dispatch(getNotificationActions.getNotificationRequest(data));
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch, userid]),
  );

  useEffect(() => {
    let data = {
      JobSeekerId: userid,
    };
    dispatch(getNotificationActions.getNotificationRequest(data));
  }, [dispatch, userid]);
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
}

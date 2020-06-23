import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../config/images';
import * as getMyJobsAction from '../../actions/getMyJobsAction';
import Moment from 'moment';
import normalize from '../../lib/normalize';
import { useFocusEffect } from '@react-navigation/native';
import ModalLoader from '../../components/ModalLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function MyJobs(props) {
  const userid = useSelector(state => state.createProfileReducer.userID);
  const loader = useSelector(state => state.loadingReducer.isLoading);
  const data = useSelector(state => state.getMyJobsReducer.myJobs);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      let data = {
        jobType: 1,
        userId: userid,
      };
      dispatch(getMyJobsAction.getMyJobsRequest(data));

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch, userid]),
  );

  function showConfirmation(item) {
    // [{"Jobstatus": "Pending", "WorkingDays": [[Object]], "jobId": 35, "jobLocation": "Dcd", "jobStartson": "2020-06-06T00:00:00", "jobTitle": "Ccdc"}]
    if (item.Jobstatus === 'Pending') {
      props.navigation.navigate('JobDetail', {
        itemId: item.jobId,
        fromMyJobs: true,
      });
    } else {
      props.navigation.navigate('FinalScreen', { jobId: item.jobId });
    }
  }
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const [titles, setTitles] = useState([
    {
      title: 'All',
      isSelected: true,
    },
    {
      title: 'Type',
      isSelected: false,
    },
    {
      title: 'Location',
      isSelected: false,
    },
  ]);

  function onRefreshItems() {
    let data = {
      jobType: 1,
      userId: userid,
    };
    dispatch(getMyJobsAction.getMyJobsRequest(data));
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        {data === null && (
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={images.MyJobs.myjob}
              style={{ width: normalize(300), height: normalize(300) }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              No jobs applied yet.
            </Text>
          </View>
        )}
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <JobComponent item={item} showConfirmation={showConfirmation} />
          )}
          keyExtractor={item => item.id}
          onRefresh={onRefreshItems}
          refreshing={loader}
        />
        <ModalLoader visible={loader} />
      </View>
    </SafeAreaView>
  );
}

function JobComponent({ item, showConfirmation }) {
  const workingDays = item.WorkingDays.map(days => {
    return days.DayName;
  });
  const dayText =
    workingDays.length === 7 ? 'Mon - Sun' : workingDays.toString();
  return (
    <TouchableOpacity
      style={styles.listView}
      onPress={() => showConfirmation(item)}>
      <View style={styles.itemView}>
        <View>
          <View style={styles.costView}>
            <Text numberOfLines={1} style={styles.titleText}>
              {item.jobTitle}
            </Text>
            <View style={styles.hiredView}>
              <Text style={styles.hiredText}>{item.Jobstatus}</Text>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image source={images.job.location} />
            <Text style={styles.locText}>{item.jobLocation}</Text>
          </View>
          <View>
            <View style={styles.dateView}>
              <Text style={styles.dateText}>
                {Moment(item.jobStartson).format('DD MMM')}
              </Text>
              <Text style={styles.dateText}>
                {Moment(item.jobEndson).format('DD MMM')}
              </Text>
            </View>
            <View style={styles.costView}>
              <Text style={styles.dateText}>{dayText}</Text>
              <Text style={styles.costText}>{item.salary}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

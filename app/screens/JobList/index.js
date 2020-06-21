import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import normalize from '../../lib/normalize';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import images from '../../config/images';
import * as findJobsActions from 'app/actions/findJobsActions';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function JobList(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userid = useSelector(state => state.createProfileReducer.userID);
  const data = useSelector(state => state.jobListReducer.jobList);

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

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      let data = {
        jobtype: 0,
        userId: userid,
      };
      dispatch(findJobsActions.findJobRequest(data));

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch, userid]),
  );

  setNewTitles = newTitle => {
    setTitles(newTitle);
  };

  function onJobPress(item) {
    props.navigation.push('JobDetail', { itemId: item.jobId });
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* {data === null ||
        (data.length === 0 && (
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
              No Jobs Available.
            </Text>
          </View>
        ))} */}

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <JobComponent
            item={item}
            navigation={navigation}
            onJobPress={onJobPress}
          />
        )}
        keyExtractor={item => item.id}
        style={{ paddingBottom: 50 }}
      />
    </SafeAreaView>
  );
}

function TitleComponent({ item, index, titles, passTitles }) {
  const togglePress = (titles, indexP) => {
    const newArr = titles.map((item, index) => {
      if (indexP === index) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    passTitles(newArr);
  };
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        onPress={() => {
          togglePress(titles, index);
        }}>
        <Text
          style={[
            styles.topTitleText,
            { color: item.isSelected ? '#0f0a40' : '#c8d1d3' },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function JobComponent({ item, onJobPress }) {
  const workingDays = item.WorkingDays.map(days => {
    return days.DayName;
  });
  const dayText =
    workingDays.length === 7 ? 'Mon - Sun' : workingDays.toString();
  return (
    <TouchableOpacity style={styles.listView} onPress={() => onJobPress(item)}>
      <View style={styles.squareView}>
        <Image
          source={{ uri: item.jobIcon }}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={styles.itemView}>
        <View>
          <Text numberOfLines={1} style={styles.titleText}>
            {item.jobTitle}
          </Text>
          <View style={styles.imageView}>
            <Image source={images.job.location} />
            <Text style={styles.locText}>{item.jobLocation}</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.dateView}>
              <Text style={styles.dateText}>
                {Moment(item.jobStartson).format('DD MMM')}
              </Text>
              <Text style={styles.dateText}>
                {Moment(item.jobEndson).format('DD MMM')}
              </Text>
              {/* <Text style={styles.dateTextDays}>{"Mon,Tue,Wed,Thur,Fri,Sat,Sun"}</Text> */}
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

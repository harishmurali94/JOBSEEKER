import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import styles from './styles';
import * as jobDetailAction from '../../actions/getJobDetails';
import * as applyJobsActions from '../../actions/applyJobsActions';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../config/images';
import ModalLoader from '../../components/ModalLoader';
import Moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function JobDetail(props) {
  const jobDetail = useSelector(
    state => state.getJobDetailReducer.jobDetails[0],
  );

  console.log('jobDetail', JSON.stringify(jobDetail, null, 2));
  const userid = useSelector(state => state.createProfileReducer.userID);
  const loader = useSelector(state => state.loadingReducer.isLoading);
  const iTEmID = props.route.params.itemId;
  const fromMyJobs = props.route.params.fromMyJobs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobDetailAction.getJobDetailRequest({ JobID: iTEmID }));
    return () => {
      dispatch(jobDetailAction.clearDetails());
    };
  }, [iTEmID]);

  const applyJob = () => {
    let data = {
      userId: userid,
      jobId: iTEmID,
    };
    if (fromMyJobs) {
      // props.navigation.goBack();
    } else {
      dispatch(applyJobsActions.applyJobRequest(data));
      props.navigation.goBack();
    }
  };

  const leftPress = () => {
    props.navigation.goBack();
    // dispatch(jobDetailAction.clearDetails());
  };

  const dayText = jobDetail
    ? jobDetail.workingDays.length === 33
      ? 'Mon - Sun'
      : jobDetail.workingDays
    : '';

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavigationHeader isBack={true} leftPress={leftPress} />
      <ModalLoader visible={loader} />
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {jobDetail && Object.keys(jobDetail).length > 0 && (
            <View>
              <View style={styles.conView}>
                <View style={styles.titleImageView}>
                  <Text style={styles.titleText}>
                    {jobDetail.jobTitle || ''}
                  </Text>
                  {/* <Image source={images.job.bookmark} /> */}
                </View>
                <View style={styles.locationView}>
                  <Image source={images.job.location} />
                  <Text style={styles.locationText}>
                    {jobDetail.jobLocation}
                  </Text>
                </View>
                <View style={styles.costDateView}>
                  <Text style={styles.costText}>{jobDetail.salary}</Text>
                  <View style={styles.costDateView}>
                    <Text style={styles.dateText}>
                      {Moment(jobDetail.jobStartson).format('DD MMM')}
                    </Text>
                    <Text style={styles.dateText}>
          {' '}-{' '}{Moment(jobDetail.jobEndson).format('DD MMM')}
                    </Text>
                    <Text style={styles.dummyline}>|</Text>
                    <Text style={styles.dateText}>{dayText}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardView}>
                <View>
                  <Text style={styles.cardText}>Gender</Text>
                  <Text style={styles.cardValueText}>{jobDetail.gender}</Text>
                </View>
                <View>
                  <Text style={styles.cardText}>Qualification</Text>
                  <Text style={styles.cardValueText}>
                    {jobDetail.Qualification}
                  </Text>
                </View>
                <View>
                  <Text style={styles.cardText}>Experience</Text>
                  <Text style={styles.cardValueText}>
                    {jobDetail.experience}
                  </Text>
                </View>
                <View>
                  <Text style={styles.cardText}>Age</Text>
                  <Text style={styles.cardValueText}>{jobDetail.age}</Text>
                </View>
                <View>
                  <Text style={styles.cardText}>Nationality</Text>
                  <Text style={styles.cardValueText}>
                    {jobDetail.nationality}
                  </Text>
                </View>
              </View>
              <View style={styles.descView}>
                <Text style={styles.descText}>{jobDetail.jobDescription}</Text>
              </View>
            </View>
          )}
        </ScrollView>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={applyJob}>
            <Text style={styles.applyText}>
              {fromMyJobs ? 'Pending' : 'Apply now'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

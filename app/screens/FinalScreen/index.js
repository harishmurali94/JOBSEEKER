import React, { useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import ModalLoader from '../../components/ModalLoader';
import * as hireJobDetailAction from '../../actions/hiredJobDetailAction';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import images from '../../config/images';
import Moment from 'moment';

export default function FinalScreen(props) {
  const jobId = props.route.params.jobId;
  const loader = useSelector(state => state.loadingReducer.isLoading);
  const hiredJobDetails = useSelector(
    state => state.hiredJobDetailReducer.hiredJobDetail[0],
  );
  const dispatch = useDispatch();

  const leftPress = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    let data = {
      jobId: jobId,
    };
    dispatch(hireJobDetailAction.hiredJobDetailRequest(data));
  }, [dispatch, jobId]);

  const callNumber = phone => {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  let myStr = hiredJobDetails?.Name;
  let name = '';
  let nameTrimed = '';
  if (myStr) {
    let matches = myStr.match(/\b(\w)/g);
    name = matches.join('');
    nameTrimed = name.slice(0, 2);
  }
  console.warn('TESTINGGGGG',hiredJobDetails)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NavigationHeader isBack={true} isColor={true} leftPress={leftPress} />
      <ModalLoader visible={loader} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.titleStyle}>
            {(hiredJobDetails && hiredJobDetails.bussinessName) ||
              'CoLeague Solutions'}
          </Text>
          <Text style={styles.jobType}>
            {(hiredJobDetails && hiredJobDetails.jobTitle) ||
              'Part Time Cleaner'}
          </Text>
          <View style={styles.locationView}>
            <Image source={images.job.location} style={styles.locImage} />
            <Text style={styles.locationText}>{hiredJobDetails?.location}</Text>
          </View>

          <View style={styles.hourView}>
            <Text style={styles.hourText}>{hiredJobDetails?.Salary}</Text>
            <Text style={styles.dateText} numberOfLines={1}>
              {Moment(hiredJobDetails?.jobStartson).format('DD MMM')} |{' '}
              {hiredJobDetails?.workingDays}
            </Text>
          </View>
          <View style={styles.personView}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.contactText}>Contact Details</Text>
              <Text style={[styles.contactText, { color: 'blue' }]}>
                {hiredJobDetails?.Jobstatus}
              </Text>
            </View>
            <View style={styles.userDetails}>
              <View style={styles.circleView}>
                <Text style={styles.circleText}>{nameTrimed}</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.name}>
                  {(hiredJobDetails && hiredJobDetails.Name) ||
                    'Mr. Dennis Chua'}
                </Text>
                <TouchableOpacity
                  onPress={() => callNumber(hiredJobDetails.contactNumber)}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={images.Phone.phone} />
                    <Text style={styles.numText}>
                      {hiredJobDetails?.contactNumber}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.scannerView}>
          <Image
            source={{ uri: hiredJobDetails?.QRCode }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={styles.qrText}>Show this QR code when you report</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

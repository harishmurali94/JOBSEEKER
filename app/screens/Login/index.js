import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  Text,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import TermsCondition from '../../components/TermsCondition';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import ModalLoader from '../../components/ModalLoader';
import styles from './styles';
import Images from '../../config/images';
import { setI18nConfig } from '../../lib/languageSwitching';
import SplashScreen from 'react-native-splash-screen';
import normalize from '../../lib/normalize';
import messaging from '@react-native-firebase/messaging';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

let fcmToken;

export default function Login(props) {
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      e => setError(e.message),
    );
  }, []);

  const loader = useSelector(state => state.loadingReducer.isLoading);
  const lan = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [termsModal,setTermsModal] = useState(false);

  setI18nConfig(lan);

  const submit = async () => {
    // dispatch(languageActions.changeLanguage('en'));

    const regex =/^\+65(6|8|9)\d{7}$/;
    const numberValid = regex.test(`+${65}${phone}`);

    if (phone === '') {
      setErrorMessage('no_number');
      setIsError(true);
    } else if (!numberValid) {
      setErrorMessage('valid_number');
      setIsError(true);
    } else {
      setIsError(false);

      const fcmToken = await messaging().getToken();
      // props.navigation.navigate("OTP",{phonenumber:phone,fcmToken:fcmToken})
      let data = {
        countryCode: '+65',
        mobileNumber: phone,
        deviceRegId: fcmToken,
      };
      dispatch(loginActions.requestLogin(data, false));
    }
  };

  const showTerms = () =>{
    setTermsModal(true)
  };

  const closeTerms =() =>{
    setTermsModal(false)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <View style={styles.image_view}>
            <Image source={require('./img/login.png')} resizeMode="contain" style={{width:normalize(300),height:normalize(300)}}/>
            <CustomText
              style={{
                fontFamily: 'Lato-Regular',
                fontWeight: 'bold',
                color: 'rgb(38,38,38)',
                width: '100%',
                textAlign: 'center',
                marginTop: normalize(10),
              }}
              text={'find_talent_a'}
            />
            <CustomText
              style={{
                fontFamily: 'Lato-Regular',
                fontWeight: 'bold',
                color: 'rgb(38,38,38)',
                width: '70%',
                textAlign: 'center',
              }}
              text={'find_talent_b'}
            />
          </View>
          <View style={{ paddingTop: normalize(40)}}>
            <CustomText style={styles.verify_text} text={'verify_number'} />
            <CustomText style={styles.verify_text} text={'number'} />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <CustomText style={styles.text_send_1} text={'text_send_1'} />
              <CustomText style={styles.otp_text} text={'OTP'} />
              <CustomText style={styles.text_send_2} text={'text_send_2'} />
            </View>

            <View
              style={{
                borderColor: isError?"red": 'rgb(240,243,244)',
                borderWidth: 1,
                flexDirection: 'row',
                borderRadius: 5,
                marginTop: normalize(15),
              }}>
              <View
                style={{
                  backgroundColor: 'rgb(200,209,211)',
                  flexDirection: 'row',
                  height: 50,
                  borderRightWidth: 1,
                  borderRightColor: 'rgb(240,243,244)',
                  flex: 2,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}>
                <Image
                  source={Images.boarding_step_1.flag}
                  style={{ marginTop: 17 }}
                />
                <TextInput
                  value={'+65'}
                  editable={false}
                  style={{
                    color: 'rgb(38,38,38)',
                    fontWeight: 'bold',
                    fontSize:18,
                    marginLeft: 3,
                    borderRightWidth: 0,
                  }}
                  // style={styles.otp_textbox_countrycode}
                />
              </View>

              <TextInput
                onChangeText={phone => setPhone(phone)}
                style={{
                  flex: 7,
                  height: 50,
                  color: 'rgb(38,38,38)',
                  fontWeight: 'bold',
                  fontSize:18,
                  paddingLeft: 15,
                }}
                maxLength = {8}
                // style={styles.textbox_phone_number}
                keyboardType="phone-pad"
              />
            </View>
            {isError && (
              <CustomText
                style={{ color: 'red', marginTop: 10 }}
                text={errorMessage}
              />
            )}
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image source={Images.login.agree} />
              <Text
                style={{
                  height: 20,
                  fontFamily: 'Lato',
                  fontSize: 13,
                  marginLeft: 5,
                  lineHeight: 20,
                  letterSpacing: 0,
                  color: 'rgb(160,160,160)',
                }}>
                I agree to the
              </Text>
              <TouchableOpacity onPress={showTerms}>
              <Text
                style={{
                  height: 20,
                  fontFamily: 'Lato',
                  fontSize: 13,
                  fontWeight: '900',
                  fontStyle: 'normal',
                  lineHeight: 20,
                  letterSpacing: 0,
                  textDecorationLine: 'underline',
                  color: '#0f0a40',
                  marginLeft: 3,
                }}>
                Terms and Conditions
              </Text>
              </TouchableOpacity>
            </View>
           
            
          </View>
          
          {/* <View
          style={styles.button_view}> */}

          {/* </View> */}
          </KeyboardAvoidingView>
          <View style={{marginBottom:10}}>
              <CustomButton
                onPressed={() => {
                  submit();
                }}
                buttonText={'get_otp'}
              />
            </View>
         
      </View>
      <TermsCondition visibility={termsModal} closeTerms={closeTerms}/>
      <ModalLoader visible={loader} />
    </SafeAreaView>
  );
}

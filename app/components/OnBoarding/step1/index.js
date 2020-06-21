import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CustomSelect from '../../CustomSelectComponent';
import CustomButton from '../../CustomButton';
import CustomText from '../../CustomText';
import CustomTextInput from '../../CustomTextInput';
import styles from './style';
import Images from '../../../config/images';
import Moment from 'moment';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ScrollView } from 'react-native-gesture-handler';

const Step1 = props => {
  return (
    <ScrollView
      style={{ marginBottom: 40 }}
      showsVerticalScrollIndicator={false}>
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 33,
          marginTop: 25,
          color: 'rgb(15,10,64)',
        }}
        text={'nice_to_meet'}
      />
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 12,
          color: 'rgb(38,38,38)',
          marginTop: 9,
        }}
        text={'last_step'}
      />
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          color: !!props.userNameError ? 'red' : 'rgb(38,38,38)',
          marginTop: 15,
        }}
        text={'name'}
        error={!!props.userNameError}
      />
      <CustomTextInput
        onChangeText={props.changeText}
        isLeftImage={true}
        translateText={true}
        keyText={'username'}
        placeholder={'your_name'}
        error={!!props.userNameError}
        value={props.username}
        leftImage={Images.boarding_step_1.user_textbox}
      />
      {/* {props.userNameError !== '' && <Text style={{color:"red"}}>{props.userNameError}</Text>} */}
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          color: !!props.userGenderError ? 'red' : 'rgb(38,38,38)',
          marginTop: 15,
          marginBottom: 6,
        }}
        error={!!props.userGenderError}
        text={'gender'}
      />
      <View style={{ flexDirection: 'row' }}>
        <CustomSelect
          textKey={'male'}
          selected={props.isMale}
          onPress={props.selectGender}
          rightImage={Images.boarding_step_1.boy}
          backgroundColor={
            props.isMale ? 'rgba(84, 112, 254, 1)' : 'transparent'
          }
        />
        <CustomSelect
          textKey={'female'}
          selected={props.isFemale}
          onPress={props.selectGender}
          style={{ marginLeft: 20 }}
          rightImage={Images.boarding_step_1.girl}
          backgroundColor={
            props.isFemale ? 'rgba(242, 95, 227, 1)' : 'transparent'
          }
        />
      </View>
      {/* {props.setUserGenderError !== '' && (
        <Text style={{ color: 'red' }}>{props.userGenderError}</Text>
      )} */}
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          color: !!props.userDOBError ? 'red' : 'rgb(38,38,38)',
          marginTop: 15,
        }}
        text={'dob'}
        error={!!props.userDOBError}
      />
      <TouchableOpacity onPress={props.showDatePicker}>
        <CustomTextInput
          onChangeText={props.changeText}
          editable={false}
          isLeftImage={true}
          leftImage={Images.boarding_step_1.present}
          isRightImage={true}
          rightImage={Images.boarding_step_1.calendar}
          value={props.selectedDate}
          error={!!props.userDOBError}
          placeholder={'DD/MM/YYYY'}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={props.isDatePickerVisible}
        mode="date"
        minDate={Moment().subtract(500, 'years')}
        maxDate={Moment().subtract(18, 'years')}
        maximumDate={new Date().setDate(new Date().getDate() - 6574)}
        onConfirm={props.handleConfirm}
        onCancel={props.hideDatePicker}
      />
      {/* {props.userDOBError !== '' && (
        <Text style={{ color: 'red' }}>{props.userDOBError}</Text>
      )} */}
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          color: !!props.userMailError ? 'red' : 'rgb(38,38,38)',
          marginTop: 15,
        }}
        text={'email'}
        error={!!props.userMailError}
      />

      <CustomTextInput
        onChangeText={props.changeText}
        isLeftImage={true}
        leftImage={Images.boarding_step_1.mail}
        keyText={'usermail'}
        translateText={true}
        placeholder={'recieve_notification'}
        value={props.userEmail}
        keyboardType={'email-address'}
        error={!!props.userMailError}
      />
      {/* {props.userMailError !== '' && (
        <Text style={{ color: 'red' }}>{props.userMailError}</Text>
      )} */}

      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          color: 'rgb(38,38,38)',
          marginTop: 15,
          marginBottom: 6,
        }}
        text={'select_language'}
      />
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <CustomSelect
          textKey={'en'}
          selected={props.isEnglish}
          onPress={props.selectLanguage}
          withBorder={true}
          rightImage={Images.boarding_step_1.english}
          backgroundColor={props.isEnglish ? '#69E4A6' : 'transparent'}
        />
        <CustomSelect
          textKey={'ch'}
          selected={props.isChinese}
          onPress={props.selectLanguage}
          withBorder={true}
          style={{ marginLeft: 20 }}
          rightImage={Images.boarding_step_1.chinese}
          backgroundColor={props.isChinese ? '#69E4A6' : 'transparent'}
        />
      </View>
    </ScrollView>
  );
};

export default Step1;

import React, { useState } from 'react';
import { View, SafeAreaView, Keyboard } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import ModalLoader from '../../components/ModalLoader';
import * as languageActions from 'app/actions/languageAction';
import * as createProfileActions from 'app/actions/createProfileActions';

import { setI18nConfig } from '../../lib/languageSwitching';
import StepIndicatorComponent from '../../components/StepIndicatorCompoent';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import Step1 from '../../components/OnBoarding/step1';
import Step3 from '../../components/OnBoarding/step3';
import Moment from 'moment';
import Step2 from '../../components/signupStep2';
import Step4 from '../../components/OnBoarding/step4';

export default function OnBoarding(props) {
  const lan = useSelector(state => state.languageReducer.language);
  const mrts = useSelector(state => state.getLocationReducer.areaMRTS);
  const zones = useSelector(state => state.getLocationReducer.areaZones);
  const jobTypes = useSelector(state => state.getJobTypeReducer.jobTypes);
  const phone = useSelector(state => state.loginReducer.mobileNumber);
  const loader = useSelector(state => state.loadingReducer.isLoading);
  const jobTypeLimit = useSelector(state => state.getJobTypeReducer.limit);
  const tempUserId = useSelector(state => state.loginReducer.tempUserId);
  const profileStatus = useSelector(
    state => state.createProfileReducer.profileCreated,
  );

  const [isModalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [position, setPosition] = useState(0);
  const [progressPosition, setProgressPosition] = useState(1);

  //step 1 states
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isEnglish, setEnglish] = useState(true);
  const [isChinese, setChinese] = useState(false);
  const [userNameError, setUserNameError] = useState('');
  const [userMailError, setUserEmailError] = useState('');
  const [userGenderError, setUserGenderError] = useState('');
  const [userDOBError, setUserDOBError] = useState('');
  const [tempJobSelectedArray, setTempJobTypeArray] = useState([]);

  const [jobsTypes, setjobsTypes] = useState(jobTypes);
  const [tempJobTypes, setTempJobTypes] = useState(jobTypes);
  const [nodataStep3, setNodataStep3] = useState(false);
  const [step1Click, setStep1Click] = useState(false);

  const [totalSelectedArea, setTotalSelectedArea] = useState([]);
  const [choseArea, setChoseArea] = useState([]);
  const [choseMRT, setChoseMRT] = useState([]);

  const [zoneArea, setZoneArea] = useState(zones);
  const [mrtArea, setmrtArea] = useState(mrts);

  const [buttonText, setButtonText] = useState('next');

  const dispatch = useDispatch();

  React.useEffect(() => {
    setZoneArea(zones);
  }, [zones]);

  React.useEffect(() => {
    setmrtArea(mrts);
  }, [mrts]);

  setI18nConfig(lan);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setSelectedDate(Moment(date).format('DD/MM/YYYY'));
    setUserDOBError('');
  };

  const changeText = (text, key) => {
    if (key === 'username') {
      setUsername(text);
      if (setStep1Click && text !== '') {
        setUserNameError('');
      }
    }
    if (key === 'usermail') {
      setUserEmail(text);
    }
  };

  const selectGender = selectGender => {
    setUserGenderError('');
    if (selectGender === 'male') {
      setIsMale(true);
      setIsFemale(false);
      setGender('male');
    } else {
      setIsMale(false);
      setIsFemale(true);
      setGender('female');
    }
  };

  const selectJobType = job => {
   
    let temp = [...tempJobSelectedArray];
    const tempIndex = temp.indexOf(job);
    if (tempIndex === -1) {
      if (temp.length < jobTypeLimit) temp.push(job);
      else alert('Maximum Limit reached');
    } else {
      temp.splice(tempIndex, 1);
    }

    const filterJobTypes = jobsTypes.map(jobs => {
      if (temp.includes(jobs.jobType)) jobs.isSelected = true;
      else jobs.isSelected = false;
      return jobs;
    });
    setTempJobTypeArray(temp);
    Keyboard.dismiss();
    setjobsTypes(filterJobTypes);
  };

  const searchJobType = e => {
    let text = e.toLowerCase();
    let filteredName = tempJobTypes.filter(item => {
      return item.jobType.toLowerCase().startsWith(text);
    });
    console.log("filteredName",JSON.stringify(filteredName,null,2));
    if (!text || text === '') {
      setjobsTypes(tempJobTypes);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      setNodataStep3(true);
    } else if (Array.isArray(filteredName)) {
      setjobsTypes(filteredName);
      setNodataStep3(false);
    }
  };

  const updatedTotalList = totalSelectedArray => {
    setTotalSelectedArea(totalSelectedArray);
  };

  const passSelectedArea = (index, mainIndex, type) => {
    const tempArray = type === 'zone' ? zoneArea : mrtArea;
    const subList = type === 'zone' ? 'arealist' : 'arealistmrt';
    const listText = type === 'zone' ? 'areaName' : 'mrtAreaName';

    console.log('');

    const subArray = tempArray[mainIndex][subList];

    const subArrayChange = subArray.map((sub, subindex) => {
      if (subindex === index) {
        sub.isSelected = true;
      }
      return sub;
    });
    tempArray[mainIndex][subList] = subArrayChange;
    if (type === 'zone') {
      setZoneArea(tempArray);
    } else {
      setmrtArea(tempArray);
    }
  };

  function removeSelectedItem(list) {
    const tempArray = list.type === 'zone' ? zoneArea : mrtArea;
    const subList = list.type === 'zone' ? 'arealist' : 'arealistmrt';
    const listText = list.type === 'zone' ? 'areaName' : 'mrtAreaName';
    const mainIndex = list.index;

    const subArray = tempArray[mainIndex][subList];

    const subArrayChange = subArray.map((sub, subindex) => {
      if (sub[listText] === list.text) {
        sub.isSelected = false;
      }
      return sub;
    });
    tempArray[mainIndex][subList] = subArrayChange;
    if (list.type === 'zone') {
      setZoneArea(tempArray);
    } else {
      setmrtArea(tempArray);
    }
  }

  const selectLanguage = language => {
    dispatch(languageActions.changeLanguage(language));
    if (language === 'en') {
      setEnglish(true);
      setChinese(false);
    } else {
      setEnglish(false);
      setChinese(true);
    }
  };

  const addStep = () => {
    const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (position === 0) {
      const isValid = validateStep1();
      setStep1Click(true);

      if (isValid) {
        setPosition(position + 1);
        setProgressPosition(progressPosition + 1);
        setUserNameError('');
        setUserGenderError('');
        setUserEmailError('');
        setUserDOBError('');
      } else {
        if (username === '') {
          setUserNameError('Please enter your name');
        } else {
          setUserNameError('');
        }

        if (gender === '') {
          setUserGenderError('Please choose your gender');
        } else {
          setUserGenderError('');
        }
        if (userEmail === "") {
          setUserEmailError('');
          
        }else{
          if(!mailRegex.test(userEmail)){
            setUserEmailError('Please enter valid mailid');
          }else{
            setUserEmailError('');
          }
          
        }

        if (selectedDate === '') {
          setUserDOBError('Please enter you date of birth');
        } else {
          setUserDOBError('');
        }
      }
    } else if (position < 2) {
      setProgressPosition(progressPosition + 1);
      setPosition(position + 1);
      setjobsTypes(tempJobTypes);
    } else if (position === 2) {
     
      setPosition(position + 1);
      setProgressPosition(progressPosition + 1);
    } else {
      const areas = totalSelectedArea.map(area => {
        return area.areaID;
      });

      const jobsArray = jobsTypes
        .filter(job => {
          return job.isSelected;
        })
        .map(ids => {
          return ids.jobTypeId;
        });
      console.log("ADSASdasdsadasdasdasd",tempUserId);
      
      let data = {
        userId: tempUserId,
        jsName: username,
        gender: gender,
        dateofbirth: selectedDate,
        eMail: userEmail,
        languageId: 0,
        countryCode: '+65',
        mobileNo: phone,
        AreaId: areas,
        jobType: jobsArray,
      };
      dispatch(createProfileActions.createProfileRequest(data));
    }
  };

  function validateStep1() {
    const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mailValid = (userEmail !== "" && !mailRegex.test(userEmail));

    if (username === '' || gender === '' || selectedDate === '' || mailValid) {
      return false;
    } else {
      return true;
    }
  }

  function leftPress() {
    if (position > 0) {
      setPosition(position - 1);
      setProgressPosition(progressPosition - 1);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationHeader
        isBack={position > 0 ? true : false}
        leftPress={leftPress}
      />
      <ModalLoader visible={loader} />
      <View style={{ flex: 1, paddingHorizontal: 26 }}>
        <StepIndicatorComponent position={progressPosition} />
        {position === 0 && (
          <Step1
            changeText={changeText}
            showDatePicker={showDatePicker}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
            selectGender={selectGender}
            selectLanguage={selectLanguage}
            selectedDate={selectedDate}
            isMale={isMale}
            username={username}
            userEmail={userEmail}
            userNameError={userNameError}
            userMailError={userMailError}
            userGenderError={userGenderError}
            userDOBError={userDOBError}
            isFemale={isFemale}
            isEnglish={isEnglish}
            isChinese={isChinese}
            isDatePickerVisible={isDatePickerVisible}
          />
        )}
        {position === 1 && (
          <View style={{ flex: 1, marginBottom: 30 }}>
            <Step2
              mrtArea={mrtArea}
              zoneArea={zoneArea}
              passSelectedArea={passSelectedArea}
              totalSelectedArea={totalSelectedArea}
              removeSelectedItem={removeSelectedItem}
              updatedTotalList={updatedTotalList}
              // totalSelectedArea={totalSelectedArea}
            />
          </View>
        )}
        {position === 2 && (
          <Step3
            jobTypes={jobsTypes}
            onChangeText={searchJobType}
            selectJobType={selectJobType}
          />
        )}
        {position === 3 && <Step4 />}
      </View>
      <View style={{ marginBottom: 40 }}>
        <CustomButton
          onPressed={addStep}
          buttonText={
            position < 2 ? 'next' : position === 2 ? 'finish' : 'find'
          }
        />
      </View>
    </SafeAreaView>
  );
}

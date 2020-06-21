import React from 'react';
import Images from '../../../config/images';
import CustomTextInput from '../../CustomTextInput';
import CustomSelectNew from '../../CustomSelectNew';
import { FlatList, View } from 'react-native';
import CustomText from '../../CustomText';

const RenderList = ({ item, index, selectJob }) => {
  return (
    <CustomSelectNew
      textKey={item.jobType}
      selected={item.isSelected}
      textTranslate={true}
      onPress={selectJob}
      isRightImage={true}
      dynamicImage={true}
      rightImage={item.jobIcon}
      backgroundColor={item.isSelected ? '#69E4A6' : 'transparent'}
    />
  );
};

const Step3 = props => {
  // const [jobTypeArray,setJibTypeArray] = useState(props.jobTypes);
  return (
    <View style={{ flex: 1 }}>
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 25,
          marginBottom: 8,
          color: 'rgb(15,10,64)',
        }}
        text={'prefer_jobs'}
      />
      <CustomTextInput
        placeholder={'Search'}
        isRightImage={true}
        rightImage={Images.boarding_step_1.search}
        {...props}
        style={{ marginTop: 21 }}
      />
      <View style={{ height: 21 }} />

      <FlatList
        keyboardShouldPersistTaps="always"
        numColumns={2}
        data={props.jobTypes}
        extraData={props.jobTypes}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => {
          return (
            <RenderList
              item={item}
              index={index}
              selectJob={props.selectJobType}
            />
          );
        }}
      />
    </View>
  );
};

export default Step3;

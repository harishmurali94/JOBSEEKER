import React, { useState, memo } from 'react';
import {
  Dimensions,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../../CustomText';
import CustomTextInput from '../../CustomTextInput';
import Images from '../../../config/images';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SelectArea from '../../OnBoarding/selectArea';
import SelectMRT from '../../OnBoarding/selectMRT';

const renderTabBar = props => {
  return (
    <TabBar
      style={{
        backgroundColor: 'transparent',
        elevation: 0,
        height: 50,
        padding: 0,
        margin: 0,
      }}
      labelStyle={{
        color: 'black',
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: '#0F0A40',
      }}
      renderLabel={({ route, focused, color }) => {
        let image;
        if (route.key === 'first') {
          image = Images.boarding_step_1.interface;
        } else {
          image = Images.boarding_step_1.train;
        }

        return (
          <View style={{ flexDirection: 'row' }}>
            <Image source={image} />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                marginLeft: 4,
                textTransform: 'capitalize',
                fontWeight: 'bold',
                fontFamily: 'Lato-Regular',
                color: '#0F0A40',
              }}>
              {route.title}
            </Text>
          </View>
        );
      }}
     
      {...props}
      indicatorStyle={{ backgroundColor: '#FFC400', height: 2 }}
    />
  );
};

const Step2 = props => {
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Select By Area' },
    { key: 'second', title: 'Select By MRT' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <SelectArea areas={props.zoneArea} {...props} />;
      case 'second':
        return <SelectMRT mrts={props.mrtArea} {...props} />;
      default:
        return null;
    }
  };

  // const renderScene = SceneMap({
  //   first: FirstRoute,
  //   second: SecondRoute,
  // });
  const initialLayout = { width: Dimensions.get('window').width };
  return (
    <>
      <CustomText
        style={{
          fontFamily: 'Lato-Regular',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 25,
          marginBottom: 8,
          color: 'rgb(15,10,64)',
        }}
        text={'select_preferred'}
      />

      <TouchableOpacity onPress={() => props.searchModal(true)}>
        <CustomTextInput
          placeholder={'Search'}
          isRightImage={true}
          rightImage={Images.boarding_step_1.search}
          // onChangeText={props.searchText}
          editable={false}
        />
      </TouchableOpacity>

      {/* {props.totalSelectedArea.length > 0 && (
        <FlatList
          // horizontal={true}
          data={props.totalSelectedArea}
          extraData={props.totalSelectedArea}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => props.removeItem(item, index)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )} */}

      {props.totalSelectedArea.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {props.totalSelectedArea.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: 110,
                  height:30,
                  backgroundColor: 'grey',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                }}
                onPress={() => props.removeItem(item, index)}>
                <Text style={{ color: '#0F0A40' }}>{item.name}</Text>
                <Image
                  source={Images.boarding_step_1.close}
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default Step2;

import React, { useState, useCallback, memo, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import CustomSelect from '../../CustomSelectComponent';
import Images from '../../../config/images';

export default function SelectArea(props) {
  const [mainIndex, setMainIndex] = useState(0);
  const [subAreas, setSubArea] = useState(props.areas[0]?.arealist||[]);
  function passSubArea(index, areaList) {
    setSubArea(areaList);
    setMainIndex(index);
  }

  function selectArea(text) {
    props.selectedArea(text, subAreas, mainIndex);
  }
  function selectedHeader(index) {
    props.selectedZone(index);
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={props.areas}
        extraData={props.areas}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HeaderAreas
            item={item}
            index={index}
            props={props}
            passSubArea={passSubArea}
            selectedZone={selectedHeader}
          />
        )}
      />
      <FlatList
        data={subAreas}
        numColumns={3}
        contentContainerStyle={{paddingBottom:100}}
        renderItem={({ item, index }) => (
          <CustomSelect
            textKey={item.areaName}
            selected={item.isSelected}
            index={index}
            onPress={selectArea}
            textTranslate={true}
            style={{ marginVertical: 10, justifyContent: 'space-between',width:"30%",marginVertical:5,marginHorizontal:5 }}
            backgroundColor={item.isSelected ? '#69E4A6' : 'transparent'}
          />
        )}
      />
    </View>
  );
}

const HeaderAreas = memo(
  ({ item, index, props, passSubArea, selectedZone }) => {
    function selectArea() {
      passSubArea(index, item.arealist);
      selectedZone(index);
    };
    
    return (
      <TouchableOpacity
        style={{
          width: 'auto',
          height: 30,width:75,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          marginTop: 15,
          marginBottom: 15,
          borderBottomWidth: 2,
          borderBottomColor: item.isSelected ? '#FFC400': 'transparent',
        }}
        onPress={selectArea}>
        <Text
          style={{
            borderWidth: 0,
           
            height:30,
            fontWeight: 'bold',
           
            color: item.isSelected ? '#F54E4E' : '#C8D1D3',
            fontSize: 15,
          }}>
          {item.ZoneName}
        </Text>
      </TouchableOpacity>
    );
  },
);

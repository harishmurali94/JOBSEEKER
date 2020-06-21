import React, { useState, useCallback, memo, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import CustomSelect from '../../CustomSelectComponent';
import Images from '../../../config/images';

export default function SelectMRT(props) {
  const [mainIndex,setMainIndex] = useState(0)
  const [subMRT, setSubMRT] = useState(props.mrts[0]?.arealistmrt || []);
  function passSubArea(index, areaList) {
    setSubMRT(areaList);
    setMainIndex(index);
  }

  function selectArea(text) {
    props.selectedMRTArea(text, subMRT,mainIndex);
    console.log("mainIndex +++ ",mainIndex)
  }
  function selectedHeader(index) {
     props.selectedMRT(index)
  }

  return (
    <View>
      <FlatList
         horizontal={true}
         data={props.mrts}
         extraData={props.mrts}
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
        data={subMRT}
        numColumns={3}
        contentContainerStyle={{paddingBottom:100}}
        renderItem={({ item, index }) => (
          <CustomSelect
          textKey={item.mrtAreaName}
          selected={item.isSelected}
          index={index}
          onPress={selectArea}
          textTranslate={true}
          style={{ marginVertical: 10, justifyContent: 'space-between',marginRight:2}}
          backgroundColor={item.isSelected?"#69E4A6":"transparent"}
          type="other"
        />
        )}
      />
    </View>
  );
}

const HeaderAreas = memo(({ item, index, props, passSubArea,selectedZone }) => {
 
  function selectArea() {
    passSubArea(index, item.arealistmrt);
    selectedZone(index);
    // item.selected = true;
  }
  return (
    <TouchableOpacity
        style={{
          width: 'auto',
          height: 30,
          width:250,
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
            fontSize: 14,
          }}>
          {item.mrtZoneName}
        </Text>
      </TouchableOpacity>
    // <TouchableOpacity
    //   style={{
    //     width: 'auto',
    //     height: 30,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginRight:10,
    //     marginTop:15,
    //     marginBottom:15
    //     // backgroundColor:
    //   }}
    //   onPress={selectArea}>
    //   <Text style={{        borderWidth:0,
    //     borderBottomWidth:2,
    //     fontWeight:'bold',
    //     borderBottomColor:item.isSelected ? "#F54E4E":"transparent",color:item.isSelected ? '#F54E4E' : '#C8D1D3',fontSize:15 }}>{item.mrtZoneName}</Text>
    // </TouchableOpacity>
  );
});
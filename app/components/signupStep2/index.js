/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Tabs from '../../components/tabs';
import Tags from '../../components/tags';
import SelectList from '../../components/select';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import SearchComponent from '../../components/SearchComponent';
import Images from '../../config/images';

import Styles from './style';

let selectedAreas = [];
const Step2 = props => {
  const [areaByZone, setAreaByZone] = useState(props.zoneArea);
  const [areaBymrt, setAreaByMrt] = useState(props.mrtArea);
  const [selectedLists, setSelectedList] = useState(props.totalSelectedArea);
  const [selected, setSelected] = useState('zone');
  const [selectedArea, setSelectedArea] = useState('');
  const [areas, setArea] = useState([]);
  const [dummy, setDummy] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const getZoneList = () => {
    if (selected === 'mrt') {
      return areaBymrt.map(item => item.mrtZoneName);
    }
    return areaByZone.map(item => item.ZoneName);
  };

  const removeItem = item => {
    let temp = selectedLists;
    const indexArray = temp.findIndex(std => std.text === item.text);
    temp.splice(indexArray, 1);
    setDummy(!dummy);
    setSelectedList(temp);
    props.removeSelectedItem(item);
    props.updatedTotalList(selectedLists);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAreaList = () => {
    let areaList;
    if (selected === 'zone' && selectedArea === '') {
      areaList = areaByZone[0];
    } else if (selected === 'mrt' && selectedArea === '') {
      areaList = areaBymrt[0];
    } else if (selected === 'mrt' && selectedArea !== '') {
      areaList = areaBymrt.filter(item => item.mrtZoneName === selectedArea)[0];
    } else {
      areaList = areaByZone.filter(item => item.ZoneName === selectedArea)[0];
    }
    if (areaList) {
      if (selected === 'mrt') {
        return areaList.arealistmrt.map(item => {
          return { ...item };
        });
      }
      return areaList.arealist.map(item => {
        return { ...item };
      });
    }
  };

  function _isContains(json, value) {
    let contains = false;
    Object.keys(json).some(key => {
      contains =
        typeof json[key] === 'object'
          ? _isContains(json[key], value)
          : json[key] === value;
      return contains;
    });
    return contains;
  }

  const selectedArray = (text, index, areaID) => {
    let mainIndex;
    if (selectedLists.length < 3) {
      const tempArray = selected === 'zone' ? areaByZone : areaBymrt;
      const arrayList = selected === 'zone' ? 'ZoneName' : 'mrtZoneName';
      if (selectedArea === '') {
        mainIndex = 0;
      } else {
        const filteredA = tempArray.findIndex(
          std => std[arrayList] === selectedArea,
        );
        mainIndex = filteredA;
      }
      const hasValue = _isContains(selectedAreas, text);
      if (!hasValue) {
        selectedAreas.push({
          text: text,
          index: mainIndex,
          type: selected,
          areaID: areaID,
        });
      }
      // console.log("selected array details",index, mainIndex, selected);
      setSelectedList(selectedAreas);
      setDummy(!dummy);
      props.passSelectedArea(index, mainIndex, selected);
      props.updatedTotalList(selectedLists);
    } else {
      alert('Maximum Limit Reached');
    }
  };

  const selectedLocation = (locationData, index) => {
    if (selectedLists.length < 3) {
      const hasValue = _isContains(selectedAreas, locationData.name);
      if (!hasValue) {
        selectedAreas.push({
          text: locationData.name,
          index: locationData.mainIndex,
          type: selected,
          areaID: '',
        });
      }
      setDummy(!dummy);
      setSelectedList(selectedAreas);
      props.updatedTotalList(selectedLists);
      props.passSelectedArea(
        locationData.subIndex,
        locationData.mainIndex,
        selected,
      );
    } else {
      alert('Maximum Limit Reached');
    }
  };

  const updateAreas = data => {
    data.map(item => {
      if (item.selected) {
        if (selected === 'mrt') {
          insertArea(item.mrtAreaName);
        } else {
          insertArea(item.areaName);
        }
      }
    });
  };

  const insertArea = value => {
    let indexOfItem = areas.indexOf(value);
    if (indexOfItem === -1) {
      setArea([...areas, value]);
    } else {
      var newAreas = [...areas];
      delete newAreas[indexOfItem];
      setArea[newAreas];
    }
  };

  console.log("getAreaList +++++ ",getAreaList());

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

      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <CustomTextInput
          placeholder={'Search'}
          isRightImage={true}
          rightImage={Images.boarding_step_1.search}
          // onChangeText={props.searchText}
          editable={false}
        />
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Tabs
          data={['By Area', 'By MRT']}
          onChange={value => {
            if (value === 'By Area') {
              setSelected('zone');
            } else {
              setSelected('mrt');
            }
            setSelectedArea('');
            setArea([]);
          }}
        />
        <View style={Styles.tabContent}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 23 }}>
            {selectedLists.length > 0 &&
              selectedLists.map(item => (
                <Tags removeItem={removeItem} content={item} />
              ))}
          </ScrollView>

          <Tabs
            data={getZoneList()}
            type="secondary"
            onChange={selected => {
              setSelectedArea(selected);
            }}
            selectedArea={selectedArea}
          />
          <SelectList
            data={getAreaList()}
            type={selected}
            selectedArea={selectedArea}
            onChange={data => updateAreas(data)}
            passSelectedArea={selectedArray}
          />
        </View>
        <SearchComponent
          closeModal={closeModal}
          visibility={openModal}
          areaByZone={areaByZone}
          areaBymrt={areaBymrt}
          selectedLocation={selectedLocation}
          selected={selected}
        />
      </View>
    </>
  );
};

export default Step2;

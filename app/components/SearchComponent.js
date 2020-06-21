import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import Images from '../config/images';
import Modal from 'react-native-modal';

export default function SearchComponent(props) {
  const [areaBymrt, setAreaByMrt] = useState(props.areaBymrt);
  const [areaByZone, setAreaByZone] = useState(props.areaByZone);
  const [areas, setAreas] = useState(props.areaBymrt);

  const [templist, setTemplist] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    let neededArray = [];
    let subLocation = props.selected === 'zone' ? 'arealist' : 'arealistmrt';
    let subName = props.selected === 'zone' ? 'areaName' : 'mrtAreaName';
    let arrayList = props.selected === 'zone' ? areaByZone : areaBymrt;
    arrayList.map((area, mainIndex) => {
      area[subLocation].map((mrt, subIndex) => {
        neededArray.push({
          name: mrt[subName],
          mainIndex: mainIndex,
          subIndex: subIndex,
        });
      });
      //   console.log('props.selected', JSON.stringify(areas,null,2));
    });

    // console.log('neededArray', neededArray);

    setList(neededArray);
    setTemplist(neededArray);
  }, [props.selected]);

  const selectedData = (item, index) => {
    console.log('item in', JSON.stringify(item, null, 2));
    props.selectedLocation(item, index);
    setList(templist);
    props.closeModal();
  };

  const searchArea = e => {
    let text = e.toLowerCase();

    let filteredName = templist.filter(item => {
      return item.name.toLowerCase().startsWith(text);
    });

    if (!text || text === '') {
      setList(templist);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      //   setNodataStep3(true);
    } else if (Array.isArray(filteredName)) {
      setList(filteredName);
      //   setNodataStep3(false);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visibility}
      onRequestClose={() => {
        // props.closeModal();
        setList(templist);
      }}>
      <SafeAreaView style={{ flex: 1, paddingVertical: 30 }}>
        <View style={{ padding: 20 }}>
          <View style={{ paddingVertical: 10 }}>
            <CustomTextInput
              placeholder={'Search'}
              isRightImage={true}
              rightImage={Images.boarding_step_1.search}
              onChangeText={searchArea}
              //  onBlur={props.closeModal}
            />
          </View>
          <FlatList
           keyboardShouldPersistTaps='always'
            data={list}
            extraData={list}
            style={{ marginBottom: 70 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => selectedData(item, index)}
                style={{
                  height: 40,
                  flex: 1,
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'grey',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'black' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

// const SearchList = ({ list, mainIndex, selectedData }) => {
//   return (
//     <FlatList
//       // contentContainerStyle={{flex:1}}
//       data={list.arealistmrt}
//       extraData={list}
//       renderItem={({ item, index }) => (
//         <TouchableOpacity
//           style={{
//             height: 40,
//             borderBottomWidth: 0.5,
//             borderBottomColor: 'grey',
//             justifyContent: 'center',
//           }}>
//           <Text style={{ color: 'black' }}>{item['mrtAreaName']}</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

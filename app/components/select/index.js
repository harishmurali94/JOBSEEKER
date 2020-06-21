import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Styles from './style';
import normalize from '../../lib/normalize';

const { width } = Dimensions.get('window');
const SelectList = ({
  data,
  onChange,
  type,
  selectedArea,
  passSelectedArea,
}) => {
  const [items, setItems] = useState(data);
  const [dummy, setDummy] = useState(false);

  

  const onSelect = (item, index) => {
    console.log('item', item);
    const name = type === 'zone' ? 'areaName' : 'mrtAreaName';
    const getAreaId = type === 'zone' ? 'areaId' : 'mrtAreaId';
    setDummy(!dummy);
    passSelectedArea(item[name], index, item[getAreaId]);
  };
  useEffect(() => {
    setItems(data);
    console.log("items in select",data);
    console.log("items in items",items);
  }, [data]);
  return (
    <FlatList
      data={items}
      contentContainerStyle={[Styles.container, { paddingBottom: 80 }]}
      style={{ height: normalize(width / 1.2), marginBottom: 30 }}
      // style={{ height: width / 1.5, marginBottom: 20 }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[Styles.item, item.isSelected && Styles.selected]}
          onPress={() => onSelect(item, index)}>
          <Text style={{ fontWeight: item.isSelected ? 'bold' : '300' }}>
            {type !== 'zone' ? item.mrtAreaName : item.areaName}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SelectList;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Dimensions,
// } from 'react-native';
// import Styles from './style';
// import normalize from '../../lib/normalize';

// const { width } = Dimensions.get('window');
// const SelectList = ({
//   data,
//   onChange,
//   type,
//   selectedArea,
//   passSelectedArea,
// }) => {
//   const [items, setItems] = useState(data);
//   const [dummy, setDummy] = useState(false);

//   const onSelect = (item, index) => {
//     console.log('item', item);
//     const name = type === 'zone' ? 'areaName' : 'mrtAreaName';
//     const getAreaId = type === 'zone' ? 'areaId' : 'mrtAreaId';
//     setDummy(!dummy);
//     passSelectedArea(item[name], index, item[getAreaId]);
//   };
//   useEffect(() => {
//     setItems(data);
//   }, [data]);
//   return (
//     <FlatList
//       data={items}
//       contentContainerStyle={[Styles.container, { paddingBottom: 80 }]}
//       style={{ height: normalize(width / 1.2), marginBottom: 30 }}
//       // style={{ height: width / 1.5, marginBottom: 20 }}
//       renderItem={({ item, index }) => (
//         <TouchableOpacity
//           style={[Styles.item, item.isSelected && Styles.selected]}
//           onPress={() => onSelect(item, index)}>
//           <Text style={{ fontWeight: item.isSelected ? 'bold' : '300' }}>
//             {type !== 'zone' ? item.mrtAreaName : item.areaName}
//           </Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// export default SelectList;

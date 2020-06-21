import React from 'react';
import { Text } from 'react-native';
import { translate } from '../../lib/languageSwitching';


const CustomText = props => {
   const astrix = props.error ?  '*'  : ''
   const text = props.textTranslate? props.text: translate(props.text)

  return <Text style={props.style}>{`${text}${astrix}`}</Text>;
};

export default CustomText;

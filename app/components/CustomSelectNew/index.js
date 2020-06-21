import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import CustomText from '../CustomText';

export default function CustomSelectNew(props) {
  const imageURI = props.dynamicImage
    ? { uri: props.rightImage }
    : props.rightImage;
  return (
    <TouchableOpacity
      //   style={{ ...props.style }}
      style={{
        ...props.style,
        shadowColor: "#00000029",
        shadowOffset: {
          width: 0,
          height: 0
        },
         flexDirection: 'row',
        shadowRadius: 3,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        height: 53,
        width: '45%',
        marginVertical: 10,
        margin: 3,
        backgroundColor: props.selected
          ? 'rgb(105,228,166)'
          : 'rgba(255,255,255,0.16)',
        borderColor: props.selected ? 'rgb(105,228,166)' : 'rgba(0,0,0,0.16)',
      }}
      onPress={() => props.onPress(props.textKey)}>
      <Image
        source={imageURI}
        style={{ marginRight: 5, width: 20, height: 20 }}
        resizeMode="contain"
      />
      <CustomText
        style={{
          width:"70%",
          fontSize: 14,
          fontWeight: props.selected?"bold":"100",
          fontFamily:'Lato-Regular',
          color:
            props.selected && props.withBorder
              ? '#000000'
              : props.selected
              ? 'rgb(15,10,64)'
              : '#000000',
        }}
        text={props.textKey}
        textTranslate={props.textTranslate}
      />
    </TouchableOpacity>
  );
}

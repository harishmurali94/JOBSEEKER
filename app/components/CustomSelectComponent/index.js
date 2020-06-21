import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import CustomText from '../CustomText';

export default function CustomSelectComponent(props) {
  const imageURI = props.dynamicImage ? {uri:props.rightImage} : props.rightImage;
  return (
    <TouchableOpacity
      style={{ ...props.style }}
      onPress={() => props.onPress(props.textKey)}>
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 111,
          minWidth:75,
          borderWidth: 0.5,
          borderRadius: 5,
          borderColor: props.selected ? 'rgb(105,228,166)' : 'rgba(0,0,0,0.16)',
          paddingHorizontal: 20,
          backgroundColor: props.backgroundColor
        }}>
        {/* <View
            style={{
              backgroundColor: "#fff",
              borderColor:props.selected? "green":"grey",
              height:50,
              borderWidth:0.5,
              width:60

              
            }}
          > */}
        {/* {props.selected && props.withBorder &&  (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 15,
              height: 10,
              backgroundColor: 'rgb(105,228,166)',
              borderBottomRightRadius: 5,
            }}
          />
        )} */}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 0,
            alignItems: 'center',
          }}>
          <Image source={imageURI} style={{marginRight:15,width:20,height:20}} resizeMode="contain"/>
          <CustomText style={{
            color: (props.selected && props.withBorder) ? '#000000' : ((props.selected ? '#FFFFFF' : '#000000'))
          }}text={props.textKey} textTranslate={props.textTranslate}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

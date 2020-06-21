//This is an example code to show Image Icon in TextInput//
import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Image } from 'react-native';
import { translate } from '../../lib/languageSwitching';

export default function CustomTextInput(props) {
  const placeHolder = props.translateText ? translate(props.placeholder):props.placeholder;
  return (
    <View>
      <View style={[styles.SectionStyle,props.error ? styles.errorBorder : styles.normalBorder ]}>
        {props.isLeftImage && (
          <Image source={props.leftImage} style={styles.ImageStyle} />
        )}

        <TextInput
          style={{ flex: 1,color:"black" }}
          placeholder={placeHolder}
          editable={props.editable}
          underlineColorAndroid="transparent"
          onChangeText={data => props.onChangeText(data,props.keyText)}
          value={props.value}
          keyboardType={props.keyboardType}
          onBlur={props.onBlur}
        />
        {props.isRightImage && (
          <Image source={props.rightImage} style={styles.ImageStyle} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     margin: 10,
  //   },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240,243,244)',
    borderWidth: 0.5,
    height: 60,
    borderRadius: 5,
    padding:5,
    marginTop:5
  },
  errorBorder:{
    borderColor: 'red',
  },
  normalBorder:{
    borderColor: 'rgb(200,209,211)'
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 21,
    width: 34,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});

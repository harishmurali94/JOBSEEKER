import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import Styles from './style';
import Images from '../../config/images'


const Tags = ({content,removeItem}) =>{
    function remove(){
        removeItem(content);
    }
    return (
        <TouchableOpacity onPress={remove}>
        <View style={Styles.container}>
            <Text style={Styles.text}>{content.text}</Text>
                <Image source={Images.boarding_step_1.close} />
            
        </View>
        </TouchableOpacity>
    )
}

export default Tags;
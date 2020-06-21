import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import images from '../../../config/images';
import styles from './styles';

class step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  leftPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={images.postJob.like} /> */}
        <Text style={styles.text}>You're All Set</Text>
        <Image source={images.postJob.postJob} style={{marginTop:40}}/>
        <Text style={styles.text2}>Go ahead and grab a job</Text>
      </View>
    );
  }
}

export default step4;

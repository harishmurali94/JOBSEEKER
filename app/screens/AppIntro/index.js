import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import images from '../../config/images';
import * as appIntroActions from '../../actions/appIntroAction';
import { connect } from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';

const slides = [
  {
    key: 1,
    image: images.appIntro.one,
    text: 'Complete the work collect payment next day. No hassles',
  },
  {
    key: 2,
    image: images.appIntro.two,
    text: 'Set your preferred locations explore opportunities',
  },
  {
    key: 3,
    image: images.appIntro.three,
    text: 'Lot Of options Go ahead and grab an opportunity',
  },
];

class AppIntro extends React.Component {
  // componentDidMount() {
  //   setTimeout(function() {
  //     SplashScreen.hide();
  //   }, 1000);
  // }

  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={item.image}
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <View style={{ flex: 0.5 }} />
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignContent: 'center',
              marginHorizontal: 30,
            }}>
            <Text
              style={{
                color: '#0f0a40',
                fontWeight: 'Lato-Regular',
                fontWeight: 'bold',
                fontSize: 14,
                marginTop: 5,
                textAlign: 'center',
              }}>
              {item.text}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  _onDone = () => {
    this.props.changeIntroStatus();
  };
  _renderNextButton = () => {
    return (
      <View style={{width:80,height:40,alignItems:"center",backgroundColor:"orange",borderRadius:20}}>
        <Text style={{color:"black",fontFamily:"Lato-Regular",fontWeight:"bold",top:10,fontSize:16}}>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={{width:80,height:40,alignItems:"center",backgroundColor:"orange",borderRadius:20}}>
        <Text style={{color:"black",fontFamily:"Lato-Regular",fontWeight:"bold",top:10,fontSize:16}}>Done</Text>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        activeDotStyle={{backgroundColor:"black"}}
        onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    changeIntroStatus: () => {
      dispatch(appIntroActions.changeAppIntro());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppIntro);

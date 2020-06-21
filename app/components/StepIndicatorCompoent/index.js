import React from 'react';
import { Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Images from '../../config/images';

export default function StepIndicatorComponent(props) {
  const customStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: '#69E4A6',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#69E4A6',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#69E4A6',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#69E4A6',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#69E4A6',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#69E4A6',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#69E4A6',
  };

  putTickIndicator = state => {
    let image = '';
    if (state.stepStatus === 'finished') {
      image = Images.stepIndicator.completed;
    } else if (state.stepStatus === 'current') {
      image = Images.stepIndicator.current;
    }
    return <Image source={image} />;
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={props.position}
      stepCount={4}
      renderStepIndicator={state => {
        return putTickIndicator(state);
      }}
    />
  );
}

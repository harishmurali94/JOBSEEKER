import React, { useState, useEffect } from 'react';
import { View, Text, TouchableNativeFeedback, ScrollView,Image } from 'react-native';
import Styles from './style';
import Images from '../../config/images';

const Types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const Tabs = ({ data, onChange, type, selectedArea }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState(data);
  const TitleImage = {
    'By Area': Images.boarding_step_1.interface,
    'By MRT': Images.boarding_step_1.train,
  };

  useEffect(() => {
    setContent(data);
    if (type === Types.PRIMARY) {
      setActiveTab(0);
    }
  }, [data]);

  useEffect(() => {
    if (selectedArea === undefined || selectedArea === '') {
      setActiveTab(0);
    }
  }, [selectedArea]);

  const isPrimary = () => {
    return !type || type === Types.PRIMARY;
  };

  const isPrimaryActive = index => {
    return activeTab === index && isPrimary();
  };

  const isSecondary = () => {
    return type === Types.SECONDARY;
  };

  const isSecondaryActive = index => {
    return activeTab === index && isSecondary();
  };

  const renderContent = () => {
    return content.map((item, index) => (
      <TouchableNativeFeedback
        onPress={() => {
          setActiveTab(index);
          onChange(item);
        }}>
        <View
          style={[
            Styles.tabBtContent,
            isSecondary() && Styles.secondaryMargin,
          ]}>
          <View style={{ flexDirection: 'row' }}>
            {TitleImage[item] && (
              <Image source={TitleImage[item]} style={{ marginRight: 3 }} />
            )}
            <Text
              style={[
                isPrimary() && Styles.text,
                isPrimaryActive(index) && Styles.active,
                isSecondary() && Styles.secondary,
                isSecondaryActive(index) && Styles.secondaryActive,
              ]}>
              {item}
            </Text>
          </View>
          <View
            style={[
              isPrimaryActive(index) && Styles.activeStrip,
              isSecondaryActive(index) && Styles.secondaryActiveStrip,
            ]}
          />
        </View>
      </TouchableNativeFeedback>
    ));
  };

  const renderPrimaryContent = () => {
    return <View style={Styles.container}>{renderContent()}</View>;
  };

  const renderScondaryContent = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 23 }}>
        {renderContent()}
      </ScrollView>
    );
  };
  return (
    <View>
      {!type || type === Types.PRIMARY
        ? renderPrimaryContent()
        : renderScondaryContent()}
    </View>
  );
};

export default Tabs;

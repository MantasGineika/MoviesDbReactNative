import React from 'react';
import { View, Text } from 'react-native';
import BrowseScreen from '../screens/BrowseScreen';

function CategoryScroll(title) {
  return (
    <View>
      <Text title={title}></Text>
      <BrowseScreen />
    </View>
  );
}

export default CategoryScroll;

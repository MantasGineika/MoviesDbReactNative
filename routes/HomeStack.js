import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../app/screens/HomeScreen';
import BrowseScreen from '../app/screens/BrowseScreen';
import DetailsScreen from '../app/screens/DetailsScreen';
import PlayerScreen from '../app/screens/PlayerScreen';
import DataFetching from '../app/components/DataFetching';

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  BrowseScreen: {
    screen: BrowseScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  },
  PlayerScreen: {
    screen: PlayerScreen,
  },
};

const HomeStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BrowseScreen">
        <Stack.Screen name="HomeSceen" component={HomeScreen} />
        <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="DataFetching" component={DataFetching} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

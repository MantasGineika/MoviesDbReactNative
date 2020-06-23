import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import DataFetching from './app/components/DataFetching';
import { ScrollView } from 'react-native-gesture-handler';
import Navigator from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/screens/HomeScreen';
import BrowseScreen from './app/screens/BrowseScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import PlayerScreen from './app/screens/PlayerScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <Stack.Navigator style={styles.navigator}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
  navigationContainer: {
    flex: 1,
  },
  navigator: {
    color: 'red',
  },
});

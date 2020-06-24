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
import SafeViewAndroid from './app/components/SafeViewAndroid';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <NavigationContainer style={styles.navigationContainer}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

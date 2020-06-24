import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/HomeScreen';
import BrowseScreen from './app/screens/BrowseScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import PlayerScreen from './app/screens/PlayerScreen';
import SimilarMovieScreen from './app/screens/SimilarMovieScreen';
import SafeViewAndroid from './app/components/SafeViewAndroid';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <NavigationContainer style={styles.navigationContainer}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Browse Movies" component={BrowseScreen} />
          <Stack.Screen name="Movie Details" component={DetailsScreen} />
          <Stack.Screen name="Media Player" component={PlayerScreen} />
          <Stack.Screen name="Similar Movie" component={SimilarMovieScreen} />
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

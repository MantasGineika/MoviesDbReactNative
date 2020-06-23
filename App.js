import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import DataFetching from './app/components/DataFetching';
import { ScrollView } from 'react-native-gesture-handler';
import Navigator from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackrNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/screens/HomeScreen';
import BrowseScreen from './app/screens/BrowseScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import PlayerScreen from './app/screens/PlayerScreen';

// const Stack = createStackrNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.categoryContainer}>
    //     <BrowseScreen />
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="BrowseScreen" component={BrowseScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
  categoryContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
});

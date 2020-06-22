import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import MyButton from './app/components/MyButton';
import MovieCard from './app/components/MovieCard';
import BrowseScreen from './app/screens/BrowseScreen';
import CategoryScroll from './app/components/CategoryScroll';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BrowseScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

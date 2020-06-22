import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import MovieCard from '../components/MovieCard';
import CategoryScroll from '../components/CategoryScroll';

function BrowseScreen() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <SafeAreaView style={styles.container}>
        <CategoryScroll categoryTitle="Popular" />
        <CategoryScroll categoryTitle="Latest" />
        <CategoryScroll categoryTitle="Newest" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    width: '100%',
    borderColor: 'green',
    // borderWidth: 2,
    backgroundColor: '#000',
  },
});

export default BrowseScreen;

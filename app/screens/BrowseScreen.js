import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import MovieCard from '../components/MovieCard';

function BrowseScreen() {
  return (
    <ScrollView style={styles.scrollView} horizontal={true}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
    // width: '100%',
    height: 200,
  },
});

export default BrowseScreen;

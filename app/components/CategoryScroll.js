import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import BrowseScreen from '../screens/BrowseScreen';
import MovieCard from './MovieCard';

function CategoryScroll({ categoryTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>
      <ScrollView horizontal={true}>
        <MovieCard title="Avengers" />
        <MovieCard title="Titanic" />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
});

export default CategoryScroll;

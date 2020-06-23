import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import BrowseScreen from '../screens/BrowseScreen';
import MovieCard from './MovieCard';
import DataFetching from './DataFetching';

function CategoryScroll({ categoryTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{categoryTitle}</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.renderItemContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/w200//${item.poster_path}`,
              }}
            ></Image>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  categoryTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    alignSelf: 'flex-start',
  },
});

export default CategoryScroll;

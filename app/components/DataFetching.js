import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';

function DataFetching() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=65de017fef5ab1456020e1c4aa91d4d4'
      )
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={movie}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: 100,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    flex: 1,
  },
  renderItemContainer: {
    width: 200,
    flex: 1,
    height: 300,
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DataFetching;

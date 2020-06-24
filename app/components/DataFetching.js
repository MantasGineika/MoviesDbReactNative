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
import { TouchableOpacity } from 'react-native-gesture-handler';

function DataFetching({ navigation }) {
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [movieNow, setMovieNow] = useState([]);

  const getMoviePopular =
    'https://api.themoviedb.org/3/movie/popular?api_key=65de017fef5ab1456020e1c4aa91d4d4';
  const getMovieUpcoming =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=65de017fef5ab1456020e1c4aa91d4d4';
  const getMovieNow =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=65de017fef5ab1456020e1c4aa91d4d4';

  useEffect(() => {
    axios
      .get(getMoviePopular)
      .then((response) => {
        setMoviePopular(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(getMovieUpcoming)
      .then((response) => {
        setMovieUpcoming(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(getMovieNow)
      .then((response) => {
        setMovieNow(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Popular</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        data={moviePopular}
        renderItem={({ item }) => (
          <TouchableOpacity
            navigation={navigation}
            onPress={() =>
              navigation.navigate('DetailsScreen', {
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                poster_path1: item.poster_path,
                id: item.id,
              })
            }
          >
            <View style={styles.renderItemContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200//${item.poster_path}`,
                }}
              ></Image>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
      <Text style={styles.listTitle}>Upcoming</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        data={movieUpcoming}
        renderItem={({ item }) => (
          <TouchableOpacity
            navigation={navigation}
            onPress={() =>
              navigation.navigate('DetailsScreen', {
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                id: item.id,
              })
            }
          >
            <View style={styles.renderItemContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200//${item.poster_path}`,
                }}
              ></Image>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
      <Text style={styles.listTitle}>Now Playing</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        data={movieNow}
        renderItem={({ item }) => (
          <TouchableOpacity
            navigation={navigation}
            onPress={() =>
              navigation.navigate('DetailsScreen', {
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                id: item.id,
              })
            }
          >
            <View style={styles.renderItemContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200//${item.poster_path}`,
                }}
              ></Image>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '98%',
    backgroundColor: '#000',
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    flex: 1,
  },
  listTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  renderItemContainer: {
    width: 120,
    flex: 1,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  TouchableOpacity: {
    flex: 1,
  },
});

export default DataFetching;

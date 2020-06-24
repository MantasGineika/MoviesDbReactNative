import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import SafeViewAndroid from '../components/SafeViewAndroid';
import { ScrollView } from 'react-native-gesture-handler';

function DetailsScreen({ route, navigation }) {
  const { title } = route.params;
  const { overview } = route.params;
  const { poster_path } = route.params;
  const { poster_path1 } = route.params;
  const { id } = route.params;
  const [similarMovies, setSimilarMovies] = useState([]);
  const getSimilarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=65de017fef5ab1456020e1c4aa91d4d4&language=en-US&page=1`;

  useEffect(() => {
    axios
      .get(getSimilarMovies)
      .then((response) => {
        setSimilarMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(similarMovies[0]);

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: `https://image.tmdb.org/t/p/w500//${poster_path1}` }}
          style={styles.image}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{JSON.stringify(title)}</Text>
          <Text style={styles.subtitle}>{JSON.stringify(overview)}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.button}
            title="Play Movie"
            onPress={() =>
              navigation.navigate('PlayerScreen', {
                id: id,
              })
            }
          ></Button>
          <Button style={styles.button} title="Add to Library"></Button>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.listTitle}>Similar Movies</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          data={similarMovies}
          renderItem={({ item }) => (
            <TouchableOpacity
              navigation={navigation}
              onPress={() =>
                navigation.navigate('SimilarMovieScreen', {
                  title: item.title,
                  overview: item.overview,
                  poster_path: item.poster_path,
                  id: item.id,
                })
              }
            >
              <View style={styles.renderItemContainer}>
                <Image
                  style={styles.imageSimilar}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200//${item.poster_path}`,
                  }}
                ></Image>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#000',
  },
  container2: {
    flex: 1,
  },

  buttonsContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: { flex: 1 },
  image: {
    flex: 4,
  },
  imageSimilar: {
    flex: 1,
  },
  listTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  renderItemContainer: {
    width: 80,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  scrollView: {
    width: '100%',
    flexGrow: 1,
  },
  similarMovies: {
    flex: 1,
  },
  subtitle: {
    marginHorizontal: 15,
    color: '#fff',
    fontSize: 14,
  },
  subtitle2: {},
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default DetailsScreen;

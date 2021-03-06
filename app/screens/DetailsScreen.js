import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import SafeViewAndroid from '../components/SafeViewAndroid';
import MyButton from '../components/MyButton';

function DetailsScreen({ route, navigation }) {
  const { title } = route.params;
  const { overview } = route.params;
  const { poster_path } = route.params;
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
          source={{ uri: `https://image.tmdb.org/t/p/w500//${poster_path}` }}
          style={styles.image}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{JSON.stringify(title)}</Text>
          <Text style={styles.subtitle}>{JSON.stringify(overview)}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <MyButton
            title="Play Movie"
            onPress={() =>
              navigation.navigate('Media Player', {
                id: id,
              })
            }
          />
          <MyButton title="Add to Library" />
        </View>
      </View>
      <View style={styles.containerSimilarMovies}>
        <Text style={styles.listTitle}>Similar Movies</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          data={similarMovies}
          renderItem={({ item }) => (
            <TouchableOpacity
              navigation={navigation}
              onPress={() =>
                navigation.navigate('Similar Movie', {
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
                <Text style={styles.titleSimilarMovie}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  container: {
    flex: 3,
    backgroundColor: '#000',
  },
  containerSimilarMovies: {
    flex: 1,
  },
  descriptionContainer: { flex: 1 },
  image: {
    flex: 3,
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
    borderColor: '#000',
    borderWidth: 1,
  },
  similarMovies: {
    flex: 1,
  },
  subtitle: {
    marginHorizontal: 15,
    color: '#fff',
    fontSize: 14,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  titleSimilarMovie: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailsScreen;

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
  console.log(similarMovies);

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
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
        <Button
          style={styles.button}
          title="Play Movie"
          onPress={() =>
            navigation.navigate('SimilarMovieScreen', {
              id: id,
            })
          }
        ></Button>
        <Button style={styles.button} title="Add to Library"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: { flex: 2 },
  image: {
    flex: 3,
  },
  subtitle: {
    marginHorizontal: 15,
  },
  subtitle2: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default DetailsScreen;

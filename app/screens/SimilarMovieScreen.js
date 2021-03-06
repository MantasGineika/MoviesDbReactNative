import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
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
            style={styles.buttonas}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  descriptionContainer: {
    flex: 2,
  },
  image: {
    flex: 3,
  },
  subtitle: {
    marginHorizontal: 15,
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
    color: '#fff',
  },
});

export default DetailsScreen;

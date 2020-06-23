import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import MyButton from '../components/MyButton';
import PlayerScreen from './PlayerScreen';

function DetailsScreen({ route, navigation }) {
  const { title } = route.params;
  const { overview } = route.params;
  const { poster_path } = route.params;
  const { id } = route.params;

  return (
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
        <Button
          title="Play Movie"
          onPress={() =>
            navigation.navigate('PlayerScreen', {
              id: id,
            })
          }
        ></Button>
        <Button title="Add to Library"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

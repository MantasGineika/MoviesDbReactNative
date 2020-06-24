import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function MovieCard({ title }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/AvengersThumb.jpg')}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#000',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    flex: 1,
  },
  text: {
    padding: 5,
  },
});

export default MovieCard;

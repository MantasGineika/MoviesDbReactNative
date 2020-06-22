import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function MovieCard() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/AvengersThumb.jpg')}
      />
      <Text style={styles.text}>Veikiantis cardas</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#000',
  },
  image: {
    width: '100%',
  },
  text: {
    padding: 5,
  },
});

export default MovieCard;

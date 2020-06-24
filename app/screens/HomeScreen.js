import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import MyButton from '../components/MyButton';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/moviesdblogo.jpg')}
      />
      <View style={styles.buttonContainer}>
        <MyButton
          title="Browse"
          onPress={() => navigation.navigate('Browse Movies')}
        />
        <MyButton title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    flex: 1,
    width: '90%',
  },
});

export default HomeScreen;

import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

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
          onPress={() => navigation.navigate('BrowseScreen')}
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
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    flex: 1,
    width: '100%',
    // height: '0%',
  },
});

export default HomeScreen;

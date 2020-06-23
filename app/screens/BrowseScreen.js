import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import MovieCard from '../components/MovieCard';
import CategoryScroll from '../components/CategoryScroll';
import DataFetching from '../components/DataFetching';

function BrowseScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <SafeAreaView style={styles.container}>
        <DataFetching navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    width: '100%',
    backgroundColor: '#000',
  },
});

export default BrowseScreen;

import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import DataFetching from '../components/DataFetching';
import SafeViewAndroid from '../components/SafeViewAndroid';

function BrowseScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <DataFetching navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
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

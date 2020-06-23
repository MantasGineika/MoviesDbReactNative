import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

function PlayerScreen({ route, navigation }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(id)}</Text>
      <Video
        source={{
          uri:
            'https://api.themoviedb.org/3/movie/554993/videos?api_key=65de017fef5ab1456020e1c4aa91d4d4&language=en-US',
        }} // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PlayerScreen;

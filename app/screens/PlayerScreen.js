import React, { useRef, useState, useEffect } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import axios from 'axios';

import YoutubePlayer from 'react-native-youtube-iframe';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { FlatList } from 'react-native-gesture-handler';

function PlayerScreen({ route, navigation }) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const { id } = route.params;
  console.log(id);

  const [movieKey, setMovieKey] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=65de017fef5ab1456020e1c4aa91d4d4&language=en-US`
      )
      .then((response) => {
        setMovieKey(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  // const key = movieKey[0].name;
  console.log(movieKey);
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <Text></Text>
      {/* <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={key}
        play={playing}
        onChangeState={(event) => console.log(event)}
        onReady={() => console.log('ready')}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(q) => console.log(q)}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
          cc_lang_pref: 'us',
          showClosedCaptions: true,
        }}
      /> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
  },
});
export default PlayerScreen;

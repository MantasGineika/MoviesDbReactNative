import React, { useRef, useState, useEffect } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import axios from 'axios';

import YoutubePlayer from 'react-native-youtube-iframe';
import SafeViewAndroid from '../components/SafeViewAndroid';

function PlayerScreen({ route, navigation }) {
  const [movieKey, setMovieKey] = useState([]);
  const getMovieKey =
    'https://api.themoviedb.org/3/movie/554993/videos?api_key=65de017fef5ab1456020e1c4aa91d4d4&language=en-US';
  const key = movieKey.map((a) => {
    return <Text key={a.id}>{a.key}</Text>;
  });

  const { id } = route.params;
  const { videoURL } = route.params;
  const { external } = route.params;

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    axios
      .get(getMovieKey)
      .then((response) => {
        setMovieKey(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(movieKey);
  console.log(key);

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      {/* <Text>{JSON.stringify({ movieKey })}</Text> */}
      <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={`${key}`}
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
      />
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

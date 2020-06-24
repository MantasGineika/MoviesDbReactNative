import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import axios from 'axios';

import YoutubePlayer from 'react-native-youtube-iframe';
import SafeViewAndroid from '../components/SafeViewAndroid';

function PlayerScreen({ route, navigation }) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const { id } = route.params;
  console.log(id);

  const [movieKey, setMovieKey] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=65de017fef5ab1456020e1c4aa91d4d4&language=en-US`
      )
      .then((response) => {
        setMovieKey(response.data.results[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(movieKey);
  const key = movieKey.key;

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <YoutubePlayer
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
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PlayerScreen;

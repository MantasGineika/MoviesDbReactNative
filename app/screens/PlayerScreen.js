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

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
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

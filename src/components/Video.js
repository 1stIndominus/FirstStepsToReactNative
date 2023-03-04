import React from 'react';
import VideoPlayer from 'react-native-video-controls';

export const Video = ({onClose}) => {
  return (
    <VideoPlayer
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullscreenOrientation="all"
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    />
  );
};

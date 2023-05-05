import React from 'react';
import YouTube from 'react-youtube';

function Video() {
  const videoId = 'XixIjgl8CvI&ab_channel=Vousemvolta'; // Replace with your own video ID
  const opts = {
    height: '390',
    width: '640',
  };

  return (
    <div className="video-container">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default Video;

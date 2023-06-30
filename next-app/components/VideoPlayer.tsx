import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div>
      <video id="videoPlayer" controls src={src} />
    </div>
  );
};

export default VideoPlayer;
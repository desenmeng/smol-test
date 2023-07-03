import React from 'react';
import VideoUploader from '../components/VideoUploader';
import VideoPlayer from '../components/VideoPlayer';
import VideoConverter from '../components/VideoConverter';
import VideoCropper from '../components/VideoCropper';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Next.js Video Processing App</h1>
      <VideoUploader />
      <VideoPlayer />
      <VideoConverter />
      <VideoCropper />
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { cropVideo } from '../utils/ffmpeg';

const VideoCropper: React.FC = () => {
  const [cropStart, setCropStart] = useState(0);
  const [cropEnd, setCropEnd] = useState(0);
  const [isCropping, setIsCropping] = useState(false);

  const handleCropStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCropStart(Number(e.target.value));
  };

  const handleCropEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCropEnd(Number(e.target.value));
  };

  const handleVideoCrop = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCropping(true);
    try {
      await cropVideo(cropStart, cropEnd);
      alert('Video crop success');
    } catch (error) {
      console.error(error);
      alert('Video crop failed');
    } finally {
      setIsCropping(false);
    }
  };

  return (
    <form id="videoCropper" onSubmit={handleVideoCrop}>
      <label>
        Crop Start:
        <input type="number" value={cropStart} onChange={handleCropStartChange} required />
      </label>
      <label>
        Crop End:
        <input type="number" value={cropEnd} onChange={handleCropEndChange} required />
      </label>
      <button type="submit" disabled={isCropping}>
        {isCropping ? 'Cropping...' : 'Crop Video'}
      </button>
    </form>
  );
};

export default VideoCropper;
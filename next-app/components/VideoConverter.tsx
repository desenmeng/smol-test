import React, { useState } from 'react';

type VideoConverterProps = {
  video: File | null;
};

const VideoConverter: React.FC<VideoConverterProps> = ({ video }) => {
  const [format, setFormat] = useState('mp4');

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(e.target.value);
  };

  const handleVideoConversion = async () => {
    if (!video) return;

    const formData = new FormData();
    formData.append('video', video);
    formData.append('format', format);

    const response = await fetch('/api/convert', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Video conversion successful!');
    } else {
      alert('Video conversion failed!');
    }
  };

  return (
    <div id="videoConverter">
      <h2>Convert Video</h2>
      <select value={format} onChange={handleFormatChange}>
        <option value="mp4">MP4</option>
        <option value="avi">AVI</option>
        <option value="mov">MOV</option>
      </select>
      <button onClick={handleVideoConversion}>Convert</button>
    </div>
  );
};

export default VideoConverter;
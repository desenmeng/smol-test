import React, { ChangeEvent, useState } from 'react';

const VideoUploader: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedVideo(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedVideo) return;

    const formData = new FormData();
    formData.append('video', selectedVideo);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert('Video uploaded successfully');
    } else {
      alert('Video upload failed');
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default VideoUploader;
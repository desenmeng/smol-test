```typescript
import axios from 'axios';

export const uploadToYoutube = async (videoPath: string, accessToken: string) => {
  const url = 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=media';
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/octet-stream'
  };

  const videoData = await fs.promises.readFile(videoPath);
  const response = await axios.post(url, videoData, { headers });

  return response.data;
};
```
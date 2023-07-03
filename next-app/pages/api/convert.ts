import { NextApiRequest, NextApiResponse } from 'next';
import { convertVideo } from '../../utils/ffmpeg';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { videoFile, outputFormat } = req.body;

    try {
      const convertedVideo = await convertVideo(videoFile, outputFormat);
      res.status(200).json({ success: true, data: convertedVideo });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Video conversion failed', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
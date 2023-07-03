import { NextApiRequest, NextApiResponse } from 'next';
import { cropVideo } from '../../utils/ffmpeg';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { video, cropOptions } = req.body;

  try {
    const croppedVideo = await cropVideo(video, cropOptions);
    res.status(200).json({ success: true, data: croppedVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
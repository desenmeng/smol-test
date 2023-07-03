import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { promises as fs } from 'fs';
import path from 'path';

const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = multer().single('file');

const uploadVideo = async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(resolve => {
    uploadMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      const { file } = req;
      const filePath = path.join(process.cwd(), 'uploads', file.originalname);

      await fs.rename(file.path, filePath);

      res.status(200).json({ filePath });
      return resolve();
    });
  });
};

export default uploadVideo;
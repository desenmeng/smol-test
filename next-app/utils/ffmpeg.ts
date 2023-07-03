import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

export const loadFFmpeg = async () => {
  await ffmpeg.load();
};

export const convertVideo = async (file: File, format: string) => {
  ffmpeg.FS('writeFile', file.name, await fetchFile(file));

  await ffmpeg.run('-i', file.name, `output.${format}`);

  const data = ffmpeg.FS('readFile', `output.${format}`);

  return new Blob([data.buffer], { type: `video/${format}` });
};

export const cropVideo = async (file: File, start: number, end: number) => {
  ffmpeg.FS('writeFile', file.name, await fetchFile(file));

  await ffmpeg.run('-i', file.name, '-ss', String(start), '-to', String(end), 'output.mp4');

  const data = ffmpeg.FS('readFile', 'output.mp4');

  return new Blob([data.buffer], { type: 'video/mp4' });
};
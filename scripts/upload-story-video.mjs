import { put } from '@vercel/blob';
import { createReadStream, existsSync, statSync } from 'fs';
import { resolve } from 'path';

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: npm run upload-story-video -- <path-to-video.mp4>');
  process.exit(1);
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('Missing BLOB_READ_WRITE_TOKEN. Add it to .env or your shell environment.');
  process.exit(1);
}

const absolutePath = resolve(filePath);
if (!existsSync(absolutePath)) {
  console.error(`File not found: ${absolutePath}`);
  process.exit(1);
}

const pathname = process.env.STORY_VIDEO_BLOB_PATHNAME || 'story/the-ch-project.mp4';
const stats = statSync(absolutePath);
const sizeMb = (stats.size / (1024 * 1024)).toFixed(1);

console.log(`Uploading ${absolutePath} (${sizeMb} MB) to private blob "${pathname}"...`);

const stream = createReadStream(absolutePath);
const result = await put(pathname, stream, {
  access: 'private',
  contentType: 'video/mp4',
  multipart: true,
  allowOverwrite: true,
});

console.log('Upload complete.');
console.log(`Pathname: ${result.pathname}`);
console.log(`Content type: ${result.contentType}`);

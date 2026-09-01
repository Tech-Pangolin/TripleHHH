import { get, head } from '@vercel/blob';
import { storyVideoPathname, verifyPlaybackToken } from '@/lib/video-access';

export async function GET(request) {
  const token = request.nextUrl.searchParams.get('token');
  if (!verifyPlaybackToken(token)) {
    return new Response('Forbidden', { status: 403 });
  }

  const pathname = storyVideoPathname();
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

  if (!blobToken) {
    return new Response('Video storage is not configured.', { status: 503 });
  }

  try {
    const metadata = await head(pathname, { token: blobToken });
    const range = request.headers.get('range');
    const result = await get(pathname, {
      access: 'private',
      token: blobToken,
      headers: range ? { Range: range } : undefined,
    });

    if (!result || result.statusCode !== 200 || !result.stream) {
      return new Response('Video not found.', { status: 404 });
    }

    const responseHeaders = new Headers({
      'Content-Type': metadata.contentType || 'video/mp4',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'private, no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
      'Content-Disposition': 'inline',
    });

    const contentRange = result.headers.get('content-range');
    const contentLength = result.headers.get('content-length');

    if (contentRange) {
      responseHeaders.set('Content-Range', contentRange);
    }
    if (contentLength) {
      responseHeaders.set('Content-Length', contentLength);
    }

    return new Response(result.stream, {
      status: range && contentRange ? 206 : 200,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Story video stream error:', error);
    return new Response('Unable to stream video.', { status: 500 });
  }
}

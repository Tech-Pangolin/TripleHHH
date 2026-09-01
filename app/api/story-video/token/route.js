import { createPlaybackToken, isAllowedMediaRequest } from '@/lib/video-access';

export async function GET(request) {
  if (!isAllowedMediaRequest(request)) {
    return new Response('Forbidden', { status: 403 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json({ error: 'Video storage is not configured.' }, { status: 503 });
  }

  try {
    const { token, expiresAt } = createPlaybackToken();
    const playbackUrl = `/api/story-video?token=${encodeURIComponent(token)}`;

    return Response.json(
      { playbackUrl, expiresAt },
      {
        headers: {
          'Cache-Control': 'private, no-store',
        },
      },
    );
  } catch {
    return Response.json({ error: 'Unable to prepare video playback.' }, { status: 500 });
  }
}

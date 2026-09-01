import crypto from 'crypto';

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://triplehhealthservices.com',
  'https://www.triplehhealthservices.com',
  'https://triplehhealthservices.org',
  'https://www.triplehhealthservices.org',
];

const TOKEN_TTL_MS = 2 * 60 * 60 * 1000;

export function allowedOrigins() {
  const origins = [...ALLOWED_ORIGINS];
  if (process.env.VERCEL_URL) {
    origins.push(`https://${process.env.VERCEL_URL}`);
  }
  return origins;
}

export function isAllowedMediaRequest(request) {
  const origin = request.headers.get('origin');
  if (origin && allowedOrigins().includes(origin)) {
    return true;
  }

  const referer = request.headers.get('referer');
  if (!referer) {
    return false;
  }

  try {
    return allowedOrigins().includes(new URL(referer).origin);
  } catch {
    return false;
  }
}

function signingSecret() {
  return process.env.STORY_VIDEO_SIGNING_SECRET || process.env.BLOB_READ_WRITE_TOKEN || '';
}

export function createPlaybackToken() {
  const secret = signingSecret();
  if (!secret) {
    throw new Error('Video signing secret is not configured.');
  }

  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const signature = crypto.createHmac('sha256', secret).update(String(expiresAt)).digest('hex');

  return {
    expiresAt,
    token: `${expiresAt}.${signature}`,
  };
}

export function verifyPlaybackToken(token) {
  if (!token || typeof token !== 'string') {
    return false;
  }

  const [expiresAt, signature] = token.split('.');
  if (!expiresAt || !signature || Number.isNaN(Number(expiresAt))) {
    return false;
  }

  if (Date.now() > Number(expiresAt)) {
    return false;
  }

  const secret = signingSecret();
  if (!secret) {
    return false;
  }

  const expected = crypto.createHmac('sha256', secret).update(expiresAt).digest('hex');
  const provided = Buffer.from(signature, 'utf8');
  const expectedBuffer = Buffer.from(expected, 'utf8');

  if (provided.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(provided, expectedBuffer);
}

export function storyVideoPathname() {
  return process.env.STORY_VIDEO_BLOB_PATHNAME || 'story/the-ch-project.mp4';
}

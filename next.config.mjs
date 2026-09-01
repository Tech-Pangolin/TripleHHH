/** @type {import('next').NextConfig} */
const frameAncestors = [
  "'self'",
  'https://triplehhealthservices.com',
  'https://www.triplehhealthservices.com',
  'https://triplehhealthservices.org',
  'https://www.triplehhealthservices.org',
];

if (process.env.VERCEL_URL) {
  frameAncestors.push(`https://${process.env.VERCEL_URL}`);
}

const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/our-story.html', destination: '/our-story', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors ${frameAncestors.join(' ')};`,
          },
        ],
      },
      {
        source: '/api/story-video',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'private, no-store' },
        ],
      },
    ];
  },
};

export default nextConfig;

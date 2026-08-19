/** @type {import('next').NextConfig} */
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
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // uncomment for next build
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/icons/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/q1',
        destination: '/api/q1',
      },
    ]
  },
}

module.exports = nextConfig

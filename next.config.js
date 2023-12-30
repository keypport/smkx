/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgur.com'
      },
    ],
    minimumCacheTTL: 24 * 60 * 60,
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://keypport.github.io/smkx'
      : '',
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'smkx.s3.ap-northeast-2.amazonaws.com'
      },
    ],
    minimumCacheTTL: 24 * 60 * 60,
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://keypport.github.io/smkx/'
      : '',
}

module.exports = nextConfig

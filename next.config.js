/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-ssn1-1.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'shop-phinf.pstatic.net'
      }
    ],
    minimumCacheTTL: 24 * 60 * 60,
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://keypport.github.io/smkx/'
      : '',
}

module.exports = nextConfig

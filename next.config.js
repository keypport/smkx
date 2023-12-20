/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig

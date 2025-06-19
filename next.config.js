/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kabulmarket',
  assetPrefix: '/kabulmarket/',
};

module.exports = nextConfig; 
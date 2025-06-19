/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kabulmarket',
  assetPrefix: '/kabulmarket/',
  trailingSlash: true,
};

module.exports = nextConfig; 
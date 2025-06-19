/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kabulhalalmarket',
  assetPrefix: '/kabulhalalmarket/',
  trailingSlash: true,
};

module.exports = nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kabulmarket.github.io',
  assetPrefix: '/kabulmarket.github.io/',
  trailingSlash: true,
};

module.exports = nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['anhthoai1133.github.io'],
  },
  basePath: '/web-demo',
  assetPrefix: '/web-demo',
}

module.exports = nextConfig 
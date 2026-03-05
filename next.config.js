/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ganesh-chandrawale-site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

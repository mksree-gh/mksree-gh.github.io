// next.config.js

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  assetPrefix: isProd ? 'https://mksree-gh.github.io/' : undefined,
  
  basePath: '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
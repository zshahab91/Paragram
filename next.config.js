const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
// const path = require('path');

// add bundle analyzer config
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = (file) => {}; // eslint-disable-line
// }

// main next config, including webpack
const nextConfig = {
  poweredByHeader: false,
  webpack: (config, { defaultLoaders }) => {
    // Do whatever you want in build-time

    return config;
  },
};

module.exports = withPlugins([[withImages], [withBundleAnalyzer]], nextConfig);

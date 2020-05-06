const withImages = require('next-images');

module.exports = withImages({
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
})
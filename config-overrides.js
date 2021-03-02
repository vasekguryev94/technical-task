// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const paths = {
  '@': path.resolve(__dirname, 'src/')
}

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      ...paths
    }
  }

  return config
}

'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsPublicPath: '/',
    assetsSubDirectory: 'static/'
  },

  build: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsPublicPath: '/webpack4-mpa/',
    assetsSubDirectory: 'static/'
  }
}
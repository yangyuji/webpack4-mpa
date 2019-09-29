'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static/',
    assetsPublicPath: '/'
  },

  build: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: 'static/',
    assetsPublicPath: '/',
  }
}
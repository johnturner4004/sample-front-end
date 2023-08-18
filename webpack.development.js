import common from './webpack.common.js'
/* eslint-disable spellcheck/spell-checker */
import { merge } from 'webpack-merge'

const development = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      logging: 'info',
      overlay: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:5000',
        logLevel: 'debug'
      }
    },
    compress: true,
    open: true,
    static: './build'
  },
  stats: {
    errorDetails: true
  }
})

export default development

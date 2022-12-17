const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name][contenthash].js',
    publicPath: '/home/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'results',
      filename: 'remoteEntry.js',
      exposes: {
        './ResultsApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)

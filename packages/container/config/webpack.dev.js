const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        home: 'home@http://localhost:8081/remoteEntry.js',
        results: 'results@http://localhost:8082/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)

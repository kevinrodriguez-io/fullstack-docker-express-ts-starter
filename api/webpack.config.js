/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    app: ['./build/app.js']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.min.js'
  },
  externals: [nodeExternals()]
};

import webpack from 'webpack';
import path from 'path';

const config = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-2']
            }
          }
        ]
      }
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};

export default config;

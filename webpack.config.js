const path = require('path');

module.exports = {
  mode: "development",
  entry: './dist/all.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mondrian-video-component.bundle.js'
  },
  module: {
  rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
            	"@babel/preset-env",
            	"@babel/preset-react",
            	"@babel/preset-typescript"
            ],
            plugins: [
            	"babel-plugin-styled-components",
            	"@babel/plugin-proposal-class-properties",
    			"@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
};

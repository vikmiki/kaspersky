const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'production',
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
		{
			test: /.js?$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}
		]
	},
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './src/'),
    ]
  }
};

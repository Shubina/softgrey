const webpack = require('webpack');

module.exports = {
	entry: './src/index',
	output: {
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env']
					}
				}
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		open: true,
		port: 3001,
		inline: true,
		hot: true
	}
	

};
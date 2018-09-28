const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

const FORMAT = process.env.FORMAT && process.env.FORMAT !== 'false';

module.exports = {
	entry: commonPaths.entryPath,
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/,
				options: {
					fix: FORMAT,
					// cache: true,
					emitWarning: process.env.NODE_ENV !== 'production',
				},
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {

							name: '[name].[ext]',

							outputPath: commonPaths.imagesFolder,
						},
					},
				],
			},
			{
				test: /\.(woff2|ttf|woff|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: commonPaths.fontsFolder,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: commonPaths.templatePath,
		}),
	],
};

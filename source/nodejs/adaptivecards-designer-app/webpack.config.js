const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = (env, argv) => {
	const mode = argv.mode || 'development';
	const devMode = mode === "development";

	console.info('running webpack with mode:', mode);

	return {
		mode: mode,
		entry: {
			"adaptivecards-designer-app": "./src/app.ts"
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: devMode ? "[name].js" : "[name].min.js"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
			plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					loader: "ts-loader",
					exclude: /(node_modules|__tests__)/
				},
				{
					test: /\.ttf$/,
					type: 'asset/resource',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader'
					]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(['dist']),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: '../adaptivecards-designer/src/containers/**/*.css',
						to: 'containers/[name].[ext]',
						//	flatten: true
					},
					{
						from: '../adaptivecards-designer/src/containers/**/*.png',
						to: 'containers/[name].[ext]',
						//	flatten: true
					},
					{
						from: '../adaptivecards-designer/src/containers/**/*.jpg',
						to: 'containers/[name].[ext]',
						//	flatten: true
					},
					{
						from: '../adaptivecards-designer/configuration.json',
						to: '.'
					}
				]
			}),
			new HtmlWebpackPlugin({
				title: "Adaptive Cards Designer",
				template: "./index.html"
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),
			new MonacoWebpackPlugin({
				languages: ['json']
			})
		]
	}
}

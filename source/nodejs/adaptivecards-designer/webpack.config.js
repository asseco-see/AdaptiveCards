const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ConcatPlugin = require('@mcler/webpack-concat-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
	const mode = argv.mode || 'development';
	const devMode = mode === "development";

	console.info('running webpack with mode:', mode);

	return {
		mode: mode,
		entry: {
			"adaptivecards-designer": "./src/adaptivecards-designer.ts",
			"adaptivecards-designer-standalone": "./src/adaptivecards-designer-standalone.ts"
		},
		output: {
			path: path.resolve(__dirname, "./dist"),
			filename: devMode ? "[name].js" : "[name].min.js",
			library: "ACDesigner",
			libraryTarget: "umd",
			globalObject: "this",
			// umdNamedDefine: true
		},
		devtool: devMode ? "inline-source-map" : "source-map",
		devServer: {
			static: {
				directory: './dist'
			},
		},

		resolve: {
			extensions: [".ts", ".tsx", ".js"]
		},
		module: {
			rules: [{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: /(node_modules|__tests__)/
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
			new Dotenv(),
			new ConcatPlugin({
				fileName: 'adaptivecards-designer.css',
				injectType: 'none',
				filesToConcat: [
					'./node_modules/adaptivecards-controls/dist/adaptivecards-controls.css',
					'./src/adaptivecards-designer.css'
				]
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'configuration.json',
						to: '.'
					},
					{
						from: '../adaptivecards/dist/adaptivecards.js',
						to: '.'
					},
					{
						from: 'src/containers/default/adaptivecards-defaulthost.css',
						to: '.'
					},
					{
						from: 'src/containers/**/*.css',
						to: 'containers/[name].[ext]',
						//flatten: true
					},
					{
						from: '../../../schemas/extensions/**/*.json',
						to: 'extensions/',
						//flatten: true
					},
					{
						from: 'src/containers/**/*.png',
						to: 'containers/[name].[ext]',
						//flatten: true
					},
					{
						from: 'src/containers/**/*.jpg',
						to: 'containers/[name].[ext]',
						//flatten: true
					}],
				options: {
					concurrency: 8
				}
			}),
			new HtmlWebpackPlugin({
				title: "Adaptive Cards Designer (No Microsoft Hosts)",
				template: "./noHosts.html",
				filename: "noHosts.html",
				chunks: ["adaptivecards-designer-standalone"]
			}),
			new HtmlWebpackPlugin({
				title: "Adaptive Cards Designer",
				template: "./index.html",
				filename: "index.html",
				chunks: ["adaptivecards-designer"]
			}),
			new HtmlWebpackPlugin({
				title: "Adaptive Cards Designer (Preview Features)",
				template: "./previewFeatures.html",
				filename: "previewFeatures.html",
				chunks: ["adaptivecards-designer"]
			}),
			new HtmlWebpackPlugin({
				title: "Adaptive Cards Designer (No Microsoft Hosts)",
				template: "./noHosts.html",
				filename: "noHosts.html",
				chunks: ["adaptivecards-designer-standalone"]
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css'
			})
		],
		externals: {
			///^monaco-editor/ // <-- NOT WORKING for some reason
			"@asseco/adaptivecards": {
				commonjs2: "@asseco/adaptivecards",
				commonjs: "@asseco/adaptivecards",
				root: "AdaptiveCards"
			},
			"adaptivecards": {
				commonjs2: "@asseco/adaptivecards",
				commonjs: "@asseco/adaptivecards",
				root: "AdaptiveCards"
			},
			"adaptive-expressions": {
				commonjs2: "adaptive-expressions",
				commonjs: "adaptive-expressions",
				root: "AEL"
			},
			"adaptivecards-templating": {
				commonjs2: "adaptivecards-templating",
				commonjs: "adaptivecards-templating",
				root: "ACData"
			}
		}
	}
}

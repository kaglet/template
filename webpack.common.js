const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
<<<<<<< HEAD
	mode: 'development',
	entry: {
		app: './src/index.js',
=======
	mode: "development",
	entry: {
		app: "./src/index.js",
>>>>>>> a219b51 (Add prettier fully compatible with eslint)
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HTMLWebpackPlugin({
<<<<<<< HEAD
			template: './src/index.html',
			inject: 'body',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(process.cwd(), 'dist'),
=======
			template: "./src/index.html",
			inject: "body",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
>>>>>>> a219b51 (Add prettier fully compatible with eslint)
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
<<<<<<< HEAD
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
=======
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"],
			},
			{
				test: /\.xml$/i,
				use: ["xml-loader"],
>>>>>>> a219b51 (Add prettier fully compatible with eslint)
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
<<<<<<< HEAD
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
=======
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
>>>>>>> a219b51 (Add prettier fully compatible with eslint)
			// `...`,
			new CssMinimizerPlugin(),
		],
	},
	resolve: {
		alias: {
<<<<<<< HEAD
			Fonts: path.resolve(process.cwd(), 'src/assets/fonts/'),
			Images: path.resolve(process.cwd(), 'src/assets/images/'),
			Svg: path.resolve(process.cwd(), 'src/assets/svgs/'),
=======
			Fonts: path.resolve(__dirname, "src/assets/fonts/"),
			Images: path.resolve(__dirname, "src/assets/images/"),
			Svg: path.resolve(__dirname, "src/assets/svgs/"),
>>>>>>> a219b51 (Add prettier fully compatible with eslint)
		},
	},
};

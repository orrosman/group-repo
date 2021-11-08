const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
module.exports = {
	mode: `production`, //development
	experiments: {
		topLevelAwait: true,
	},
	entry: {
		main: path.resolve(__dirname, `./src/index.js`),
	},
	output: {
		path: path.resolve(__dirname, `dist`),
		filename: `[name].js`,
		clean: true,
	},

	//plugins
	plugins: [
		new HtmlWebpackPlugin({
			title: `group-project`,
			filename: `index.html`,
			template: path.resolve(__dirname, `./src/index.html`),
		}),
	],
};

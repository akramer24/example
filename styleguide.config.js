module.exports = {
	title: 'React Style Guide Example',
	pagePerSection: true,
	sections: [
		{
			name: 'Controls',
      components: 'src/lib/Controls/**/[A-Z]*.js'
		},
		{
			name: 'Form',
      components: 'src/lib/Form/**/[A-Z]*.js',
		}
	],
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				},
			],
		},
	},
}

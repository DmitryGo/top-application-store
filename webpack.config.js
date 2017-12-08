const
	config = {
		entry: './src/index.js',
		output: {
			filename: 'static/js/bundle.js'
		},
		module : {
			loaders : [
				{
					test : /\.js?/,
					exclude: /(node_modules|bower_components)/,
					loader : 'babel-loader'
				},
				{ test: /\.css$/, loader: "style-loader!css-loader" }
			]
		},
	};

module.exports = config;
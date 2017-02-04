'use strict';

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {

	entry: {
			'vendor':    './src/vendor.browser.js',
      'main':      './src/main.browser.js'
	},

	module: {
		loaders: [
			{
		      test: /\.js$/,
		      loader: 'babel',
		      exclude: /node_modules/
		    }, 
		    {
		      test: /\.css$/,
		      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
			}, 
			{
			  test: /\.scss$/, 
			  loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap!postcss')
			}, 
			{
		      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
			  loader: 'file'
			}, 
			{
			  test: /\.html$/,
			  loader: 'raw'
			}
	    ]
	},

    plugins : [
		new HtmlWebpackPlugin({
	        template: './src/index.html',
	        inject: 'body'
	    }),

	    new OccurenceOrderPlugin(true),

			new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
        { from: 'node_modules/font-awesome/fonts', to: 'assets/font-awesome/fonts' }
      ]),

			new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
			})
	    
    ],

    postcss: [
	    autoprefixer({
	      browsers: ['last 2 version']
	    })
	]	

};
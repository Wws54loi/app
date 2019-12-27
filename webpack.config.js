let path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	 plugins: [	
	    new BundleAnalyzerPlugin()	
	  ],
	entry: './src/main.js', //入口
	output: {
		filename: 'bundle.js', //打包的文件名
		path: path.resolve(__dirname, 'build'),//绝对路径 文件名
		publicPath: '/'
	},
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.(jpg|png)$/,use:'url-loader'},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			 {test:/\.vue$/,use:'vue-loader'},
			  {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
		]
	}
} 
const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = 'vue demo'; // page title

module.exports = {
	devServer: {
		open: false,
		// before: require('./mock/mock-server.js'),
		hot: true, //模块热替换
		hotOnly: true, //只有热更新不会刷新页面
	},
	configureWebpack: config => {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		// 打包去掉console.log()语句
		if (process.env.NODE_ENV === 'production') {
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
		}
	},
	chainWebpack: config => {
		// 修复热更新失效
		config.resolve.symlinks(true);
		// 设置@目录
		config.resolve.alias.set('@', path.join(__dirname, 'src')).set('views', path.join(__dirname, 'src/views'));
		// set svg-sprite-loader
		config.module
			.rule('svg')
			.exclude.add(resolve('src/icons'))
			.end();
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end();
	},
};

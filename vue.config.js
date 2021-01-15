const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = 'vue demo'; // page title

module.exports = {
	devServer: {
		open: false,
		before: require('./mock/mock-server.js'),
	},
	configureWebpack: {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
	},
	chainWebpack: config => {
		config.resolve.alias.set('@', path.join(__dirname, 'src')).set('views', path.join(__dirname, 'src/views'));
		// set svg-sprite-loader
		config.module.rule('svg').exclude.add(resolve('src/icons')).end();
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

const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devServer: {
		open: false,
		before: require('./mock/mock-server.js'),
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

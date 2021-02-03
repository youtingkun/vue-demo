import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// const requireComponent = require.context('./', true, /\w+\.vue$/);

// // 查找同级目录下以vue结尾的组件
// requireComponent.keys().forEach(fileName => {
// 	// 获取组件配置
// 	const componentConfig = requireComponent(fileName);
// 	// 获取组件的 PascalCase 命名
// 	const componentName = upperFirst(
// 		camelCase(
// 			// 获取和目录深度无关的文件名
// 			fileName
// 				.split('/')
// 				.pop()
// 				.replace(/\.\w+$/, ''),
// 		),
// 	);
// 	console.log(componentName);
// 	// 全局注册组件
// 	Vue.component(
// 		componentName,
// 		// 如果这个组件选项是通过 `export default` 导出的，
// 		// 那么就会优先使用 `.default`，
// 		// 否则回退到使用模块的根。
// 		componentConfig.default || componentConfig,
// 	);
// });

const req = require.context('./', true, /^\.\/\w+\/index.vue$/);
// console.log('req', req);

req.keys().map(key => {
	let temp = key;
	// console.log('key', key);
	let name = temp.replace(/^\.\/(\w+)\/index.vue$/, '$1');
	// console.log(name);
	name = name.replace(/[A-Z]+/g, function (char, index) {
		if (index === 0) {
			return char.toLowerCase();
		} else {
			return '-' + char.toLowerCase();
		}
	});
	// console.log(name);
	Vue.component(name, req(key).default);
});

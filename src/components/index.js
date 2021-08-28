import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

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

// 另一种写法

// import Vue from 'vue';
// function changeStr(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }
// const requireComponent = require.context('./', false, /\.vue$/);
// // 查找同级目录下以vue结尾的组件
// const install = () => {
// 	requireComponent.keys().forEach(fileName => {
// 		let config = requireComponent(fileName);
// 		console.log(config); // ./child1.vue 然后用正则拿到child1
// 		let componentName = changeStr(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''));
// 		Vue.component(componentName, config.default || config);
// 	});
// };
// export default {
// 	install, // 对外暴露install方法
// };

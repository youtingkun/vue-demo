import copy from './modules/copy';
import longpress from './modules/longpress';
import debounce from './modules/debounce';
import draggable from './modules/draggable';
import emoji from './modules/emoji';
import lazyLoad from './modules/lazy-load';
import permission from './modules/premission';
import waterMarker from './modules/water-marker';
// 自定义指令
const directives = {
	copy,
	longpress,
	debounce,
	draggable,
	emoji,
	lazyLoad,
	permission,
	waterMarker,
};

export default {
	install(Vue) {
		Object.keys(directives).forEach(key => {
			Vue.directive(key, directives[key]);
		});
	},
};

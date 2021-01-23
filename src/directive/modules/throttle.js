// 节流指令
let timer = null;

const throttle = {
	bind: function (el, binding) {
		console.log('bind钩子函数');
		el.handler = function () {
			if (timer) return;
			else {
				binding.value();
				timer = setTimeout(() => {
					timer = null;
				}, 3000);
			}
		};
		el.addEventListener('click', el.handler, false);
	},
	update: function (el, binding) {
		console.log('update钩子函数');
		el.removeEventListener('click', el.handler, false);
	},
	unbind: function (el, binding) {
		el.removeEventListener('click', el.handler, false);
		console.log('unbind钩子函数');
	},
};

export default throttle;

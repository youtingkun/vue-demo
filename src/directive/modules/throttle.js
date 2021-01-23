// 节流指令

const throttle = {
	bind: function (el, binding) {
		console.log('bind钩子函数');
		let timer = null;
		let time = 3000;
		let func = binding.value;
		el.addEventListener('click', () => {
			if (timer) return;
			else {
				func();
				timer = setTimeout(() => {
					timer = null;
				}, time);
			}
		});
	},
};

export default throttle;

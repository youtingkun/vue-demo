// 节流指令
let timer = null;

const throttle = {
	bind: function (el, binding) {
		console.log('bind钩子函数');
		let time = binding.arg ? binding.arg : 3000;
		el.handler = function () {
			if (timer) return;
			else {
				binding.value();
				timer = setTimeout(() => {
					timer = null;
				}, time);
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

// 使用
// <el-button v-throttle="throttleClick">按钮</el-button>
// throttleClick() {
//   console.log('节流按钮');
// },

// 传递节流的时间,这个给参数会在指令内部获取到
// <el-button v-throttle:[5000]="throttleClick">按钮</el-button>

// 如果需要给函数传参，那么函数应该写成高阶函数
// fn(i) {
//     return () => {
//       console.log(i);
//     };
//   },
// <el-button v-throttle="fn(123)">按钮</el-button>

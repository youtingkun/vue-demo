<template>
	<div>
		<h1>基础使用</h1>
		<input v-focus />
		<h1>钩子函数参数：</h1>
		<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
		<h1>动态参数</h1>
		<p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
		<h1>对象字面变量</h1>
		<div v-demoone="{ color: 'red', text: 'hello!' }">123</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			message: 'hello!',
			direction: 'top',
		};
	},
	directives: {
		focus: {
			// 指令的定义
			inserted: function (el) {
				el.focus();
			},
		},
		demo: {
			bind: function (el, binding, vnode) {
				var s = JSON.stringify;
				el.innerHTML =
					'name: ' +
					s(binding.name) +
					'<br>' +
					'value: ' +
					s(binding.value) +
					'<br>' +
					'expression: ' +
					s(binding.expression) +
					'<br>' +
					'argument: ' +
					s(binding.arg) +
					'<br>' +
					'modifiers: ' +
					s(binding.modifiers) +
					'<br>' +
					'vnode keys: ' +
					Object.keys(vnode).join(', ');
			},
		},
		pin: {
			bind: function (el, binding, vnode) {
				el.style.position = 'fixed';
				var s = binding.arg == 'left' ? 'left' : 'top';
				el.style[s] = binding.value + 'px';
			},
		},
		demoone: {
			bind: function (el, binding) {
				el.style.color = binding.value.color;
				console.log('颜色', binding.value.color);
			},
		},
	},
};
</script>

<style scoped></style>

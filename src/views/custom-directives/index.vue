<template>
	<div>
		<h1>拖拽</h1>
		<div class="el-dialog" v-draggable>123</div>
		<h1>基础使用</h1>
		<input v-focus />
		<h1>钩子函数参数：</h1>
		<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
		<h1>动态参数</h1>
		<div v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</div>
		<h1>对象字面变量</h1>
		<div v-demoone="{ color: 'red', text: 'hello!' }">123</div>
		<h1>复制</h1>
		<div v-copy="copyText">点击复制</div>
		<h1>长按事件</h1>
		<el-button v-longpress="longPress">长按</el-button>
		<h1>防抖按钮</h1>
		<el-button v-debounce="debounceClick">防抖</el-button>
		<h1>节流按钮</h1>
		<el-button v-throttle="throttleClick" v-show="throttle">节流</el-button>
		<el-button @click="changeThrottle">改变状态</el-button>
		<h1>权限命令</h1>
		<el-button v-permission="1">权限按钮</el-button>
		<el-button v-permission="10">权限按钮</el-button>
		<h1>水印</h1>
		<div v-waterMarker="{ text: 'ytk版权所有', textColor: 'rgba(180, 180, 180, 0.4)' }" style="height: 100px"></div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			message: 'hello!',
			direction: 'left',
			copyText: 'a copy directives',
			throttle: true,
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
	methods: {
		changeThrottle() {
			this.throttle = !this.throttle;
		},
		longPress() {
			console.log('长按事件');
			this.$message.info('长按事件');
		},
		debounceClick() {
			console.log('防抖按钮');
			this.$message.info('防抖按钮');
		},
		throttleClick() {
			console.log('节流按钮');
		},
	},
};
</script>

<style scoped></style>

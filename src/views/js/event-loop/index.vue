<template>
	<div>
		<div>mounted</div>
		<pre id="pre"></pre>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {},
	created() {},
	mounted() {
		const main = document.querySelector('#pre');
		const callback = (i, fn) => () => {
			console.log(i);
			main.innerText += fn(i);
		};
		let i = 1;
		// 第三才输出宏任务
		while (i++ < 5000) {
			setTimeout(callback(i, i => '\n' + i + '<'));
		}

		// 第二输出一长串的微任务
		while (i++ < 10000) {
			Promise.resolve().then(callback(i, i => i + ','));
		}
		// 第一先输出end1001
		//此时添加了500个宏任务到宏任务队列，添加了1000个微任务到微任务队列
		// 直到1000个微任务执行完，浏览器才会渲染
		console.log(i);
		main.innerText += '[end ' + i + ' ]\n';
	},
	beforeCreate() {},
	beforeMount() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {},
	activated() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>

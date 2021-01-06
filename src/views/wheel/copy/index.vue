<template>
	<div>
		<input id="demoInput" value="hello world" />
		<el-button @click="select">选择复制</el-button>
		<el-button @click="copy">复制</el-button>
	</div>
</template>

<script>
export default {
	methods: {
		copy() {
			const input = document.createElement('input');
			input.setAttribute('readonly', 'readonly');
			input.setAttribute('value', '你想复制我');
			document.body.appendChild(input);
			input.select();
			input.setSelectionRange(0, input.value.length);
			if (document.execCommand('copy')) {
				document.execCommand('copy');
				console.log('复制成功');
			}
			document.body.removeChild(input);
		},
		select() {
			const input = document.querySelector('#demoInput');
			input.select();
			if (document.execCommand('copy')) {
				document.execCommand('copy');
				console.log('复制成功');
			}
		},
	},
};
</script>

<style></style>

<template>
	<div>
		<div><el-input contenteditable="true" v-model="text"></el-input></div>
		<canvas id="webgl" width="400" height="400"></canvas>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			text: 123,
		};
	},
	computed: {},
	watch: {},
	methods: {},
	created() {},
	mounted() {
		function main() {
			const canvas = document.getElementById('webgl');
			const gl = getWebGLContext(canvas);
			gl.clearColor(0, 0, 0, 1);
			gl.clear(gl.COLOR_BUFFER_BIT);
		}
		main();
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

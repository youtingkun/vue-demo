<template>
	<div class=""><canvas id="c"></canvas>fog-bg</div>
</template>

<script>
import drawMain from './fog-bg-js.js';
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
		const canvas = document.querySelector('#c');
		drawMain(canvas);
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

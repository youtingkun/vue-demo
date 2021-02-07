<template>
	<div>
		<div class="" id="container"></div>
	</div>
</template>

<script>
import main from './buffergeometry-lines-js';

export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			a: '',
		};
	},
	computed: {},
	watch: {},
	methods: {},
	created() {},
	mounted() {
		let container = document.getElementById('container');
		main(container);
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
.form-demo {
	position: absolute;
	top: 10px;
	left: 50px;
}
</style>

<template>
	<div class="">
		<sidebar class="sidebar-container" />
		<router-view :key="key" />
	</div>
</template>

<script>
import Sidebar from './sidebar/index';

export default {
	name: '',
	components: { Sidebar },
	props: {},
	data() {
		return {};
	},
	computed: {
		key() {
			return this.$route.path;
		},
	},
	watch: {},
	methods: {},
	created() {},
	mounted() {},
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

<template>
	<div class="">1</div>
</template>

<script>
export default {
	name: 'search-table',
	components: {},
	props: {
		page: {
			type: Object,
			default() {
				return {
					currentPage: 1,
					pageSize: 10,
					total: 100,
					pageSizes: [5, 10, 50, 100],
				};
			},
		},
	},
	data() {
		return {};
	},
	computed: {},
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

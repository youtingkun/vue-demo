<template>
	<div class="">
		<common-search></common-search>
		<common-table></common-table>
		<common-pagination :page="page"></common-pagination>
	</div>
</template>

<script>
import CommonPagination from '@/components/common-pagination';
import CommonSearch from '@/components/common-search';
import CommonTable from '@/components/common-table';

export default {
	name: 'search-table',
	components: { CommonPagination, CommonSearch, CommonTable },
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

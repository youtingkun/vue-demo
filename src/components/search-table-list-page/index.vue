<template>
	<div class="">
		<div class="search">
			搜索
			<slot name="search"></slot>
		</div>
		<div class="action">
			操作
			<slot name="action"></slot>
		</div>
		<div class="table">
			表格
			<slot name="table"></slot>
		</div>
		<div class="pagination">
			分页
			<slot name="pagination"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'search-table-list-page',
	components: {},
	props: {},
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
.search {
	color: #f00000;
}
.action {
	color: #f0f000;
}
.table {
	color: #f0f0f0;
}
.pagination {
	color: #f000f0;
}
</style>

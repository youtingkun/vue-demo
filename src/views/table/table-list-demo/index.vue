<template>
	<div class="">
		<search-form :searchFormConfig="searchFormConfig" @searchData="searchData"></search-form>
		<table-list :page="page"> </table-list>
	</div>
</template>

<script>
import SearchForm from '@/components/search-form';
import TableList from '@/components/table-list';
export default {
	name: '',
	components: { TableList, SearchForm },
	props: {},
	data() {
		return {
			page: {
				currentPage: 1,
				pageSize: 10,
				total: 1000,
				pageSizes: [10, 20, 50, 100],
			},
			searchFormConfig: [
				{ el: 'input-text', value: '张三', key: 'name', label: '姓名' },
				{
					el: 'select',
					value: '',
					key: 'sex',
					label: '性别',
					list: [
						{
							label: '男',
							value: 'man',
						},
						{
							label: '女',
							value: 'woman',
						},
					],
				},
			],
		};
	},
	computed: {},
	watch: {},
	methods: {
		searchData(data) {
			console.log(data);
		},
		handleClick(data) {
			console.log(data);
		},
	},
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

<template>
	<div class="">
		<el-button type="primary" icon="el-icon-plus" @click="handleCreate()">新增</el-button>
		<el-table :data="tableData">
			<el-table-column v-for="item in tableHeader" :key="item.key" :label="item.lable" :prop="item.key"> </el-table-column>
			<el-table-column fixed="right" label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="handleRead(scope.row)" type="text" size="small">查看</el-button>
					<el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
					<el-button @click="handleUpdate(scope.row)" type="text" size="small">更改</el-button>
					<el-button @click="handleDisable(scope.row)" type="text" size="small">禁用</el-button>
					<el-button @click="handleEnable(scope.row)" type="text" size="small">启用</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page.sync="page.currentPage"
			:page-sizes="[10, 20, 50, 100]"
			:page-size="page.pageSize"
			:pager-count="5"
			layout="total, sizes, prev, pager, next, jumper"
			:total="page.total"
		></el-pagination>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {
		page: {
			type: Object,
			default: () => {
				return {
					currentPage: 1,
					pageSize: 10,
					total: null,
				};
			},
		},
		tableData: {
			type: Array,
			default: () => {
				return [
					{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
					},
					{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄',
					},
				];
			},
		},
		tableHeader: {
			type: Array,
			default: () => {
				return [
					{ lable: '日期', key: 'date' },
					{ lable: '姓名', key: 'name' },
					{ lable: '地址', key: 'address' },
				];
			},
			//  [
			// 		{ lable: '日期', key: 'date' },
			// 		{ lable: '姓名', key: 'name' },
			// 		{ lable: '地址', key: 'address' },
			// 	]
		},
		tableAction: {
			type: Array,
			default: () => ['create'],
		},
	},
	data() {
		return {};
	},
	computed: {
		createBtn() {
			return false;
		},
	},
	watch: {},
	methods: {
		handleSizeChange(val) {
			if (this.page.total == null) {
				this.page.total == null;
				this.page.pageSize = val;
				return;
			}
			this.page.pageSize = val;
			this.page.currentPage = 1;
			this.$emit('change', this.page);
		},
		handleCurrentChange(val) {
			if (this.page.total == null) {
				this.page.total == null;
				this.page.currentPage = 1;
				return;
			}
			this.page.currentPage = val;
			this.$emit('change', this.page);
		},
		handleCreate() {
			this.$emit('handleCreate', '点击新增按钮');
		},
		handleRead(data) {
			this.$emit('handleRead', data);
		},
		handleDelete(data) {
			this.$emit('handleDelete', data);
		},
		handleUpdate(data) {
			this.$emit('handleUpdate', data);
		},
		handleDisable(data) {
			this.$emit('handleDisable', data);
		},
		handleEnable(data) {
			this.$emit('handleEnable', data);
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

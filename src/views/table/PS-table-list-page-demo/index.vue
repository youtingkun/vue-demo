<template>
	<div>
		<el-card shadow="never">
			<el-form ref="searchForm" :inline="true" :model="searchForm" header-row-style="color:red">
				<el-form-item label="公司名">
					<el-input v-model="searchForm.name" placeholder="请输入" />
				</el-form-item>
				<el-form-item label="时间" prop="time">
					<el-date-picker v-model="searchForm.time" type="daterange" value-format="yyyy-MM-dd" placeholder="请选择" />
				</el-form-item>
				<el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
				<el-button type="primary" icon="el-icon-refresh-right" @click="handleReset('searchForm')">重置</el-button>
			</el-form>
		</el-card>
		<el-card shadow="never">
			<el-button type="primary" icon="el-icon-plus" @click="handleCreate">新增</el-button>
			<el-table :data="tableData" style="margin-top: 30px">
				<el-table-column prop="date" label="日期" width="180" />
				<el-table-column prop="name" label="姓名" width="180" />
				<el-table-column prop="address" label="地址" />
				<el-table-column fixed="right" label="操作" width="250">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="handleRead(scope.row)">查看</el-button>
						<el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
						<el-button type="text" size="small" @click="handleUpdate(scope.row)">编辑</el-button>
						<el-button type="text" size="small" @click="handleDisable(scope.row)">禁用</el-button>
						<el-button type="text" size="small" @click="handleEnable(scope.row)">启用</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					:current-page.sync="page.currentPage"
					:page-sizes="[10, 20, 50, 100]"
					:page-size="page.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:pager-count="5"
					:total="page.total"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</el-card>

		<detail ref="detail" @getList="getTableData()" />
	</div>
</template>

<script>
import detail from './detail';
export default {
	name: '',
	components: {
		detail,
	},
	data() {
		return {
			searchForm: {
				name: '',
				time: '',
			},
			tableData: [
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
			],
			page: {
				currentPage: 1,
				total: 20,
				pageSize: 5,
			},
		};
	},
	created() {
		this.getTableData();
	},
	methods: {
		handleSearch() {
			this.getTableData();
		},
		handleReset(formName) {
			this.$refs[formName].resetFields();
			this.getTableData();
		},
		getTableData() {
			const params = {
				startTime: this.searchForm.time[0],
				endTime: this.searchForm.time[0],
				...this.searchForm,
				page: {
					current: this.page.currentPage,
					size: this.page.pageSize,
				},
			};
			// 请求接口
			console.log('请求参数', params);
			// 数据赋值
			this.tableData = this.tableData;
			this.page.total = this.page.total;
		},
		handleRead(row) {
			this.$refs.detail.openDialog('read', row);
		},
		handleCreate() {
			this.$refs.detail.openDialog('create');
		},
		handleDelete(row) {
			this.$confirm('确定删除吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!',
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除',
					});
				});
		},
		handleDisable() {
			this.$confirm('确定禁用吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '禁用成功!',
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消禁用',
					});
				});
		},
		handleEnable() {
			this.$confirm('确定启用吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '启用成功!',
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消启用',
					});
				});
		},
		handleUpdate(row) {
			this.$refs.detail.openDialog('update', row);
		},
		handleSizeChange(value) {
			this.page.pageSize = value;
			this.getTableData();
		},
		handleCurrentChange(value) {
			this.page.currentPage = value;
			this.getTableData();
		},
	},
};
</script>

<style lang="scss"></style>

<template>
	<div class="">
		角色权限
		<el-table :data="tableList">
			<el-table-column prop="name" label="名字"></el-table-column>
			<el-table-column label="操作">
				<template v-slot="{ row }">
					<el-button @click="handleEdit(row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<Dialog ref="dialog"></Dialog>
	</div>
</template>

<script>
import Dialog from './dialog';

export default {
	name: '',
	components: { Dialog },
	props: {},
	data() {
		return {
			tableList: [],
			username: '',
		};
	},
	computed: {},
	watch: {},
	methods: {
		getRoleList() {
			this.$api.system.getRoleList().then(res => {
				this.tableList = res.data.list;
			});
		},
		handleEdit(row) {
			this.$refs['dialog'].openDialog(row);
		},
	},
	created() {},
	mounted() {
		this.getRoleList();
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

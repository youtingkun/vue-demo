<template>
	<el-dialog :title="title" :visible.sync="dialogVisible" :close-on-click-modal="false">
		模态框
		<span slot="footer">
			<el-button @click="dialogVisible = false">取消</el-button>
			<el-button type="primary" @click="handleSure">确定</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			dialogVisible: false,
			title: '',
			disable: false,
		};
	},
	methods: {
		openDialog(type, id) {
			this.dialogVisible = true;
			if (type === 'update') {
				this.title = '编辑';
			} else if (type === 'create') {
				this.title = '新增';
			} else if (type === 'read') {
				this.title = '查看';
			}
		},
		handleClose() {},
		handleSure() {
			this.dialogVisible = false;
			this.$emit('getList');
		},
	},
};
</script>

<style scoped></style>

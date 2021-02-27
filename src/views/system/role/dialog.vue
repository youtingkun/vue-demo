<template>
	<el-dialog :title="title" :visible.sync="dialogVisible" :close-on-click-modal="false" width="30%">
		{{ row }}
		<el-form :model="ruleForm" ref="ruleForm" label-suffix="：" label-width="100px"> </el-form>
		<el-tree
			ref="roleTree"
			:data="treeData"
			show-checkbox
			node-key="id"
			highlight-current
			:default-expanded-keys="expandedKeys"
			:default-checked-keys="checkedKeys"
			@node-click="nodeClick"
			@check="check"
			:filter-node-method="filterNode"
		>
		</el-tree>
		<el-button @click="getCheckedNodes">只获取子节点</el-button>
		<el-button @click="getCheckedKeys">只获取选中的子节点的key</el-button>
		<el-button @click="getHalfCheckedKeys">获取半选节点的key</el-button>
		<span slot="footer">
			<el-button @click="dialogVisible = false">取消</el-button>
			<el-button v-loading="dialogBtnLoading" @click="handleSure">确定</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	name: '',
	props: {},
	data() {
		return {
			dialogVisible: false,
			dialogBtnLoading: false,
			title: '',
			row: {},
			ruleForm: {},
			rules: {},
			treeData: [],
			expandedKeys: [2, 3],
			checkedKeys: [5],
		};
	},
	watch: {},
	computed: {},
	mounted() {},
	created() {
		this.$api.system.getRoleTree().then(res => {
			this.treeData = res.data;
		});
	},
	methods: {
		filterNode(value, data) {
			console.log('filterNode', value, data);
			if (!value) return true;
			return data.label.indexOf(value) !== -1;
		},
		getHalfCheckedKeys() {
			console.log(this.$refs['roleTree'].getHalfCheckedKeys(true));
		},
		getCheckedNodes() {
			console.log(this.$refs['roleTree'].getCheckedNodes(true));
		},
		getCheckedKeys() {
			console.log(this.$refs['roleTree'].getCheckedKeys(true));
		},
		check(val1, val2) {
			console.log('check', val1, val2);
		},
		handleSure() {
			this.$refs['ruleForm'].validate(valid => {
				if (valid) {
				}
			});
		},
		openDialog(row) {
			if (row) {
				this.title = 'edit';
				this.row = row;
			} else {
				this.title = 'add';
			}
			this.dialogVisible = true;
		},
		nodeClick(val1, val2, val3) {
			console.log('nodeClick', val1, val2, val3);
		},
	},
};
</script>

<style scoped></style>

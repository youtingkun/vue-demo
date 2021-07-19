<template>
	<el-dialog title="批量上传" :visible.sync="dialogVisible">
		<div class="all-photo">
			<div class="item">
				<el-upload class="avatar-uploader" action="action" multiple :http-request="uploadFile">
					<i class="el-icon-plus avatar-uploader-icon"></i>
					<div>添加</div>
				</el-upload>
			</div>
			<div class="item"></div>
		</div>

		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			dialogVisible: true,
		};
	},
	computed: {},
	watch: {},
	methods: {
		openDialog() {
			this.dialogVisible = true;
		},
		uploadFile(param) {
			debugger;
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
<style lang="scss">
.all-photo {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	.item {
		margin: 8px;
	}
}
.avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	width: 135px;
	height: 135px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
}
.avatar-uploader .el-upload:hover {
	border-color: #409eff;
	color: #409eff;
}
.avatar-uploader-icon {
	font-size: 28px;
}
.el-dialog__header {
	border-bottom: 1px solid #d9d9d9;
}
.el-dialog__footer {
	border-top: 1px solid #d9d9d9;
}
</style>

<template>
	<div>
		<el-dialog title="选择图片" :visible.sync="dialogVisible">
			<div class="right">
				<div class="header">
					<el-upload
						action="action"
						multiple
						:http-request="handleUploadFile"
						:show-file-list="false"
						accept="image/png, image/jpeg"
					>
						<el-button type="primary" icon="el-icon-plus">上传</el-button>
					</el-upload>
					<div class="search">
						图片名称：<el-input class="input" v-model="searchForm.name"></el-input
						><el-button @click="handelSearch">查询</el-button>
					</div>
				</div>
				<div class="body">
					<el-card shadow="never">
						<div class="tag-wrap">
							<el-tag class="tag" @click="handleTag(0)" :type="activityTag === 0 ? '' : 'info'"
								>全部</el-tag
							>
							<el-tag
								class="tag"
								v-for="item in groupList"
								:type="activityTag === item.id ? '' : 'info'"
								:key="item.id"
								@click="handleTag(item.id)"
								>{{ item.name }}</el-tag
							>
						</div>
						<div class="img-item-wrap" v-loading="dataListLoading">
							<div class="img-item" v-for="(item, index) in dataList" :key="item.id">
								<el-image
									class="img"
									src="www.baidu.com"
									:preview-src-list="['www.baidu.com']"
								></el-image>
								<div class="name">
									<el-checkbox
										v-model="dataList[index].isSelect"
										@change="handleCheckboxChange"
										label="这是名称"
									></el-checkbox>
								</div>
							</div>
						</div>
					</el-card>
				</div>
				<div class="footer">
					<el-pagination
						background
						@size-change="getDataList"
						@current-change="getDataList"
						:current-page.sync="searchForm.pageNumber"
						:page-sizes="[10, 20, 50, 100]"
						:page-size.sync="searchForm.pageSize"
						layout="total, sizes, prev, pager, next, jumper"
						:total="searchForm.total"
					>
					</el-pagination>
				</div>
			</div>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="handleSelectSure" :disabled="!selectList.lenght > 0">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog
			title="上传进度"
			:visible.sync="progressDialogVisible"
			width="700px"
			:close-on-click-modal="false"
			:close-on-press-escape="false"
			:show-close="false"
		>
			<el-progress
				v-if="this.uploadFileLength != 0"
				:percentage="(this.successUploadFileLength / this.uploadFileLength) * 100"
			></el-progress>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			searchForm: {
				name: '',
				groupId: '',
				pageSize: 10,
				pageNumber: 1,
				total: 50,
			},
			dialogVisible: false,
			dataList: [
				{ id: 1, isSelect: false },
				{ id: 2, isSelect: false },
				{ id: 3, isSelect: false },
				{ id: 4, isSelect: false },
				{ id: 5, isSelect: false },
				{ id: 6, isSelect: false },
				{ id: 7, isSelect: false },
				{ id: 8, isSelect: false },
				{ id: 9, isSelect: false },
				{ id: 10, isSelect: false },
			],
			groupList: [
				{ id: 1, name: '分组1' },
				{ id: 2, name: '分组2' },
				{ id: 3, name: '分组3' },
			],
			selectList: [],
			activityTag: '',
			dataListLoading: false,
			progressDialogVisible: false,
			uploadFileLength: 0,
			successUploadFileLength: 0,
		};
	},
	computed: {},
	watch: {},
	methods: {
		getDataList() {
			this.selectList = [];
			this.dataListLoading = true;
			setTimeout(() => {
				this.dataListLoading = false;
			}, 3000);
		},
		handelSearch() {},
		openDialog() {
			this.dialogVisible = true;
		},

		handleUploadFile(param) {
			console.log(param);
			this.uploadFileLength++;
			this.progressDialogVisible = true;
			setTimeout(() => {
				this.successUploadFileLength++;
				if (this.successUploadFileLength === this.uploadFileLength) {
					this.progressDialogVisible = false;
					this.successUploadFileLength = 0;
					this.uploadFileLength = 0;
				}
			}, this.uploadFileLength * 3000);
		},
		handleCheckboxChange() {
			this.selectList = this.dataList.filter(item => item.isSelect);
			console.log('selectList', this.selectList);
		},
		handleSelectSure() {
			let list = [];
			this.selectList.forEach(item => {
				list.push(item.id);
			});
			this.$emit('select', list);
			this.dialogVisible = false;
		},
		handleTag(id) {
			this.activityTag = id;
			this.getDataList();
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
.right {
	margin-left: 16px;
	background-color: #fff;
	flex: 1;
	padding: 16px;
	.header {
		line-height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.search {
			display: flex;
			flex-direction: row;
			.input {
				width: 200px;
				margin: 0 10px;
			}
		}
	}
	.body {
		margin-top: 25px;
		.tag-wrap {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.tag {
				margin: 12px;
			}
			.tag:hover {
				cursor: pointer;
			}
		}
		.img-item-wrap {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.img-item {
				margin: 12px;
				width: 135px;
				height: 135px;
				.img {
					width: 135px;
					height: 135px;
					object-fit: contain;
				}
				.name {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
	.footer {
		margin-top: 16px;
	}
}
</style>

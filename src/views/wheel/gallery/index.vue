<template>
	<div class="app-container">
		<div class="gallery-wrap">
			<div class="left">
				<el-menu class="group-list" default-active="2" @select="handleGroupSelect">
					<el-menu-item index="100" class="menu-item">全部（100）</el-menu-item>
					<el-menu-item v-for="(item, i) in groupList" :key="item.id" :index="item.id" class="menu-item">
						<div class="name">{{ `${item.name}(${item.number})` }}</div>
						<div>
							<i class="el-icon-edit-outline action" @click="handleEditGroupName(item.name, i)"> </i>
							<i class="el-icon-delete action" @click="handleDeleteGroup(item)"></i>
						</div>
					</el-menu-item>
				</el-menu>
				<el-button class="group-add" icon="el-icon-plus" @click="handleAddGroup">添加分组</el-button>
			</div>
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
						<div slot="header">
							<el-checkbox label="全选" v-model="isAllSelect" @change="handleAllSelect"></el-checkbox>
							<el-button
								type="text"
								style="margin-left: 10px"
								@click="handleMultipleDeletePhoto"
								:disabled="!this.selectList.length > 0"
								>批量删除</el-button
							>
							<el-button
								type="text"
								@click="handleMultipleRankPhoto"
								:disabled="!this.selectList.length > 0"
								>归档分类</el-button
							>
						</div>
						<div class="img-item-wrap" v-loading="dataListLoading">
							<div class="img-item" v-for="(item, index) in dataList" :key="item.id">
								<img class="img" src="www.baidu.com" />
								<div>
									<el-checkbox
										v-model="dataList[index].isSelect"
										@change="value => handleCheckboxChange(value, item)"
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
		</div>
		<el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="300px" :close-on-click-modal="false">
			<el-form>
				<el-form-item label="">
					<el-input v-model="groupItemInputValue"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog title="归档分类" :visible.sync="rankDialogVisible" width="700px" :close-on-click-modal="false">
			<el-radio-group v-model="rankRadio">
				<el-radio :label="3">分组1</el-radio>
				<el-radio :label="6">分组2</el-radio>
				<el-radio :label="9">分组3</el-radio>
			</el-radio-group>
			<span slot="footer" class="dialog-footer">
				<el-button @click="rankDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="rankDialogVisible = false">确 定</el-button>
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
		<gallery-select ref="gallerySelect" @select="handleSelect"></gallery-select>
		<el-button type="primary" @click="handleOpenGallerySelect">选择图片</el-button>
	</div>
</template>

<script>
import GallerySelect from './GallerySelect.vue';
export default {
	name: '',
	components: { GallerySelect },
	props: {},
	data() {
		return {
			progressDialogVisible: false,
			rankDialogVisible: false,
			dialogTitle: '新增',
			dialogVisible: false,
			searchForm: {
				name: '',
				groupId: '',
				pageSize: 10,
				pageNumber: 1,
				total: 100,
			},
			isAllSelect: false,
			selectList: [],
			groupList: [
				{ name: '分组1', number: 100, isEdit: false, id: '1' },
				{ name: '分组2', number: 10, isEdit: false, id: '2' },
				{ name: '分组3', number: 20, isEdit: false, id: '3' },
			],
			rankRadio: '',
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
			dataListLoading: false,
			groupItemInputValue: '',
			uploadFileLength: 0,
			successUploadFileLength: 0,
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleOpenGallerySelect() {
			this.$refs['gallerySelect'].openDialog();
		},
		handelSearch() {
			this.searchForm.pageSize = 10;
			this.searchForm.pageNumber = 1;
			this.getDataList();
		},
		getDataList() {
			console.log('获取数据', this.searchForm);
		},
		handleGroupSelect(index) {
			console.log(index);
		},
		handleUploadFile(param) {
			console.log(param);
			this.uploadFileLength++;
			this.progressDialogVisible = true;
			console.log('uploadFileLength', this.uploadFileLength);
			setTimeout(() => {
				this.successUploadFileLength++;
				if (this.successUploadFileLength === this.uploadFileLength) {
					this.progressDialogVisible = false;
					this.successUploadFileLength = 0;
					this.uploadFileLength = 0;
				}
			}, this.uploadFileLength * 3000);
		},
		handleSizeChange() {},
		handleCurrentChange() {},
		handleEditGroupName(name, index) {
			this.groupItemInputValue = name;
			this.dialogVisible = true;
			this.dialogTitle = '编辑分组';
		},
		handleAddGroup() {
			this.dialogVisible = true;
			this.dialogTitle = '新增分组';
		},
		handleEditGroupNameSure() {},
		handleDeleteGroup() {
			this.$confirm('确认删除分组？', '提示', {
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
		handleMultipleDeletePhoto() {
			this.$confirm('确认删除所选图片？', '提示', {
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
		handleMultipleRankPhoto() {
			this.rankDialogVisible = true;
		},
		handleRankCheckChange() {},
		handleCheckboxChange(value, item) {
			this.selectList = this.dataList.filter(item => item.isSelect);
			console.log('this.selectList', this.selectList);
		},
		handleAllSelect(value) {
			if (value) {
				this.dataList.forEach((item, index) => {
					this.dataList[index].isSelect = true;
				});
				this.handleCheckboxChange();
			} else {
				this.dataList.forEach((item, index) => {
					this.dataList[index].isSelect = false;
				});
				this.handleCheckboxChange();
			}
		},
		handleSelect(select) {
			console.log(select);
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
.app-container {
	background-color: #f4f4f9;
}
.gallery-wrap {
	display: flex;
	flex-direction: row;
	width: 100%;
	.left {
		line-height: 48px;
		width: 221px;
		.group-list {
			background-color: #fff;
			display: flex;
			flex-direction: column;
			padding: 16px 8px;
			.menu-item {
				height: 48px;
				margin: 8px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.name {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			.item {
				margin: 8px;
				display: flex;
				flex-direction: row;
				line-height: 48px;
				align-items: center;
				.button {
					text-align: left;
					flex: 1;
					border: none;
				}
				.button:hover {
					cursor: pointer;
					color: #409eff;
					background-color: #f4f4f9;
				}
				.action:hover {
					cursor: pointer;
					color: #409eff;
				}
			}
		}
		.group-add {
			margin-top: 16px;
			width: 100%;
		}
	}
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

			.img-item-wrap {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.img-item {
					margin: 12px;
					img {
						width: 135px;
						height: 135px;
					}
				}
			}
		}
		.footer {
			margin-top: 16px;
		}
	}
}
</style>

<template>
	<div class="app-container">
		<div class="gallery-wrap">
			<div class="left">
				<div class="group-list">
					<el-button class="item">全部</el-button>
					<el-button class="item">分组1</el-button>
					<el-button class="item">分组2</el-button>
				</div>
				<el-button class="group-add" icon="el-icon-plus">添加分组</el-button>
			</div>
			<div class="right">
				<div class="header">
					<el-button type="primary">上传</el-button>
					<div class="search">
						图片名称：<el-input class="input" v-model="searchForm.name"></el-input
						><el-button>查询</el-button>
					</div>
				</div>
				<div class="body">
					<el-card shadow="never">
						<div slot="header">
							<el-checkbox label="全选" v-model="isAllSelect"></el-checkbox>
							<el-button type="text" style="margin-left: 10px">批量删除</el-button>
							<el-button type="text">归档分类</el-button>
						</div>
						<div class="img-item-wrap">
							<div class="img-item" v-for="item in dataList" :key="item">
								<img class="img" src="www.baidu.com" />
								<div>
									<el-checkbox label="这是名称"></el-checkbox>
								</div>
							</div>
						</div>
					</el-card>
				</div>
				<div class="footer">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="1"
						:page-sizes="[10, 20, 50, 100]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="400"
					>
					</el-pagination>
				</div>
			</div>
		</div>
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
			},
			isAllSelect: false,
			selectList: [],
			groupList: [{ name: '', number: 123 }],
			dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleSizeChange() {},
		handleCurrentChange() {},
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
			.item {
				height: 48px;
				margin: 8px;
				border: none;
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
			.el-card__header {
				background-color: #ccc;
			}
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

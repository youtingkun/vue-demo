<template>
	<div class="">
		<div>{{ $t('hello') }}</div>
		<div>{{ $t('name', ['小王']) }}</div>
		<div style="width: 240px; height: 300px">{{ i18nHello }}</div>
		<ytk-button></ytk-button>

		<el-table :data="addressList" class="" @sort-change="handleSortChange">
			<el-table-column prop="name" label="收货人" sortable="custom"> </el-table-column>
			<el-table-column prop="phone" label="手机号码" sortable="custom"></el-table-column>
			<el-table-column prop="city" :formatter="formatter" label="区域信息"></el-table-column>
			<el-table-column prop="address" label="详细地址"></el-table-column>
			<el-table-column prop="post" label="邮政编码"></el-table-column>
			<el-table-column>
				<template slot-scope="scope">
					<el-button @click="handleEdit(scope.row)">编辑</el-button>
					<el-button @click="handleDel(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<address-dialog
			:v-loading="true"
			:showDialog="showDialog"
			:dialogType="dialogType"
			:addressItem="addressItem"
			@cancel="dialogCancel"
			@submit="dialogSubmit"
		>
		</address-dialog>
	</div>
</template>

<script>
import AddressDialog from './address-dialog';
import { CodeToText } from 'element-china-area-data';

export default {
	name: '',
	components: { AddressDialog },
	props: {},
	data() {
		return {
			showDialog: false,
			dialogType: '',
			addressItem: {},
			i18nHello: this.$t('hello'),
			input: 0,
		};
	},
	computed: {
		addressList: {
			get() {
				return this.$store.state.addressStore.addressList;
			},
		},
	},
	watch: {},
	methods: {
		handleSortChange(column, prop, order) {
			console.log(column, prop, order);
		},
		formatter(row) {
			let text = '';
			row.city.map(item => {
				text = text + CodeToText[item];
			});

			return text;
		},
		handleAdd() {
			this.dialogType = 'add';
			this.addressItem = {};
			this.showDialog = true;
		},
		handleEdit(addressItem) {
			this.dialogType = 'edit';
			this.addressItem = addressItem;
			this.showDialog = true;
		},
		async handleDel(addressItem) {
			this.$confirm('确定要删除此地址吗？', '删除此标签', {
				confirmButtonText: '删除',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$store.commit('addressStore/del', addressItem, {
						root: true,
					});
				})
				.catch(() => {});
		},
		dialogCancel() {
			this.showDialog = false;
		},
		dialogSubmit(addressItem) {
			if (this.dialogType === 'add') {
				setImmediate(() => {
					this.$store.commit('addressStore/add', addressItem, {
						root: true,
					});
					this.showDialog = false;
				}, 2000);
			} else if (this.dialogType === 'edit') {
				setTimeout(() => {
					this.$store.commit('addressStore/edit', addressItem, {
						root: true,
					});
					this.showDialog = false;
				}, 2000);
			}
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
<style scoped lang="scss">
.a {
	background-attachment: fixed;
}
</style>

<template>
	<div class="searchBox">
		<el-form :inline="true">
			<el-form-item :key="item.key" v-for="item in searchFormConfig" :label="item.label">
				<el-input v-if="item.el === 'input-text'" placeholder="请输入" v-model.trim="item.key"> </el-input>
				<el-checkbox-group v-if="item.el === 'checkbox-group'" v-model.trim="item.key">
					<el-checkbox v-for="checkboxItem in item.list" :key="checkboxItem.key" :value="checkboxItem.key" :label="checkboxItem.label">
						{{ checkboxItem.label }}
					</el-checkbox>
				</el-checkbox-group>
				<el-select v-if="item.el === 'select'" v-model="item.value">
					<el-option v-for="selectItem in item.list" :key="selectItem.value" :label="selectItem.label" :value="selectItem.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-search" @click="searchData()">查询</el-button>
				<el-button type="primary" icon="el-icon-refresh-right" @click="resetData()">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'search-form',
	components: {},
	props: {
		searchFormConfig: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {
		searchData() {
			this.$emit('searchData', this.searchFormConfig);
		},
		resetData() {
			this.$emit('resetData');
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

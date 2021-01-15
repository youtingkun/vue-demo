<template>
	<div class="">mock测试</div>
</template>

<script>
import { mockBasic } from '@/api/mock-test';
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			basicList: [],
		};
	},
	computed: {},
	watch: {},
	methods: {
		getListData() {
			mockBasic().then(res => {
				console.log(res);
			});
		},
	},
	created() {
		this.getListData();
	},
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

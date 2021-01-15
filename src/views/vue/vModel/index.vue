<template>
	<div class="">
		<div>父title的值：{{ title }}</div>
		<vModel v-model="title"></vModel>
	</div>
</template>

<script>
import vModel from './vModel.vue';
export default {
	name: '',
	components: {
		vModel,
	},
	props: {},
	data() {
		return {
			title: '123',
		};
	},
	computed: {},
	watch: {
		title: {
			handler(val, oldVal) {
				console.log('父title改变', val, oldVal);
			},
		},
	},
	methods: {},
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

<template>
	<div>
		子title：{{ title }}
		<button @click="change">改变title的值为234</button>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	model: {
		prop: 'title',
		event: 'changeOne',
	},

	props: {
		// 这将允许 `value` 属性用于其他用途
		value: String,
		// 使用 `title` 代替 `value` 作为 model 的 prop
		title: {
			type: String,
			default: 'Default title',
		},
	},
	methods: {
		change() {
			this.$emit('changeOne', '234');
		},
	},
};
</script>

<style scoped></style>

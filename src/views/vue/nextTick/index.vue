<template>
	<div>
		<div class="test1" @click="test1">{{ msg }}</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			msg: 'hello',
		};
	},
	methods: {
		test1() {
			this.msg = 'hello word';
			console.log(document.querySelectorAll('.test1')[0].innerHTML);
			// 1. 使用vm.$nextTick

			this.$nextTick().then(() => {
				console.log(document.querySelectorAll('.test1')[0].innerHTML); // 已经渲染
			});
		},
	},
};
</script>

<style scoped></style>

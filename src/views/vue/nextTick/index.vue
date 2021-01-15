<template>
	<div>
		<div class="test1" @click="test1">{{ msg }}</div>
		<div>$nextTick完成之前的值{{ beforeMsg }}</div>
		<div>$nextTick完成之后的值{{ nextMsg }}</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			msg: 'hello',
			beforeMsg: '',
			nextMsg: '',
		};
	},
	methods: {
		test1() {
			this.msg = 'hello word';
			console.log(document.querySelectorAll('.test1')[0].innerHTML);
			this.beforeMsg = document.querySelectorAll('.test1')[0].innerHTML;
			// 1. 使用vm.$nextTick

			this.$nextTick().then(() => {
				console.log(document.querySelectorAll('.test1')[0].innerHTML); // 已经渲染
				this.nextMsg = document.querySelectorAll('.test1')[0].innerHTML;
			});
		},
	},
};
</script>

<style scoped></style>

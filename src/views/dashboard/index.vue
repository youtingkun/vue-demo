<template>
	<div>
		<div>首页</div>
		<el-button @click="logout">登出</el-button>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	methods: {
		async logout() {
			await this.$store.dispatch('user/logout');
			this.$router.push(`/login?redirect=${this.$route.fullPath}`);
		},
	},
};
</script>

<style scoped></style>

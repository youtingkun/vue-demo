<template>
	<section class="app-main">
		<transition name="fade-transform" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view :key="key" />
			</keep-alive>
		</transition>
	</section>
</template>

<script>
export default {
	name: 'app-main',
	computed: {
		key() {
			return this.$route.path;
		},
		cachedViews() {
			return this.$store.state.tagsView.cachedViews.join();
		},
	},
};
</script>

<style scoped>
.app-main {
	/* 50 = navbar  */
	min-height: calc(100vh - 84px);
	width: 100%;
	position: relative;
	overflow: hidden;
	background-color: rgb(238, 243, 248);
}
.fixed-header + .app-main {
	padding-top: 50px;
	height: 100vh;
	overflow: auto;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
	.fixed-header {
		padding-right: 15px;
	}
}
</style>

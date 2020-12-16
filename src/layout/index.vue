<template>
	<div :class="classObj" class="app-wrapper">
		<sidebar class="sidebar-container" />
		<div class="main-container">
			<app-main />
		</div>
	</div>
</template>

<script>
import Sidebar from './sidebar/index';
import AppMain from './app-main';

export default {
	name: '',
	components: { Sidebar, AppMain },
	props: {},
	data() {
		return {};
	},
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar;
		},
		classObj() {
			return {
				hideSidebar: !this.sidebar.opened,
				openSidebar: this.sidebar.opened,
				withoutAnimation: this.sidebar.withoutAnimation,
				mobile: this.device === 'mobile',
			};
		},
	},
	watch: {},
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
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';

.app-wrapper {
	@include clearfix;

	position: relative;
	height: 100%;
	width: 100%;
	&.mobile.openSidebar {
		position: fixed;
		top: 0;
	}
}
.drawer-bg {
	background: #000;
	opacity: 0.3;
	width: 100%;
	top: 0;
	height: 100%;
	position: absolute;
	z-index: 999;
}

.fixed-header {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9;
	width: calc(100% - #{$sideBarWidth});
	transition: width 0.28s;
}

.hideSidebar .fixed-header {
	width: calc(100% - 54px);
}

.mobile .fixed-header {
	width: 100%;
}
</style>

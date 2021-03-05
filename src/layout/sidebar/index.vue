<template>
	<div class="">
		<logo :collapse="isCollapse" />
		<el-scrollbar wrap-class="scrollbar-wrapper">
			<el-menu
				:default-active="activeMenu"
				:collapse="isCollapse"
				:background-color="variables.menuBg"
				:text-color="variables.menuText"
				:unique-opened="false"
				:active-text-color="variables.menuActiveText"
				:collapse-transition="false"
				mode="vertical"
			>
				<sidebar-item
					v-for="route in permissionRoutes"
					:key="route.path"
					:item="route"
					:base-path="route.path"
				/>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
import SidebarItem from './sidebar-item.vue';
import variables from '@/styles/variables.scss';
import Logo from './logo';
export default {
	components: { SidebarItem, Logo },
	props: {},
	data() {
		return {};
	},
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar;
		},
		routes() {
			return this.$router.options.routes;
		},
		permissionRoutes() {
			return this.$store.state.permission.routes;
		},
		activeMenu() {
			const route = this.$route;
			const { meta, path } = route;
			// if set path, the sidebar will highlight the path you set
			if (meta.activeMenu) {
				return meta.activeMenu;
			}
			return path;
		},
		variables() {
			return variables;
		},
		isCollapse() {
			return !this.$store.state.app.sidebar.opened;
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
<style lang="scss" scoped></style>

import Layout from '@/layout';
import nested from './modules/nested.js';
import table from './modules/table.js';
import components from './modules/components.js';
import vue from './modules/vue';
import wheel from './modules/wheel';
import mock from './modules/mock';
import css from './modules/css';
import system from './modules/system';
import form from './modules/form';

export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: false,
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true,
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('@/views/dashboard/index'),
				name: 'dashboard',
				meta: { title: '首页', icon: 'dashboard', affix: true },
			},
		],
	},
	{
		path: '/temp',
		component: Layout,
		children: [
			{
				path: 'index',
				component: () => import('@/views/temp/index'),
				name: 'temp',
				meta: { title: 'temp' },
			},
		],
	},
];

export const asyncRoutes = [
	{
		path: '/form',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'form',
				component: () => import('@/views/form/index'),
				meta: { title: '表单', icon: 'form' },
			},
		],
	},
	{
		path: '/address',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'address',
				meta: {
					title: '地址编辑',
					icon: 'nested',
					roles: 'address',
				},
				component: () => import('@/views/address/address.vue'),
			},
		],
	},
	nested,
	table,
	components,
	vue,
	wheel,
	mock,
	css,
	system,
	{
		path: '/custom-directives',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'custom-directives',
				meta: {
					title: 'vue自定义指令',
				},
				component: () => import('@/views/custom-directives/index.vue'),
			},
		],
	},
	{ path: '*', redirect: '/404', hidden: true },
];

const routes = { constantRoutes, asyncRoutes };

export default routes;

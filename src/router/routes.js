import Layout from '@/layout';
import nested from './modules/nested.js';

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
				meta: { title: '表单', icon: 'form', roles: 'form' },
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
	{ path: '*', redirect: '/404', hidden: true },
];

const routes = { constantRoutes, asyncRoutes };

export default routes;

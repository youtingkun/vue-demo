import nested from './nested.js';
const Address = () => import('@/views/address/address.vue');

const routes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true,
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true,
	},
	{
		path: '/address',
		name: 'address',
		meta: {
			title: '地址编辑',
			icon: 'nested',
		},
		component: Address,
	},
	nested,
];

export default routes;

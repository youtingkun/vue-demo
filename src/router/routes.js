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
		meta: {},
		component: Address,
	},
];

export default routes;

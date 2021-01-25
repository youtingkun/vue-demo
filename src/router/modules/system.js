import Layout from '@/layout';
const system = {
	path: '/system',
	component: Layout,
	meta: {
		title: 'system',
	},
	children: [
		{
			path: '/role',
			component: () => import('@/views/system/role'),
			name: 'role',
			meta: {
				title: 'role',
			},
		},
		{
			path: '/account',
			component: () => import('@/views/system/account'),
			name: 'account',
			meta: {
				title: 'account',
			},
		},
	],
};

export default system;

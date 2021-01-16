import Layout from '@/layout';
const mock = {
	path: '/mock',
	component: Layout,
	meta: {
		title: 'mock',
	},
	children: [
		{
			path: 'basic',
			component: () => import('@/views/mock/basic'),
			name: 'mockBasic',
			meta: {
				title: 'mock',
			},
		},
	],
};

export default mock;

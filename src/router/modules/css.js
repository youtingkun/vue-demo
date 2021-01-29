import Layout from '@/layout';
const css = {
	path: '/css',
	component: Layout,
	meta: {
		title: 'css',
	},
	children: [
		{
			path: 'cloud',
			component: () => import('@/views/css/cloud'),
			name: 'cloud',
			meta: {
				title: 'cloud',
			},
		},
	],
};

export default css;

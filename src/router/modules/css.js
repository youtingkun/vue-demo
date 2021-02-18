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
		{
			path: 'css-var',
			component: () => import('@/views/css/css-var'),
			name: 'css-var',
			meta: {
				title: 'css-var',
			},
		},
	],
};

export default css;

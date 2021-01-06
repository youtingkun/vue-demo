import Layout from '@/layout';
const wheel = {
	path: '/wheel',
	component: Layout,
	meta: {
		title: 'wheel',
	},
	children: [
		{
			path: 'copy',
			component: () => import('@/views/wheel/copy'),
			name: 'copy',
			meta: {
				title: 'copy',
			},
		},
		{
			path: 'loading',
			component: () => import('@/views/wheel/loading'),
			name: 'loading',
			meta: {
				title: 'loading',
			},
		},
	],
};

export default wheel;

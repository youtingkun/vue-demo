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
			path: 'threejs',
			component: () => import('@/views/css/test-threejs'),
			name: 'threejs',
			meta: {
				title: 'threejs',
			},
		},
	],
};

export default css;

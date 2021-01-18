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
		{
			path: 'base',
			component: () => import('@/views/css/test-threejs/base.vue'),
			name: 'base',
			meta: {
				title: 'base',
			},
		},
	],
};

export default css;

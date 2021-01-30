import Layout from '@/layout';
const testThreejs = {
	path: '/testThreejs',
	component: Layout,
	meta: {
		title: 'threejs',
	},
	children: [
		{
			path: 'index',
			component: () => import('@/views/test-threejs/index'),
			name: 'index',
			meta: {
				title: 'index',
			},
		},
		{
			path: 'base',
			component: () => import('@/views/test-threejs/base.vue'),
			name: 'base',
			meta: {
				title: 'base',
			},
		},
		{
			path: 'line',
			component: () => import('@/views/test-threejs/line.vue'),
			name: 'line',
			meta: {
				title: 'line',
			},
		},
	],
};

export default testThreejs;

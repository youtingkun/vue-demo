import Layout from '@/layout';
const testWebgl = {
	path: '/testWebgl',
	component: Layout,
	alwaysShow: true,
	meta: {
		title: 'testWebgl',
	},
	children: [
		{
			path: 'hello-canvas',
			component: () => import('@/views/test-webgl/hello-canvas'),
			name: 'hello-canvas',
			meta: {
				title: 'hello-canvas',
			},
		},
		{
			path: 'test1',
			component: () => import('@/views/test-webgl/test1'),
			name: 'test1',
			meta: {
				title: 'test1',
			},
		},
		{
			path: 'tree',
			component: () => import('@/views/test-webgl/tree'),
			name: 'tree',
			meta: {
				title: 'tree',
			},
		},
		{
			path: 'earth',
			component: () => import('@/views/test-webgl/earth'),
			name: 'earth',
			meta: {
				title: 'earth',
			},
		},
	],
};

export default testWebgl;

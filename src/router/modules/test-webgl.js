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
	],
};

export default testWebgl;

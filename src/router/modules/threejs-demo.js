import Layout from '@/layout';
const threejsDemo = {
	path: '/threejsDemo',
	component: Layout,
	alwaysShow: true,
	meta: {
		title: 'threejsDemo',
	},
	children: [
		{
			path: 'buffergeometry-lines',
			component: () => import('@/views/threejs-demo/buffergeometry-lines'),
			name: 'buffergeometry-lines',
			meta: {
				title: 'buffergeometry-lines',
			},
		},
	],
};

export default threejsDemo;

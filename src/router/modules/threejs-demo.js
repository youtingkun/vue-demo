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
		{
			path: 'geometry-terrain',
			component: () => import('@/views/threejs-demo/geometry-terrain.vue'),
			name: 'geometry-terrain',
			meta: {
				title: 'geometry-terrain',
			},
		},
		{
			path: 'gpgpu-birds',
			component: () => import('@/views/threejs-demo/gpgpu-birds.vue'),
			name: 'gpgpu-birds',
			meta: {
				title: 'gpgpu-birds',
			},
		},
		{
			path: 'fog-bg',
			component: () => import('@/views/threejs-demo/fog-bg.vue'),
			name: 'fog-bg',
			meta: {
				title: 'fog-bg',
			},
		},
	],
};

export default threejsDemo;

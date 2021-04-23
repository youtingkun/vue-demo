import Layout from '@/layout';
const wheel = {
	path: '/wheel',
	component: Layout,
	meta: {
		title: 'wheel',
	},
	children: [
		{
			path: 'drag-demo',
			component: () => import('@/views/wheel/drag-demo'),
			name: 'drag-demo',
			meta: {
				title: 'drag-demo',
			},
		},
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
		{
			path: 'websocket',
			component: () => import('@/views/wheel/websocket'),
			name: 'websocket',
			meta: {
				title: 'websocket',
			},
		},
		{
			path: 'static-demo',
			component: () => import('@/views/wheel/static-demo'),
			name: 'static-demo',
			meta: {
				title: 'static-demo',
			},
		},
	],
};

export default wheel;

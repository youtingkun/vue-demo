import Layout from '@/layout';
const testThreejs = {
	path: '/testThreejs',
	component: Layout,
	meta: {
		title: 'threejs',
	},
	children: [
		{
			path: 'texture',
			component: () => import('@/views/test-threejs/texture'),
			name: 'texture',
			meta: {
				title: 'texture',
			},
		},
		{
			path: 'material',
			component: () => import('@/views/test-threejs/material'),
			name: 'material',
			meta: {
				title: 'material',
			},
		},
		{
			path: 'scene',
			component: () => import('@/views/test-threejs/scene'),
			name: 'scene',
			meta: {
				title: 'scene',
			},
		},
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
		{
			path: 'grid',
			component: () => import('@/views/test-threejs/grid.vue'),
			name: 'grid',
			meta: {
				title: 'grid',
			},
		},
		{
			path: 'stats',
			component: () => import('@/views/test-threejs/stats.vue'),
			name: 'stats',
			meta: {
				title: 'stats',
			},
		},
		{
			path: 'camera',
			component: () => import('@/views/test-threejs/camera.vue'),
			name: 'camera',
			meta: {
				title: 'camera',
			},
		},
		{
			path: 'light',
			component: () => import('@/views/test-threejs/light.vue'),
			name: 'light',
			meta: {
				title: 'light',
			},
		},
		{
			path: 'responsive',
			component: () => import('@/views/test-threejs/responsive.vue'),
			name: 'responsive',
			meta: {
				title: 'responsive',
			},
		},
	],
};

export default testThreejs;

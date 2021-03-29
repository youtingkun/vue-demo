import Layout from '@/layout';
const vue = {
	path: '/vue',
	component: Layout,
	meta: {
		title: 'vue',
	},
	children: [
		{
			path: 'next-tick',
			component: () => import('@/views/vue/nextTick'),
			name: 'next-tick',
			meta: {
				title: 'nextTick',
			},
		},
		{
			path: 'vModel',
			name: 'vModel',
			component: () => import('@/views/vue/vModel'),
			meta: {
				title: 'vModel',
			},
		},
		{
			path: 'component-one',
			name: 'component-one',
			component: () => import('@/views/vue/life-cycle/component-one'),
			meta: {
				title: 'component-one',
			},
		},
		{
			path: 'component-two',
			name: 'component-two',
			component: () => import('@/views/vue/life-cycle/component-two'),
			meta: {
				title: 'component-two',
			},
		},
	],
};

export default vue;

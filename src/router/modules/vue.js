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
	],
};

export default vue;

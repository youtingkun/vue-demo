import Layout from '@/layout';
const js = {
	path: '/js',
	component: Layout,
	alwaysShow: true,
	meta: {
		title: 'js',
	},
	children: [
		{
			path: 'event-loop',
			component: () => import('@/views/js/event-loop'),
			name: 'event-loop',
			meta: {
				title: 'event-loop',
			},
		},
	],
};

export default js;

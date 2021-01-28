import Layout from '@/layout';
const form = {
	path: '/form',
	component: Layout,
	meta: {
		title: 'form',
	},
	alwaysShow: true,
	children: [
		{
			path: 'form1',
			component: () => import('@/views/form/index'),
			name: 'form1',
			meta: {
				title: 'form1',
			},
		},
	],
};

export default form;

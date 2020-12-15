import Layout from '@/layout';

const nested = {
	path: '/nested',
	component: Layout,
	redirect: '/nested/menu1',
	name: 'Nested',
	meta: {
		title: 'Nested',
		icon: 'el-icon-share',
	},
	children: [
		{
			path: 'menu1',
			component: () => import('@/views/nested/menu1/index'), // Parent router-view
			name: 'Menu1',
			meta: { title: 'Menu1', icon: 'el-icon-share' },
			children: [
				{
					path: 'menu1-1',
					component: () => import('@/views/nested/menu1/menu1-1'),
					name: 'Menu1-1',
					meta: { title: 'Menu1-1', icon: 'el-icon-share' },
				},
				{
					path: 'menu1-2',
					component: () => import('@/views/nested/menu1/menu1-2'),
					name: 'Menu1-2',
					meta: { title: 'Menu1-2', icon: 'el-icon-share' },
					children: [
						{
							path: 'menu1-2-1',
							component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
							name: 'Menu1-2-1',
							meta: { title: 'Menu1-2-1' },
						},
						{
							path: 'menu1-2-2',
							component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
							name: 'Menu1-2-2',
							meta: { title: 'Menu1-2-2' },
						},
					],
				},
			],
		},
		{
			path: 'menu2',
			component: () => import('@/views/nested/menu2/index'),
			name: 'Menu2',
			meta: { title: 'menu2', icon: 'link' },
		},
	],
};

export default nested;
